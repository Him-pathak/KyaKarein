import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { useMemo, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";
// import Weather from "./components/Weather";
import { setLogin, selectUser } from "./state/userSlice";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const mode = useSelector((state) => state.user.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  //const user = useSelector((state) => state.user);

  const user = useSelector(selectUser);

  const dispatch = useDispatch();
  
  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        dispatch(
          setLogin({
            userName: authUser.displayName,
            photo: authUser.photoURL,
            email: authUser.email,
            uid: authUser.uid,
          })
          );
          console.log("AuthUser", authUser);
        }
      });
    }, [dispatch]);
    
    console.log("User is", user, "mode", mode);
    return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route
              path="/home"
              element={user? <HomePage /> : <LoginPage/>}
            />
            {/* <Route
            path="/weather"
            element={<Weather/>}
            /> */}
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

const express = require("express");
const router = express.Router();

const questionDB = require("../models/Question");

router.post("/", async (req, res) => {
  console.log(req.body);

  try {
    await questionDB
      .create({
        questionName: req.body.questionName,
        questionUrl: req.body.questionUrl,
        user: req.body.user,
        audio: req.body.audio,
      })
      .then(() => {
        res.status(201).send({
          status: true,
          message: "Question added successfully",
        });
      })
      .catch((err) => {
        res.status(400).send({
          staus: false,
          message: "Bad format",
        });
      });
  } catch (e) {
    res.status(500).send({
      status: false,
      message: "Error while adding question",
    });
  }
});

router.get("/", async (req, res) => {
  try {
    await questionDB
      .aggregate([
        {
          $lookup: {
            from: "answers", //collection to join
            localField: "_id", //field from input document
            foreignField: "questionId",
            as: "allAnswers", //output array field
          },
        },
      ])
      .exec()
      .then((doc) => {
        res.status(200).send(doc);
      })
      .catch((error) => {
        res.status(500).send({
          status: false,
          message: "Unable to get the question details",
        });
      });
  } catch (e) {
    res.status(500).send({
      status: false,
      message: "Unexpected error",
    });
  }
});


// router.patch("/:id/likes", async (req, res) => {
//   try {
//     const question = await questionDB.findById(req.params.id);
//     if (!question) {
//       return res.status(404).send({
//         status: false,
//         message: "Question not found",
//       });
//     }
//     const { likes } = req.body;
//     question.likes = likes;
//     await question.save();
//     res.status(200).send({
//       status: true,
//       message: "Likes updated successfully",
//       data: question,
//     });
//   } catch (e) {
//     res.status(500).send({
//       status: false,
//       message: "Error while updating likes",
//     });
//   }
// });

module.exports = router;

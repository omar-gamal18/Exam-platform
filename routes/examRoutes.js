const express = require("express");

const examController = require("../controllers/examController");

const router = express.Router();

router
  .route("/:id")
  .get(examController.getExam)
  .patch(examController.updateExam)
  .delete(examController.deleteExam);

router.get("/", examController.getAllExams);

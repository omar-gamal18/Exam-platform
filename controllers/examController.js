const Exam = require("../models/examModel");

exports.getAllExams = async (req, res, next) => {
  const exams = await Exam.find();

  res.status(200).json({
    status: "success",
    results: exams.length,
    data: {
      exams,
    },
  });
};

exports.gtExam = async (req, res, next) => {
  const exam = await Exam.findById(req.params.id);

  if (!exam) {
    return res.status(404).json({
      status: "fail",
      message: "No exam found with that id",
    });
  }

  res.status(201).json({
    status: "success",
    data: {
      exam,
    },
  });
};

exports.updateExam = async (req, res, next) => {
  const exam = await Exam.findByIdAndUpdate(req.params.id, req.body, {
    returnDocument: "after",
    runValidators: true,
  });

  if (!exam) {
    return res.status(404).json({
      status: "fail",
      message: "No exam found with that id",
    });
  }

  res.status(200).json({
    status: "success",
    data: {
      exam,
    },
  });
};

exports.deleteExam = async (req, res, next) => {
  const exam = await Exam.findByIdAndDelete(req.params.id);

  if (!exam) {
    return res.status(404).json({
      status: "fail",
      message: "No exam found with that id",
    });
  }

  res.status(204).send();
};

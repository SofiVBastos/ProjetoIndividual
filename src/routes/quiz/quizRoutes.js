var express = require("express");
var router = express.Router();

var quizController = require("../../controllers/quiz/quizController");

router.post('/update-pontuacao', (req, res) => {
    quizController.update_user_score(req,res)
})

router.get('/top-5', (req,res) => {
    quizController.get_top_5(req,res)
})

module.exports = router;
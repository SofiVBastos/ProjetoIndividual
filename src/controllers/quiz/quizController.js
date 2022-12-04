const quizModel = require('../../models/quiz/quizModel')

async function update_user_score(req, res) {
    const { idUser, pontuacao } = req.body
    const user_response_alternative = await quizModel.user_already_answer_quiz_to_the_first_time(idUser)
    console.log("sua pontuação",pontuacao)

    // caso o usuario tenha respondido
    if (user_response_alternative[0].exists) {
        await quizModel.update_user_score(pontuacao, idUser)
    } else {
        await quizModel.insert_user_score(idUser, pontuacao)
    }
}

async function get_top_5(req, res) {
    const top_5 = await quizModel.get_top_5();

    return res.status(200).json(top_5);

}

module.exports = {
    update_user_score,
    get_top_5
}
const database = require('../../database/config')


async function update_user_score(pontuacao, fkUsuario) {
    const sql = `update quiz set pontuacao = ${pontuacao} where fkUsuario = ${fkUsuario}`

    return database.executar(sql)
}

async function user_already_answer_quiz_to_the_first_time(idUsuario) {
    const sql = `SELECT ( 
        CASE
            WHEN exists (select * from quiz where fkUsuario = ${idUsuario})  THEN 1
            ELSE 0
        END) as 'exists';`

    return await database.executar(sql);
}

async function insert_user_score(fkUsuario, pontuacao) {

    const sql = `insert into quiz (pontuacao, data, fkUsuario) values
            (${pontuacao}, CURDATE(), ${fkUsuario});`


    return database.executar(sql)
}

async function get_top_5() {
    const sql = `select nickname,
                 pontuacao 
from usuario as u left join quiz as q
    on u.id = q.fkUsuario 
order by pontuacao desc limit 5;`

    return database.executar(sql)
}

module.exports = {
    user_already_answer_quiz_to_the_first_time,
    insert_user_score,
    update_user_score,
    get_top_5
}
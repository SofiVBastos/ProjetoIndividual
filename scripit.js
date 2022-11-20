var pontos = 0;


function vericar_resposta(pergunta, resposta){
  var pergunta_atual = document.getElementById(`pergunta${pergunta+1}`)
  var proxPergunta = document.getElementById(`pergunta${pergunta+2}`)

  for(let i = 0; i < quizArray.length; i++){
    if(quizArray[i].id == pergunta){
      if(resposta == quizArray[i].correta){
        pontos++
        alert("Acertou")

      }else{
        alert("Errou!")
      }

      pergunta_atual.style.display = "none"
      proxPergunta.style.display = "block"

    }
  }
}
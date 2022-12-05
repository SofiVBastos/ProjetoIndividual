var pontos = 0;

function start() {
  inicio.style.display = "none"
  pergunta1.style.display = "block"
}

async function verificar_resposta(pergunta, resposta) {
  var pergunta_atual = document.getElementById(`pergunta${pergunta}`)
  var proxPergunta = document.getElementById(`pergunta${pergunta + 1}`)

  for (let i = 0; i < quizArray.length; i++) {
    if (quizArray[i].id == pergunta) {
      if (resposta == quizArray[i].correta) {
        pontos += 20
        alert("Acertou")

        pergunta_atual.style.display = "none"
        
        
        if (quizArray[i].id != 5) {
          proxPergunta.style.display = "block"
        } else {
          pont.style.display = "block"
          
        }
        
        console.log(pontos)
        await update_pontuacao(pontos)
        
        
      } else {
        pontos -= 6

        alert("Errou!")

        pergunta_atual.style.display = "none"
        

        if (quizArray[i].id != 5) {
          proxPergunta.style.display = "block"
        } else {
          pont.style.display = "block"  
          

        }

        console.log(pontos)
        await update_pontuacao(pontos)

      }
    }
  }
  
}


const update_pontuacao = async (pontuacao) => {
  await fetch('/quiz/update-pontuacao', {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      idUser: Number(sessionStorage.getItem('ID_USUARIO')),
      pontuacao: pontuacao
    })
  })
}

console.log(Number(sessionStorage.getItem('ID_USUARIO')))


async function reload_ranking() {
  const res = await get_top_5()

  top_5.innerHTML = ''

  top_5.innerHTML += `

<div class="dados7">
  <div class="separar1">
      <div class="container">
        <span>1º</span>
      </div>
  </div>

  <div class="separar2">
      <div class="container">
        <span>${res[0].nickname}</span>
      </div>
  </div>

  <div class="separar3">
    <div class="container">
        <p>${res[0].pontuacao}</p>
    </div>
  </div>
</div>

  
<div class="dados6">
  <div class="separar1">
    <div class="container">
      <span>2º</span>
    </div>
  </div>

  <div class="separar2">
    <div class="container">
        <span>${res[1].nickname}</span>
    </div>
  </div>

  <div class="separar3">
    <div class="container">
        <p>${res[1].pontuacao}</p>
    </div>
  </div>
</div>


<div class="dados7">

  <div class="separar1">
    <div class="container">
        <span>3º</span>
    </div>
  </div>

  <div class="separar2">
    <div class="container">
        <span>${res[2].nickname}</span>
    </div>
  </div>

  <div class="separar3">
    <div class="container">
      <p>${res[2].pontuacao}</p>
    </div>
  </div>

</div>


  <div class="dados6">
      <div class="separar1">
          <div class="container">
              <span>4º</span>
          </div>
      </div>
      <div class="separar2">
          <div class="container">
              <span>${res[3].nickname}</span>
          </div>
      </div>
      <div class="separar3">
          <div class="container">
              <p>${res[3].pontuacao}</p>
          </div>
      </div>
  </div>

<div class="dados7">
      <div class="separar1">
          <div class="container">
              <span>5º</span>
          </div>
      </div>
      <div class="separar2">
          <div class="container">
              <span>${res[4].nickname}</span>
          </div>
      </div>
      <div class="separar3">
          <div class="container">
              <p>${res[4].pontuacao}</p>
    </div>
  </div>
</div>

<div class="linha7">
  <div class="conter">
    <button onclick="prox()" class="button-24" role="button"><a href="homelogado.html">Próximo</a></button>
  </div>
</div>
`


}


const get_top_5 = async () => {
  const response = await fetch('/quiz/top-5', {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })
  return await response.json();
}


  setInterval( async () => {
      await reload_ranking();
  }, 2000);


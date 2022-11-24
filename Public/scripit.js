var pontos = 0;

function start() {
  inicio.style.display = "none"
  pergunta1.style.display = "block"

}

function vericar_resposta(pergunta, resposta) {
  var pergunta_atual = document.getElementById(`pergunta${pergunta + 1}`)
  var proxPergunta = document.getElementById(`pergunta${pergunta + 2}`)

  for (let i = 0; i < quizArray.length; i++) {
    if (quizArray[i].id == pergunta) {
      if (resposta == quizArray[i].correta) {
        pontos++
        alert("Acertou")

      } else {
        alert("Errou!")
      }

      if (pergunta == 9) {
        pergunta_atual.style.display = "none"
        pont.style.display = "block"

      }
      pergunta_atual.style.display = "none"
      proxPergunta.style.display = "block"
    }
  }
}


function prox() {
pont.style.display = "none"
grafic.style.display = "block"
}


function next(){
  grafic.style.display = "none"
  coments.style.display = "block"
}

const ctx = document.getElementById('myChart');


new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['1', '2', '3', '4', '5',],
    datasets: [{
      label: 'Pontuação',
      data: [12, 19, 3, 5, 2],
      backgroundColor: [
        'rgba(144, 150, 255, 0.5)',
        'rgba(144, 150, 255, 0.5)',
        'rgba(144, 150, 255, 0.5)',
        'rgba(144, 150, 255, 0.5)',
        'rgba(144, 150, 255, 0.5)',
        'rgba(144, 150, 255, 0.5)',
        'rgba(144, 150, 255, 0.5)'
      ],
      borderColor: [
        '#3e45ccd6',
        '#3e45ccd6',
        '#3e45ccd6',
        '#3e45ccd6',
        '#3e45ccd6',
        '#3e45ccd6',
        '#3e45ccd6'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});


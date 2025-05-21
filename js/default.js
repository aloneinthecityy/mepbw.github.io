// 1. onclick
let btnMobile = document.getElementById('btn-mobile');

function toggleMenu() {
  const nav = document.getElementById('nav');

  nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);

// 2 e 3. mouseover + mouseout
let elementos = document.querySelectorAll('.hover');

elementos.forEach(function(elemento) {
  elemento.addEventListener('mouseover', function() {
    this.style.color = 'red';
  });
  
  elemento.addEventListener('mouseout', function() {
    this.style.color = 'white';
  });
});


// 2 e 3. mouseover + mouseout
let imagens = document.querySelectorAll('.zoom');

imagens.forEach(function(imagem) {
  imagem.addEventListener('mouseover', function() {
    this.style.width = '100%';
    this.style.height = '100%';
  });

  imagem.addEventListener('mouseout', function() {
    this.style.width = '';
    this.style.height = '';
  });
});


// 4. onscroll
const myButton = document.querySelector('.bottomtop');

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  // Só exibe o botão se estiver abaixo do footer
  if (document.body.scrollTop >= 2000 || document.documentElement.scrollTop >= 2000) {
    myButton.style.display = "block";
  } else {
    myButton.style.display = "none";
  }
}

// Adicionar evento de clique ao botão
myButton.addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // cria uma animação de rolagem suave
  });
});


// 5. submit 
const form = document.querySelector("form");

form.addEventListener("submit", function() {
  let nome = document.getElementById('nome').value;
  let email = document.getElementById('email').value;
  let mensagem = document.getElementById('mensagem').value;
  
  // Se os campos não estiverem vazios, retorna um alert com uma mensagem de agradecimento:
  if (nome != '' && email != '' && mensagem != '') {
    const nomeInput = document.getElementById("nome");
    const nome = nomeInput.value;
    
    // Recarrega a página, para remover as divs que foram criadas na função abaixo.
    location.reload();

    alert("Obrigada por me contatar, " + nome + "! Entrarei em contato assim que possível!");
  }
});

// Cria uma div com uma mensagem quando os campos estiverem vazios
function validarFormulario(e) {
  e.preventDefault(); // Impede que a página seja recarregada

  let nome = document.getElementById('nome').value;
  let email = document.getElementById('email').value;
  let mensagem = document.getElementById('mensagem').value;
  
  // Se os campos estiverem vazios, cria uma div com uma mensagem:
  if (nome === '' || email === '' || mensagem === '') {
    // Preenche o conteúdo da div se houver erro, se não houver, oculta a div
    let divAviso = document.querySelector('.aviso');

    if (divAviso === null) {
      divAviso = document.createElement('div');
      divAviso.classList.add('aviso');
      divAviso.innerHTML = 'Por favor, preencha todos os campos.';
    }
    
    // Insere a div de aviso antes do formulário 
    let formulario = document.querySelector('form');
    formulario.parentNode.insertBefore(divAviso, formulario);
  }
}

form.addEventListener("submit", validarFormulario);

// 6. dblclick 
function fullScreen() {
  // pega todas as imagens da galeria
  const galeria = document.getElementById('galeria');
  const images = galeria.querySelectorAll('.item');

  // ao dar dois cliques, a imagem entra em tela cheia
  images.forEach(function (img) {
    img.addEventListener('dblclick', function () {
      if (img.requestFullscreen) {
        img.requestFullscreen();
      } else if (img.mozRequestFullScreen) {
        img.mozRequestFullScreen();
      } else if (img.webkitRequestFullscreen) {
        img.webkitRequestFullscreen();
      } else if (img.msRequestFullscreen) {
        img.msRequestFullscreen();
      }
    });
  });

  // 7. keydown
  document.addEventListener('keydown', function (event) {
    if (document.fullscreenElement && event.key === 'ArrowDown') {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  });
}

fullScreen();

// 8. onfocusin + onfocusout
// troca a cor de fundo do input quando ele está em foco
function trocaFundo() {
  // pega input e textarea
  const elements = document.querySelectorAll('input, textarea');
  
  elements.forEach(function (input) {
    input.addEventListener('focusin', function () {
      this.style.backgroundColor = '#101010';
    });
  
    input.addEventListener('focusout', function () {
      this.style.backgroundColor = '';
    });
  });
}

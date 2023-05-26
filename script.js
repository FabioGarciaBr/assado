window.onload = function() {
    const videoUrl = 'video.mp4';

    Swal.fire({
        title: 'Bem-Vindo!',
        html: '<div id="modalVideo" class="plyr__video-embed"><video poster="" autoplay muted playsinline><source src="' + videoUrl + '"></video></div>',
        didOpen: function() {
            const player = new Plyr('#modalVideo video');
            player.play();
        },
        cancelButtonText: 'Fechar',
        width: '300px'
    });
};


function addCloseButton() {
  var myNodelist = document.getElementsByTagName("LI");
  for (var i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
  }
}

function closeListItem() {
  var close = document.getElementsByClassName("close");
  for (var i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}

function toggleChecked() {
  var list = document.querySelector('ul');
  list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');
    }
  }, false);
}

function handleEnterKey(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    newElement();
  }
}

function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Escreva seu item aqui!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  closeListItem();
}

document.getElementById("myInput").addEventListener("keyup", handleEnterKey);
addCloseButton();
closeListItem();
toggleChecked();

function atualizarPagina() {
      location.reload();
      var novoConteudo = "conteúdo atualizado";
      document.getElementById("conteudo").innerHTML = novoConteudo;
    }
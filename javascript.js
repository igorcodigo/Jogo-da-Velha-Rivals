var player = 1;
var moves = 0;
var fim = 0;
var ganhador = 0;
var imagex;
var imageo;
var currentImage;
var imageElement;
var fileInput1;
var fileInput2;
var ultimo = 0;

function makeMove(element) {
    if (element.innerHTML === '' && fim == 0) {
        if (player === 1) {
            element.innerHTML = '<img src="' + imagex + '" alt="X" />';
            player = 2;
            ultimo = 1;
        } else {
            element.innerHTML = '<img src="' + imageo + '" alt="O" />';
            player = 1;
            ultimo = 2;
        }
        moves++;
        checkForWin();
    } else if (moves == 9 || fim == 1) {
        reset();
    }
}

function checkForWin() {
    var cells = document.getElementsByTagName('td');
    var combinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (var i = 0; i < combinations.length; i++) {
        if (cells[combinations[i][0]].innerHTML !== '' &&
            //Verifica se todos os 3 são X ou O
            cells[combinations[i][0]].innerHTML === cells[combinations[i][1]].innerHTML &&
            cells[combinations[i][1]].innerHTML === cells[combinations[i][2]].innerHTML) {
            winner = cells[combinations[i][0]].innerHTML;
            if (ultimo == 1) {
                ganhador = 1;
            } else if (ultimo == 2) {
                ganhador = 2;
            }
            fim++;
            setTimeout(mensagem, 800);


            return;
        }
    }
    if (moves === 9) {
        setTimeout(alert('Deu empate cornos'), 600);

    }
}

function mensagem() {
    if (ganhador == 1) {
        alert("X izão ganhou 🗿 ");
    } else if (ganhador == 2) {
        alert("O Bolinha venceu 🍷");
    }
}


function reset() {
    var cells = document.getElementsByTagName('td');
    for (var i = 0; i < cells.length; i++) {
        cells[i].innerHTML = '';
    }
    player = 1;
    moves = 0;
    fim = 0;
}

function handleImageUpload(event, previewId) {
    var file = event.target.files[0];
    var reader = new FileReader();

    reader.onload = function (e) {
        if (event.target.id === 'dropzone') {
            imagex = e.target.result;
        } else if (event.target.id === 'dropzone2') {
            imageo = e.target.result;
        }
        var previewElement = document.getElementById(previewId);
        previewElement.src = e.target.result;
        previewElement.classList.remove('hidden');
    };

    reader.readAsDataURL(file);
}
document.addEventListener('DOMContentLoaded', function () {
    fileInput1 = document.getElementById('dropzone');
    fileInput2 = document.getElementById('dropzone2');
    imageElement = document.getElementById('image');

    fileInput1.addEventListener('change', function(event) {
        handleImageUpload(event, 'previewX');
    });
    fileInput2.addEventListener('change', function(event) {
        handleImageUpload(event, 'previewO');
    });
});

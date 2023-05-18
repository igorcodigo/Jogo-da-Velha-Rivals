var player = 1;
		var moves = 0;
		var fim = 0;
		var ganhador = 0;
		
		function makeMove(element) {
			if (element.innerHTML === '' && fim == 0) {
				if (player === 1) {
					element.innerHTML = '<img src="x-image.png" alt="X" />';
					player = 2;
				}
				else {
					element.innerHTML = '<img src="o-image.png" alt="O" />';
					player = 1;
				}
				moves++;
				checkForWin();
			}
			else {
				mensagem();
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
					if (winner.includes("X")) {
						ganhador = 1;
					} else if (winner.includes("O")) {
						ganhador = 2;
					}
					fim++;
					return;
				}
			}
			if (moves === 9) {
				alert('Deu empate cornos');
				reset();
			}
		}
		
		function mensagem() {
			if (ganhador == 1) {
				alert('“Não se deite com um homem como quem se deita com uma mulher” (Levítico 18:22) ');
				} else if (ganhador == 2) {
					alert("O amor venceu!🏳️‍🌈");
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

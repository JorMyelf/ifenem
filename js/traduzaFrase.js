const frases = {
	frases: {
		1: "Ela estuda na Universidade de Boston",
		2: "Eu gosto de estudar inglês",
		3: "Minha comida favorita é pizza",
		4: "Eu gosto de assistir filmes",
		5: "Eu gosto de jogar videogame",
		6: "Eu tirei 100 na prova de Química",
		7: "Beba água todos os dias",
		8: "Quero ir ao cinema com você",
		9: "Quero ir a Paris no próximo ano",
		10: "Eu gosto de comer chocolate",
	},
	traducoes: {
		"Ela estuda na Universidade de Boston":
			"She studies at Boston University",
		"Eu gosto de estudar inglês": "I like to study English",
		"Minha comida favorita é pizza": "My favorite food is pizza",
		"Eu gosto de assistir filmes": "I like to watch movies",
		"Eu gosto de jogar videogame": "I like to play video games",
		"Eu tirei 100 na prova de Química": "I got 100 on the Chemistry test",
		"Beba água todos os dias": "Drink water every day",
		"Quero ir ao cinema com você": "I want to go to the movies with you",
		"Quero ir a Paris no próximo ano": "I want to go to Paris next year",
		"Eu gosto de comer chocolate": "I like to eat chocolate",
	},
};

let frasesUsadas = [];

const containerFrase = document.querySelector("#frase");
const traducao = document.querySelector("#traducao");
const resultado = document.querySelector("#resultado");
const checar = document.querySelector("#checar");
const novaFrase = document.querySelector("#nova-frase");

novaFrase.addEventListener("click", () => {
	if (traducao.hasAttribute("readonly")) {
		traducao.removeAttribute("readonly");
	}
	renderizaFrase(fraseAleatoria());
});

checar.addEventListener("click", () => {
	checaTraducao();
});

function traduzaFrase(frase) {
	const traducao = frases.traducoes[frase];
	return traducao;
}

function fraseAleatoria() {
	const frase = frases.frases[Math.floor(Math.random() * 10) + 1];
	if (frasesUsadas.length == 10) {
		frasesUsadas = [];
	}
	if (frasesUsadas.includes(frase)) {
		return fraseAleatoria();
	} else {
		frasesUsadas.push(frase);
		return frase;
	}
}

function renderizaFrase(frase) {
	containerFrase.innerHTML = `"${frase}"`;
}
renderizaFrase(fraseAleatoria());

function checaTraducao() {
	const frase = containerFrase.innerHTML.split('"')[1];
	const traducaoUsuario = traducao.value.toLowerCase();
	const traducaoCorreta = traduzaFrase(frase).toLowerCase();
	if (traducaoUsuario === traducaoCorreta) {
		containerFrase.classList.add("green");
		resultado.innerHTML = '<p class="green">Parabéns! Você acertou!</p>';
		traducao.setAttribute("readonly", "readonly");
	} else {
		containerFrase.classList.add("red");
		resultado.innerHTML = '<p class="red">Que pena! Você errou!</p>';
	}
	setTimeout(() => {
		resultado.innerHTML = "";
		containerFrase.classList.remove("red");
		containerFrase.classList.remove("green");
	}, 2000);
}

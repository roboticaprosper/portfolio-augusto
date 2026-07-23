const perguntas = [
    {
        pergunta :"com qual arma Kratos tenta se m@tar ?",
        opcoes : ["lãminas do caos", "Lãmina do olimpo", "machado leviatã"],
        correta : 1
        
        
    },
    {
        pergunta :"qual é o primeiro deus que Kratos mata ?",
        opcoes : ["hélio ", "ares", "peséfone"],
        correta : 2
        
        
        
    },
    {
        pergunta :"Qual é o nome do filho de Kratos em God of War ?",
        opcoes : ["Loki ", "baldur", "Atreus"],
        correta : 2
        
        
        
        
        
        
        
        
    },
    {
        pergunta :"Em qual mitologia se passa o primeiro jogo?",
        opcoes : [" Nórdica", "Egípcia", "Grega "],
        correta : 2
        
        
        
    },
    {
        pergunta :"Qual é o nome das armas clássicas de Kratos?",
        opcoes : [" Espadas do Caos", "Lâminas do Caos", " Garras do Inferno"],
        correta : 1
        
        
        
    },
    {   
        pergunta :"Qual é o nome da esposa de Kratos na fase nórdica?",
        opcoes : ["Freya", "Faye", "Sif"],
        correta : 1
        
        
        
    },
    {   
        pergunta :"Qual é o objetivo principal em God of War Ragnarök?",
        opcoes : ["Dominar os reinos", "Espalhar as cinzas de Faye", "Encontrar Zeus"],
        correta : 1
        
        
        
    },
    {   
        pergunta :"Quem enfrenta Kratos no início de God of War (2018)?",
        opcoes : ["Thor", "Odin ", "Baldur"],
        correta : 2
        
        
        
    },
    {   
        pergunta :"Qual é o nome do machado de Kratos?",
        opcoes : ["Stormbreaker", "Leviathan Axe", "Frostmourne"],
        correta : 1
        
        
        
    },
    {   
        pergunta :"Quem Atreus descobre ser?",
        opcoes : ["Thor", "Loki", "Tyr"],
        correta : 1
        
        
        
    },
    {   
        pergunta :"Qual é o reino dos mortos na mitologia nórdica do jogo?",
        opcoes : ["Helheim", "Valhalla", "Midgard"],
        correta : 0
        
        
        
    },
    {   
        pergunta :"Quem é o vilão principal de God of War III?",
        opcoes : ["Ares", "Zeus", "Hermes"],
        correta : 1
        
        
        
    },
]


let atual = 0;
let pontos = 0;


let tempo = 0;
let intervalo;


const timerElemento = document.createElement("p");
timerElemento.id = "timer";
timerElemento.style.fontSize = "20px";
timerElemento.style.fontWeight = "bold"
timerElemento.style.marginBottom = "15px"
timerElemento.textContent = "Tempo: 00:00"

document.querySelector(".quiz").prepend(timerElemento);


function formatarTempo(segundos) {
    const min = Math.floor(segundos / 60);
    const seg = segundos % 60;
    
    return `${ String(min).padStart(2, "0")}:${String(seg).padStart(2, "0")}`;
}

function iniciarTimer(){
    intervalo = setInterval(() => {
        tempo++;
        document.getElementById("timer").textContent =
        "Tempo: "+ formatarTempo(tempo);
    }, 1000);
}

function carregarPergunta() {
    const p = perguntas[atual];
    
    
    document.getElementById("pergunta").textContent = p.pergunta;
    document.getElementById("opcoes").innerHTML = "";
    document.getElementById("proxima").style.display = "none";
    p.opcoes.forEach((opcao, i) => {
        const botao = document.createElement("button");
        botao.textContent = opcao;
        botao.classList.add("opcao");
        botao.onclick = () => responder(botao, i);
        document.getElementById("opcoes").appendChild(botao);
        
        
    });
}
function responder(botaoClicado, indice) {
    const botoes = document.querySelectorAll(".opcao");
    const perguntaAtual = perguntas[atual];
    
    
    botoes.forEach(botao => {
        botao.disabled = true
       
    });
     if (indice === perguntaAtual.correta) {
            botaoClicado.classList.add("certa");
            pontos++;
            document.getElementById("pontos").textContent = "pontos: "  + pontos;
            
            
            
        }else{
            botaoClicado.classList.add("errado");
            botoes[perguntaAtual.correta].classList.add("certa");
        }
        
    
    document.getElementById("proxima").onclick = () => {
        atual++;
        
        
        if (atual < perguntas.length){
            carregarPergunta();
        }else{
            finalizarQuiz();
        }
    }
    document.getElementById("proxima").style.display = "block";
}
function finalizarQuiz(){
    clearInterval(intervalo);
    
    
    document.getElementById("pergunta").textContent = 
    "Quiz acabado";
    
    
    
    document.getElementById("opcoes").innerHTML = `
     <h2>Você fez ${pontos}</h2>
     <p>Tempo total: ${formatarTempo(tempo)}</p>
     `;
}

iniciarTimer();
carregarPergunta();
// Define os botões para iniciar, parar e resetar o timer
document.getElementById('start').onclick = startTimer;
document.getElementById('stop').onclick = stopTimer;
document.getElementById('reset').onclick = resetTimer;

// Elementos da interface onde os valores do tempo serão exibidos
const hoursSpan = document.getElementById('hours');
const minutesSpan = document.getElementById('minutes');
const secondsSpan = document.getElementById('seconds');

// Variáveis que armazenam o tempo
let hours = 0;
let minutes = 0;
let seconds = 0;
let cron; // Variável que armazenará o identificador do intervalo

/**
 * Atualiza o display para mostrar os valores formatados corretamente
 */
function updateDisplay() {
    hoursSpan.textContent = String(hours).padStart(2, '0');
    minutesSpan.textContent = String(minutes).padStart(2, '0');
    secondsSpan.textContent = String(seconds).padStart(2, '0');
}

/**
 * Incrementa o tempo a cada segundo e ajusta minutos e horas conforme necessário
 */
function incrementTime() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }
    updateDisplay(); // Atualiza os valores na tela
}

/**
 * Inicia o timer se ele ainda não estiver rodando
 */
function startTimer() {
    if (cron) {
        console.warn('O timer já está rodando');
        return;
    }
    cron = setInterval(() => {
        incrementTime();
    }, 1000);
}

/**
 * Para o timer e libera o identificador do intervalo
 */
function stopTimer() {
    clearInterval(cron);
    cron = null;
}

/**
 * Reseta o timer, zerando todas as variáveis e atualizando a tela
 */
function resetTimer() {
    clearInterval(cron);
    cron = null;
    hours = 0;
    minutes = 0;
    seconds = 0;
    updateDisplay(); // Mantém a estrutura modular
}
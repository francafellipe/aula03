function calculoFatorial() {
    let numeroescolhido = prompt('Insira um número para obter o fatorial e sequência de Fibonacci');
    numeroescolhido = parseInt(numeroescolhido);

    let fatorial = 1;
    for (let i = numeroescolhido; i > 0; i--) {
        fatorial *= i;
    }

    let fibonacciSeq = [];
    for (let i = 0; i <= numeroescolhido; i++) {
        if (i <= 1) {
            fibonacciSeq.push(i);
        } else {
            fibonacciSeq.push(fibonacciSeq[i - 1] + fibonacciSeq[i - 2]);
        }
    }

    let resultadoFibonacci = fibonacciSeq[numeroescolhido];

    document.getElementById('resultado').innerText = `O fatorial de ${numeroescolhido} é ${fatorial} e sua sequência Fibonacci é ${resultadoFibonacci}.`;
}
const btnIniciar = document.getElementById('btnIniciar')

btnIniciar.addEventListener('click',function(){
    calculoFatorial()
})
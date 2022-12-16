const verificaPalindromo = palavra => {
    if (typeof palavra === 'string'){
        const arrayPalavra = palavra.split("");
        const palavraRevertida = Array.from(arrayPalavra);
        palavraRevertida.reverse();
        if(arrayPalavra.toString() === palavraRevertida.toString()){
            return true
        } else {
            return false
        }
    } else {
        return "Variável não é uma string";
    }
}

const teste1 = verificaPalindromo("ana");
const teste2 = verificaPalindromo("julia");
const teste3 = verificaPalindromo("radar");
const teste4 = verificaPalindromo("osso");
const teste5 = verificaPalindromo("fernanda");
const teste6 = verificaPalindromo(12);
const teste7 = verificaPalindromo([ "julia", "ana" ]);
const teste8 = verificaPalindromo(null);

console.log(teste1)
console.log(teste2)
console.log(teste3)
console.log(teste4)
console.log(teste5)
console.log(teste6)
console.log(teste7)
console.log(teste8)

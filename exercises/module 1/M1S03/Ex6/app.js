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
        console.log("Variável não é uma string");
    }
}

const teste1 = verificaPalindromo("ana");
const teste2 = verificaPalindromo("julia");
const teste3 = verificaPalindromo("radar");
const teste4 = verificaPalindromo("osso");
const teste5 = verificaPalindromo("fernanda");


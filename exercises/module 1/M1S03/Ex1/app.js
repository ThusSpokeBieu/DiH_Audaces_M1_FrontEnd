const LIST1 = [56, 65, 64, -3, 23, 42, -15, 65, 14, 32, 78, 70, 47];
const LIST2 = [];
const LIST3 = [1];
const LIST4 = [1, -1];
const LIST5 = null;
const LIST6 = [-2,-2,-2,-2];
const LIST7 = [20, 10, 30];

function validateArray(array){
    if (Array.isArray(array)){
     return array.length >= 1 && array.every(element => typeof element == "number");
    } else {
        return false
    }
}

function procuraMinMax(array){
    const VALIDATE = validateArray(array);
    if (VALIDATE){
            array.sort(( a , b ) => a - b);
            console.log(`O número mínimo é ${array[0]} e o número máximo é ${array[array.length - 1]}`);
        } else {
            console.log("Não é possível encontrar.")
        }
}

procuraMinMax(LIST1);
procuraMinMax(LIST2);
procuraMinMax(LIST3);
procuraMinMax(LIST4);
procuraMinMax(LIST5);
procuraMinMax(LIST6);
procuraMinMax(LIST7);

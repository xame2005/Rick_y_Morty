function sum(num1, num2) {
    return num1 + num2;
}

function calc(num1, num2, callback) {
    return callback(num1, num2);
}

console.log(calc(2, 2, sum));


/*funcion que recibe un parámetro de tipo callback, imprime en el log la fecha actual,
  crea un timeout que recibe una función como parámetro, la cual almacena la fecha en una
  variable de tipo Date.
  Se llama a la función callback (con el parámetro date) y un timeout de 30 ms */
function date (callback) {
    console.log(new Date);
    setTimeout(function() {
        let date = new Date;
        callback(date);
    }, 3000);
}

function printDate(dateNow) {
    console.log(dateNow);
}

date(printDate);
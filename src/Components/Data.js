const Data ={
    data:[{
  passwordHR: [
        "QWERTY",
        "ASDFGH",
        "ZXCVBN",
        "123456" 
  ],
  candidates: [
    {
      email: "isela.carrillo@gmail.com",
      name: "Isela Carrillo"
    },
    {
      email: "celina@nmail.com",
      name: "celina"
    },
    {
      email: "celina@nmail.com",
      name: "celina"
    },
    {
      email: "celina@nmail.com",
      name: "celina"
    }
  ],
  logicalTest: [
    {
      question:
        "1.- Usted invierte 100, cada año gana el 10% y lo retira. Si ha retirado un total de 35 y en su cuenta de inversión tiene 85 ¿Cuántos años han pasado?",
      a: ["a) No es posible saberlo", 0],
      b: ["b) 2.5", 0],
      c: ["c) 2 años", 1],
      d: ["d) 3.5", 0]
    },
    {
      question:
        "2.- Si el 2% de 'algo' es cuatro ¿Cuál es el valor de ese 'algo'?",
      a: ["a) 80", 0],
      b: ["b) 200", 1],
      c: ["c) 50", 0],
      d: ["d) 400", 0]
    },
    {
      question:
        "3.- Una entidad financiera le aprobará un crédito solo si la cuota no supera el 25% de sus ingresos. ¿Cuánto debería ganar si la cuota proyectada del crédito es de $800.000?",
      a: ["a) 3200", 1],
      b: ["b) 2000", 0],
      c: ["c) 3900", 0],
      d: ["d) 1800", 0]
    },
    {
      question: "4.- Si 2 x ( z + 2 ) = 8 ¿Cuál es el valor de z?",
      a: ["a) 1", 0],
      b: ["b) 4", 0],
      c: ["c) 2", 1],
      d: ["d) 3", 0]
    },
    {
      question:
        "5.- ¿Cuál es el número que completa la serie? 17 –34 –51 –68 -?",
      a: ["a) 18", 0],
      b: ["b) 93", 0],
      c: ["c) 89", 0],
      d: ["d) 85", 1]
    }
  ],
  theoreticalTest: [
    {
      question: "1.- Ejemplo de usar vínculo de alert",
      a: ["a) <a href=”javascript:window.print();”> </a>", 0],
      b: ["b) <a href=”javascript:window.location.reload();”> </a>", 0],
      c: ["c) <a href='javascript:alert(‘’);'> </a>", 1]
    },
    {
      question: "2.- ¿Cómo se describe las condiciones?",
      a: ["a) if(i<10){ ... }", 1],
      b: ["b) var =”Hola”, n=103", 0],
      c: ["c) for(i; i<10;i++){ … }", 0],
    },
    {
      question: "3.- Dado el siguiente pseudocódigo, en el que read() permite al usuario introducir un valor entero, ¿cuál será el valor final de la variable 'i'? i:=1; read(n); while i < n do begin i := i + 1 end;",
      a: [
          "a) 1 si el valor introducido es igual o menor que 0; el valor introducido menos uno en cualquier otro caso",
        0],
      b: [
          "b) 1 si el valor introducido es igual o menor que 1; el valor introducido en cualquier otro caso",
        1],
      c: [
          "c) 1 si el valor introducido es igual o menor que 1; el valor introducido más uno en cualquier otro caso",
        0],
    },
    {
      question: "4.- ¿Que devolvería la función si la invoco como calculo (undefined)? function calculo(x) { return (!x); }",
      a: ["a) undefined", 0],
      b: ["b) true", 1],
      c: ["c) false", 0],
    },
    {
      question: "5.- ¿Que devolvería la función si la invoco como calculo (12)? function calculo(x) { return (!x); }",
      a: ["a) 479001600", 0],
      b: ["b) true", 0],
      c: ["c) falso", 1],
    }
  ],
  codeTest: [
    {
      code: "Complete la función 'solveMe' para calcular la suma de dos enteros. Prototipo de la función: int solveMe (int a, int b); dónde, a es la primera entrada entera. b es la segunda entrada entera Valores de retorno suma de los dos enteros anteriores Entrada de muestra a = 2 b = 3   Salida de muestra 5   Explicación La suma de los dos números enteros a y b se calcula como: 2 + 3 = 5.",
      example: "process.stdin.resume(); \nprocess.stdin.setEncoding('ascii');   \nvar input_stdin = ''; \nvar input_stdin_array = ''; \nvar input_currentline = 0;   \nprocess.stdin.on('data', function (data) {    \ninput_stdin += data; });   \nprocess.stdin.on('end', function () {    \ninput_stdin_array = input_stdin.split(' ');    \nmain();    \n}); \nfunction readLine() {     \nreturn input_stdin_array[input_currentline++]; \n}   \nfunction solveMeFirst(a, b) {   \n// Hint: Type return a+b below    \n}     \nfunction main() {     \nvar a = parseInt(readLine());     \nvar b = parseInt(readLine());       \nvar res = solveMeFirst(a, b);     \nconsole.log(res); \n}"
    }
  ]
    }]
};

export default Data;

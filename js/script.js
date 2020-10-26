// Scrivi un programma che stampi i numeri da 1 a 100, ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

// Print number from 1 to 100

for (var i = 1; i < 101; i++ ){
  var numeri = (1*i);
  var numero = "";
  // Print "Fizz" for number that are multiple of 3
  if (i % 3 == 0 && i % 5 != 0) {
    console.log("Fizz");
    document.getElementById('numero').innerHTML = numero + "<li>" + "Fizz" + "</li>";
  }

  // Print "Buzz" for number that are multiple of 5
  else if (i % 5 == 0 && i % 3 != 0) {
    console.log("Buzz");
    document.getElementById('numero').innerHTML = numero + "<li>" + "Buzz" + "</li>";
  }
  // Print "FizzBuzz" for number that are multiple of 3 and 5

  else if (i % 5 == 0 && i % 3 == 0) {
    console.log("FizzBuzz");
    document.getElementById('numero').innerHTML = numero + "<li>" + "FizzBuzz" + "</li>";
  }

  else {
    console.log(i);
    document.getElementById('numero').innerHTML = numero + "<li>" + i + "</li>";
  }

};

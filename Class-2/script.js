// // Incremental Order
// console.log("Learning Incremental Order")
// var a = 2;
// console.log(a); //2
// a = a + 1;
// console.log(a); //3
// a += 1;
// console.log(a); //4
// console.log(++a);

// //Decremental Order
// console.log("Learning Decremental Order")
// var b = 5;
// console.log(b);
// b = b - 1;
// console.log(b);
// b -= 1;
// console.log(b);
// b--;
// console.log(b)

//Example
// var a = 4;
// var b = 3;
// var c = 7;
//     //  5   + 3   - 5 +  3
// var f = ++a + b++ - a + --b;
// console.log(f)

// //Taking input from user
// var weight = prompt("What is your weight?");
// console.log("check type", typeof(weight));
// weight = parseFloat(weight)
// console.log("check type second", typeof(weight));
// console.log("Your age is", weight + 5.5);

// //
// var a= 'hi';
// console.log(!!false);

//if else cond
// var marks = prompt("Enter ypur marks")
// if (marks > 80) {

//     console.log("You have got A+");

// }
// else if(marks>60){
// console.log("You have got A");
// }
// else {
//     console.log("Better luck next time");
// }

//Handling variabes as Boolean
// var name = prompt("Enter name");
// if (name) {
//     console.log("Input submitted", name);
// }
// if(!name){
//     alert("you didnt enter any input")
// }
// else {
//     console.log("Nothing");
// }

//Practicing Foor loops
for (var t=10; t>=1; t--){
    var calc = 2 * t;
    console.log(`2 x ${t} = ${calc}`);
    // console.log("2 x " + t + " " + " = "+calc);
}
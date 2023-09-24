// toBreak();
// greetings("Morning");
// nestedLoops();
// starPrint();
// learningArrays();

function toBreak() {
    for (var i = 0; i < 30; i++) {
        if (i === "24") {
            break
        }
        console.log("Else exec", i)
    }
}

function nestedLoops() {
    for (var i = 0; i < 3; i++) { // i = 0
        for (var j = 0; j < 2; j++) { // j =0 
            console.log(`I is ${i}, J is ${j}`)
        }
    }
}

function greetings(greet="Afternoon") {
    alert(greet)
}

function starPrint(){
    var n = 5;
    var string = "";
    
    for(var i=1;i<=n ;i++){
        for(var j=0; j<i ;j++){
            string += "*";
        }
        string += "\n"
    }
    console.log(string)
}

function learningArrays(){
    var arr = [1,2,3,4,5];

    for(var i=0; i<=arr.length-1 ; i++){
        console.log(`Iteration number ${i} and arr value is ${arr[i]}`)
    }
}

var name = "talal"; //global variable
var yourAge = sayMyName(name);

function sayMyName(name){
    var Age = 23; //local scoped
    alert(name);
    return Age; //returning to global variable
}

console.log(yourAge);

function factorial(n){
    if(n<=1){
        return 1;
    }
    else {
        return n * factorial(n-1)
    }
}

console.log(factorial(5))
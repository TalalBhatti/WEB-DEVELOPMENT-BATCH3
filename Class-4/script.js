// LearningMap();
learningFilter();

// let summers = ["May", "June", "July", "August"];
// let autumn = ["September", "October", "Novemeber"];
// let winters = ["December", "January", "Febuary"];

// let allSeasons = [...winters, ...autumn, ...summers];
// console.log(allSeasons);

//Destructuring the object
// const obj = {
//     name: "Bilal",
//     city: "Berlin",
//     animal: "Bat",
//     thing: "Bed"
// }

// const name = obj.name;
// const city = obj.place;
// const animal = obj.animal;
// const thing = obj.thing;

// const {name, city, animal, thing} = obj

// console.log(`name is ${name}, city is ${city}, ${animal}, ${thing}`);

// const tryVar = [name,...summers];
// console.log(tryVar);

// var a  = function getId(){
//     return "Hello World"
// }
// console.log(a);

// const ab = () => 'Hello World'
// console.log(ab);

// function def(){
//     return "Function returning some values"
// }

// const def2 = () =>  'Returning in Es6 style'; //ES6

// let i = def();
// console.log(def2);

//Learning MAP function
function LearningMap() {
    const myArray = ['apple', 'banana', 'orange'];

    for (let i = 0; i < myArray.length; i++) {
        console.log(myArray[i])
    }
    const myList = myArray.map((item) => { console.log(item) })

}

function learningFilter() {
    const todos = [
        {title:"Complete ES6", isDone:false},
        {title:"End Class at 2", isDone:false},
        {title:"Push this code to GitHub", isDone:true},
    ]

    const result = todos.filter((todo) => todo.isDone === true);
    console.log(result)
}

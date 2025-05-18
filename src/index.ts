import { person, diet } from "./types";

var justin : person = {
    name: 'Justin',
    weight: 155,
    height: 69,
    age: 34,
    gender: 'male',
    bmr: 0,
    tdee: 0,
    goal: 'GAIN',
};

var rose : person = {
    name: 'Rose',
    weight: 150,
    height: 63,
    age: 30,
    gender: 'female', 
    bmr: 0,
    tdee: 0,
    goal: "LOSE"
};

const users = [justin, rose];


function calcTdee(person: person){
    var kg = Math.floor(person.weight/2.2);
    var cm = Math.floor(person.height*2.54);

    if(person.gender === 'male'){
        person.bmr = (10*kg) + (6.25*cm) - (5*person.age) + 5;
    }
    else{
        person.bmr = (10*kg) + (6.25*cm) - (5*person.age) - 161;
    }
    //calc tdee after getting BMR, hardcoding 1.2 for lowest activity level
    person.tdee = person.bmr*1.2;

}


function calcCalWithGoal(person: person){
    if(person.goal === "GAIN") return person.tdee + 500;
    if(person.goal === "LOSE") return person.tdee - 200;
    else return person.tdee;
}

//4g cal per gram of carb, 4g cal per gram of carb, 9 cal per gram of fat
//Builds out calories and numbers and attached to a diet that attaches to that person
//weight loss: 40/40/20 Weight Gain/ Maintain: 40/30/30
function makeDiet(person: person){
    var goalCals = calcCalWithGoal(person);
    var diet: diet = {
        name: `${person.name}'s Diet`,
        calories: Math.floor(goalCals),
        meals: 5,
        carbs: Math.floor((goalCals * .4)/4),
        protein: Math.floor((goalCals * .4)/4),
        fats: Math.floor((goalCals * .2)/9)
    }
    person.diet = diet;
    console.log(person);
    console.log(`\nSplit evenly accross ${person.diet.meals} meals:\n${Math.floor(person.diet.calories/person.diet.meals)} calories per meal\n${Math.floor(person.diet.protein/person.diet.meals)} protein per meal\n${Math.floor(person.diet.carbs/person.diet.meals)} carbs per meal\n${Math.floor(person.diet.fats/person.diet.meals)} fats per meal\n`)
}

users.forEach(person => {
    calcTdee(person);
    makeDiet(person);
});



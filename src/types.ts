export type person = {
    name: string,
    weight: number,
    height: number,
    age: number,
    gender: string
    bmr: number,
    tdee: number,
    diet?: diet,
    goal: goals
};

export type diet = {
    name: string,
    calories: number,
    meals: number,
    carbs: number,
    protein: number,
    fats: number,
    mealMacros?: macros[]
};

export type macros = {
    name: string,
    count: number
};

type goals = 
"GAIN" |
 "LOSE" | 
 "MAINTAIN";
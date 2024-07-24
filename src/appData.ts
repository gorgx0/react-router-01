import {Ingredient, Recipe} from "./DataContext.tsx";

const ingredients: Ingredient[] = [
    {"name": "Pepper", "unit": "g"},
    {"name": "Salt", "unit": "g"},
    {"name": "Milk", "unit": "ml"},
    {"name": "Egg", "unit": "piece"},
    {"name": "Olive Oil", "unit": "ml"},
    {"name": "Garlic", "unit": "clove"}
]

const recipes: Recipe[] = [
    {
        name: "Panierka",
        ingredients: [
            {
                ingredient: {
                    name: 'jajko',
                    unit: 'szt'
                },
                amount: 1
            },
            {
                ingredient: {
                    name: 'bułka tarta',
                    unit: 'g'
                },
                amount: 10
            }
        ]
    },
    {
        name: 'Frytki',
        ingredients: [
            {
                ingredient: {
                    name: 'ziemniaki',
                    unit: 'kg'
                },
                amount: 5
            },
            {
                ingredient: {
                    name: 'olej',
                    unit: 'l'
                },
                amount: 2
            }
        ]
    },
    {
        name: 'Naleśniki',
        ingredients: [
            {
                ingredient: {
                    name: 'woda',
                    unit: 'l'
                },
                amount: 0.5
            },
            {
                ingredient: {
                    name: 'mleko',
                    unit: 'l'
                },
                amount: 0.5
            },
            {
                ingredient: {
                    name: 'mąka',
                    unit: 'kg'
                },
                amount: 0.5
            },
            {
                ingredient: {
                    name: 'jajka',
                    unit: 'szt'
                },
                amount: 1
            }
        ]
    }
]

export const data = {
    ingredients: ingredients,
    recipes: recipes
}

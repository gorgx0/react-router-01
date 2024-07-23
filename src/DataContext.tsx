import React from "react";

export interface Ingredient {
    name: string;
    unit: string
}

export const DataContext = React.createContext({ingredients: [] as Ingredient[]});
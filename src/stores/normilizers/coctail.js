export default (coctail) => {
    const {
        strDrink: title,
        strCategory: category,
        strAlcoholic: alcoholic,
        strGlass: glass,
        strInstructions: instruction,
        strDrinkThumb: image,
    } = coctail;

    const ingredients = (obj) => {
        const ingredientList = {};
        const count = Object.keys(obj).filter((key) => key.startsWith('strIngredient'));

        for (let i = 1; i <= count.length; i += 1) {
            const ingredientKey = `strIngredient${i}`;
            const measureKey = `strMeasure${i}`;

            if (obj[ingredientKey]) ingredientList[obj[ingredientKey]] = obj[measureKey];
        }

        return ingredientList;
    };

    return {
        title,
        category,
        alcoholic,
        glass,
        instruction,
        image,
        ingredients: ingredients(coctail),
    };
};

import React, { useEffect, useState } from 'react'
import { Clock, DollarSign, User2, Heart, Share } from 'lucide-react'

export default function Details(props) {

    // getting the data stored
    const [recipeInfo, setRecipeInfo] = useState({});
    const [hasFetched, setHasFetched] = useState(false);

    // data regarding different nutrients
    const [ingredients, setIngredients] = useState([])
    const [nutrients, setNutrients] = useState([])
    const [instructions, setInstructions] = useState([])

    // for changing summary lines dynamically
    const [summaryLine, setSummaryLine] = useState(2);

    // method for getting the APIs data
    const fetchRecipe = async (elementID) => {
        try {
            const response = await fetch(`${props.apiGetInfo}${elementID}/information?includeNutrition=true&addTasteData=false&apiKey=${props.apikey}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const data = await response.json();
            setRecipeInfo(data);                        // general recipe data

            setIngredients(data.nutrition.ingredients || []);
            setNutrients(data.nutrition.nutrients);
            setInstructions(data.analyzedInstructions?.[0]?.steps || []);

        } catch (e) {
            console.log(e);
        }
    }

    // running using useEffect
    useEffect(() => {
        if (props.foodID && !hasFetched) { fetchRecipe(props.foodID); setHasFetched(true); }
    }, [props.foodID, instructions]);

    const copyLink = () => {
        const copyContent = recipeInfo.sourceUrl;
        navigator.clipboard.writeText(copyContent);
    }

    // getting words capatalized
    function capitalizeFirstLetter(word) {
        if (!word || typeof word !== 'string') {
            return ''; // Handle empty or non-string inputs
        }
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }

    return (
        <div className="flex flex-col items-center xsz:gap-6 lg:gap-10">

            {/* First Block regariding Image & General Data of the Food  */}
            <div className="flex xsz:flex-col lg:items-start lg:flex-row xsz:gap-3 sm:gap-5 xsz:items-center lg:px-5 xl:px-10 xl:pt-6">

                {/* Image of Food Items */}
                <img src={recipeInfo.image} alt="Image of Food Item" className="xsz:w-5/6 sm:w-4/6 md:w-3/5 lg:w-2/5 xl:w-3/4 xsz:rounded-md lg:rounded-t-xl xsz:shadow-lg lg:hover:shadow-xl lg:hover:scale-105 cursor-pointer lg:ease-in lg:duration-150" />

                <div className="flex flex-col xsz:items-center lg:items-start xsz:gap-3 xsz:px-4">
                    <h3 className="xsz:text-lg font-merriweather font-semibold md:text-xl xl:text-2xl text-gray-800"> {recipeInfo.title} </h3>
                    <p className="summary font-inter xsz:text-sm lg:text-base font-medium" dangerouslySetInnerHTML={{ __html: recipeInfo.summary ? recipeInfo.summary : "No summary available." }} />

                    <div className="xsz:grid xsz:grid-cols-2 items-center sm:flex lg:flex-row xsz:gap-x-4 xsz:gap-y-5 sm:gap-6 lg:gap-4 xsz:mt-2">

                        <div className="bg-gradOne/30 flex flex-col items-center xsz:gap-2 xsz:px-6 xsz:py-4 xsz:rounded-lg">
                            <Clock className="text-gradTwo xsz:w-5 xsz:h-5 lg:w-6 lg:h-6" />
                            <p className="xsz:text-[12px] font-inter xsz:text-gray-500"> Prep Time </p>
                            <h3 className="xsz:text-sm font-inter font-semibold"> {recipeInfo.readyInMinutes} Min </h3>
                        </div>

                        <div className="bg-gradOne/30 flex flex-col items-center xsz:gap-2 xsz:px-6 xsz:py-4 xsz:rounded-lg">
                            <User2 className="text-gradTwo xsz:w-5 xsz:h-5 lg:w-6 lg:h-6" />
                            <p className="xsz:text-[12px] font-inter xsz:text-gray-500"> Servings </p>
                            <h3 className="xsz:text-sm font-inter font-semibold"> {recipeInfo.servings} People </h3>
                        </div>

                        <div className="bg-gradOne/30 flex flex-col items-center xsz:gap-2 xsz:px-6 xsz:py-4 xsz:rounded-lg">
                            <DollarSign className="text-gradTwo xsz:w-5 xsz:h-5 lg:w-6 lg:h-6" />
                            <p className="xsz:text-[12px] font-inter xsz:text-gray-500"> Cost Price </p>
                            <h3 className="xsz:text-sm font-inter font-semibold"> {recipeInfo.pricePerServing} $ </h3>
                        </div>

                        <div className="bg-gradOne/30 flex flex-col items-center xsz:gap-2 xsz:px-6 xsz:py-4 xsz:rounded-lg">
                            <Heart className="text-gradTwo xsz:w-5 xsz:h-5 lg:w-6 lg:h-6" />
                            <p className="xsz:text-[12px] font-inter xsz:text-gray-500"> Heath Score </p>
                            <h3 className="xsz:text-sm font-inter font-semibold"> {recipeInfo.healthScore} </h3>
                        </div>

                    </div>

                    <div className="flex flex-row xsz:mt-2 items-center xsz:gap-3 lg:gap-5">

                        {/* Checking Source Url */}
                        <a href={recipeInfo.sourceUrl}>
                            <button className="xsz:text-sm lg:text-base font-inter font-medium xsz:px-3 xsz:py-2 text-white bg-gradTwo xsz:rounded-md lg:rounded-lg xsz:shadow-md active:scale-95 hover:scale-105 ease-in duration-150 cursor-pointer"> Checkout </button>
                        </a>

                        <button className="flex flex-row items-center xsz:px-3 xsz:py-2 xsz:gap-2 text-white font-inter font-medium xsz:text-sm lg:text-base bg-gradTwo xsz:rounded-md lg:rounded-lg xsz:shadow-md active:scale-95 hover:scale-105 ease-in duration-150 cursor-pointer" onClick={copyLink}> <Share className="xsz:w-4 xsz:h-4 lg:w-5 lg:h-5 text-white" /> Share </button>

                    </div>
                </div>

            </div>

            {/* Block regarding Ingredients & Instructions */}
            <div className="flex xsz:flex-col-reverse lg:flex-row-reverse xsz:items-center justify-between lg:items-start xsz:gap-5 lg:gap-8 xsz:px-3 lg:px-6">

                {/* Ingredients Block */}
                <div className="xsz:flex xsz:flex-col xsz:items-start xsz:gap-5 lg:gap-5 xsz:px-5 bg-white xsz:py-3 lg:px-6 lg:py-5 xsz:rounded-md xsz:shadow-md lg:rounded-lg lg:shadow-lg xsz:w-fit lg:w-100 xl:pr-20">

                    {/* Heading Regarding Ingredients */}
                    <h3 className="xsz:text-xl lg:text-2xl font-merriweather font-semibold"> Ingredients </h3>

                    {
                        ingredients.length !== 0 ?

                            <div className="flex flex-col xsz:items-start xsz:gap-4 lg:gap-6">

                                {ingredients.map((ingredient, index) => {
                                    return <div key={`${ingredient.id}-${index}`} className="flex flex-row items-center xsz:text-sm font-inter font-medium lg:text-base xsz:gap-2 lg:gap-3">
                                        <p> {capitalizeFirstLetter(ingredient.name)} </p>
                                        <p className="text-gradTwo"> {ingredient.amount}{ingredient.unit} </p>
                                    </div>
                                })}

                            </div>

                            :

                            <p className="font-inter font-medium xsz:text-sm lg:text-base">
                                Ingredients are'nt available right now !
                            </p>
                    }

                </div>

                {/* Another Block regarding Ingredients */}
                <div className="flex flex-col xsz:items-center lg:items-start xsz:gap-4 lg:gap-7">

                    {/* Block regarding Instructions */}
                    <div className="flex flex-col xsz:items-start xsz:gap-5 xsz:px-5 bg-white xsz:py-3 lg:px-6 lg:py-5 xsz:rounded-md xsz:shadow-md lg:rounded-lg lg:shadow-lg xsz:w-fit">

                        {/* Heading of the Instructions */}
                        <h3 className="xsz:text-xl lg:text-2xl font-merriweather font-semibold"> Instructions </h3>

                        {
                            instructions.length !== 0 ?

                                <div className="flex flex-col xsz:items-start xsz:gap-4 lg:gap-6 ">

                                    {/* Getting the Instructions Ready */}
                                    {Array.isArray(instructions) && instructions.map((step, index) => {
                                        return <div key={index} className="flex flex-row items-start xsz:gap-3">
                                            <h3 className="xsz:text-lg lg:text-xl font-inter font-semibold bg-gradTwo rounded-full xsz:py-2 xsz:px-4 text-white"> {step.number} </h3>
                                            <p className="font-inter font-medium xsz:text-sm lg:text-base">
                                                {step.step}
                                            </p>
                                        </div>
                                    })}

                                </div>

                                :

                                <p className="font-inter font-medium xsz:text-sm lg:text-base">
                                    Instructions are'nt available right now !
                                </p>
                        }

                    </div>

                    {/* Nutrition Block */}
                    <div className="flex xsz:flex-col items-start xsz:gap-4 bg-white xsz:px-4 xsz:py-3 lg:p-6 xsz:rounded-md xsz:shadow-md lg:rounded-lg lg:shadow-lg xsz:w-fit">

                        {/* Heading for the Nutrients */}
                        <h3 className="xsz:text-xl lg:text-2xl font-merriweather font-semibold"> Nutrients </h3>

                        {
                            nutrients.length !== 0 ?

                                <div className="flex flex-col xsz:items-start sm:grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 md:gap-x-3 md:gap-y-2 lg:items-center lg: xsz:gap-4 lg:gap-6">

                                    {Array.isArray(nutrients) && nutrients.map((nutrient, index) => {
                                        return <div key={index} className="flex flex-row items-center xsz:text-sm font-inter font-medium lg:text-base xsz:gap-2 lg:gap-3">
                                            <p> {capitalizeFirstLetter(nutrient.name)} </p>
                                            <p className="text-gradTwo"> {nutrient.amount}{nutrient.unit} </p>
                                        </div>
                                    })}

                                </div>

                                :

                                <p className="font-inter font-medium xsz:text-sm lg:text-base">
                                    Nutritions are'nt available right now !
                                </p>
                        }

                    </div>

                </div>

            </div>

        </div>
    )
}

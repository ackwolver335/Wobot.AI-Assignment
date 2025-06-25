import React, { useState, useEffect, useRef } from 'react'
import { Search, Clock, Utensils } from 'lucide-react'

export default function Recipes(props) {

    // getting the cuisine selected
    const [cuisine, setCuisine] = useState('');
    const [search, setSearch] = useState('');
    const [currentID, setCurrentID] = useState(null);

    // value of show more
    const [showMore, setShowMore] = useState('Show More');

    // recipe data here
    const [recipes, setRecipe] = useState([]);
    const [recipeCount, setRecipeCount] = useState(6);

    // method for fetching data from cuisine
    const fetchCuisine = async (selectedCuisine) => {

        try {
            const response = await fetch(`${props.apiSearch}?cuisine=${selectedCuisine}&number=${recipeCount}&apiKey=${props.apiKey}`, {
                method: 'GET',
                header: {
                    'Content-Type': 'application/json',
                }
            });

            const data = await response.json();
            setRecipe(data.results);

        } catch (error) {
            console.error(error);
        }
    };

    // method for changing selected items
    const changeCuisine = (e) => {
        const selected = e.target.value === "Choose Cuisine" ? "" : e.target.value;
        setCuisine(selected);
    };

    // method for fetching data
    const fetchRandom = async () => {

        try {
            const response = await fetch(`${props.apiRandom}?number=${recipeCount}&tags=vegetarian,dessert&apiKey=${props.apiKey}`, {
                method: 'GET',
                header: {
                    'Content-Type': 'application/json',
                }
            });

            const data = await response.json();
            setRecipe(data.recipes);

        } catch (error) {
            console.error(error);
        }
    };

    // method for random cuisine search
    useEffect(() => {
        if (cuisine == '' && search == '') {
            setRecipe([]);
            setRecipeCount(6)
            fetchRandom();
        } else if (cuisine !== '' && search == '') {
            setRecipe([]);
            setRecipeCount(6);
            fetchCuisine(cuisine);
        }
    }, [cuisine, search]);


    // method for getting more food items
    const getMoreRecipe = () => {
        try {
            setRecipeCount((prev) => prev + 3);
            if (search == '' && cuisine == '') {
                fetchRandom();
            } else if (search == '' && cuisine !== ''){
                fetchCuisine(cuisine);
            }
        } catch (e) {
            setShowMore("Show Less");
            setRecipeCount(6);
            if (search === '' && cuisine === '') {
                fetchRandom();
            } else if (cuisine !== '' && search == '') {
                fetchCuisine(cuisine);
            }
        }

        // for not getting overlimit
        if (recipeCount > 12) {
            setRecipeCount(6);
            if (search === '' && cuisine === '') {
                fetchRandom();
            } else if (cuisine !== '' && search == '') {
                fetchCuisine(cuisine);
            }
        }

    }

    return (
        <div className="xsz:pt-16 sm:pt-22 xl:pt-32 xsz:pb-6 lg:pb-12 xsz:px-3 flex flex-col items-center xsz:gap-4">

            <div className="flex flex-col md:flex-row md:px-6 xl:px-9 xsz:justify-center md:justify-between w-full items-center xsz:gap-3">

                {/* Search Block for Recipes */}
                <div className="searchBlock flex flex-row items-center xsz:gap-3 md:gap-4">

                    <div className="searchBar bg-white border xsz:border-gradOne lg:border-gradOne/60 lg:border-2 xsz:rounded-2xl lg:rounded-full xsz:p-2 lg:px-3 flex flex-row items-center xsz:gap-2">
                        <Search className="text-gradOne xsz:w-5 xsz:h-5 lg:w-6 lg:h-6" />
                        <input type="text" id="searchRecipe" className="outline-none xsz:text-sm text-gradOne font-inter font-semibold xsz:px-1 lg:text-base" placeholder="Search Recipes.." />
                    </div>

                    <button type="button" className="text-white bg-gradTwo xsz:px-4 xsz:text-sm xsz:py-2 lg:text-base lg:rounded-xl cursor-pointer font-semibold active:scale-95 hover:scale-105 ease-in duration-150 xsz:rounded-xl"> Search </button>

                </div>

                {/* Categories Block */}
                <select id="cuisineCategory" className="bg-white xsz:px-3 xsz:py-2 xsz:text-sm lg:text-base font-inter font-medium outline-none text-gradTwo border xsz:border-gradOne lg:border-2 xsz:rounded-xl lg:rounded-full" onChange={changeCuisine}>
                    <option className="outline-none cursor-pointer" defaultValue={"Choose Cusine"}> Choose Cuisine </option>
                    <option className="outline-none cursor-pointer" value="African"> African </option>
                    <option className="outline-none cursor-pointer" value="French"> French </option>
                    <option className="outline-none cursor-pointer" value="Chinese"> Chinese </option>
                    <option className="outline-none cursor-pointer" value="Indian"> Indian </option>
                    <option className="outline-none cursor-pointer" value="Italian"> Italian </option>
                    <option className="outline-none cursor-pointer" value="Southern"> Southern </option>
                    <option className="outline-none cursor-pointer" value="Spanish"> Spanish </option>
                </select>

            </div>

            {/* Random Recipes First */}
            {
                cuisine === '' && search === '' ?

                    <div className="flex flex-col items-center xsz:gap-4 lg:gap-7">
                        <div className="xsz:flex xsz:flex-col items-center xsz:pt-3 md:grid md:grid-cols-2 xsz:gap-6 xsz:px-4 md:gap-x-16 md:gap-y-10 lg:grid-cols-3 ease-in duration-150">

                            {recipes.map((recipe) => {
                                return <div key={recipe.id} className="flex flex-col items-center xsz:gap-3 bg-white xsz:px-4 xsz:pt-5 xsz:pb-3 xsz:rounded-md xsz:shadow-lg lg:rounded-xl xsz:w-5/6 sm:w-4/5 md:w-80 lg:h-fit lg:py-5">

                                    {/* Image coming from the APIs */}
                                    <img src={!recipe.image ? "https://st.depositphotos.com/2274151/4841/i/450/depositphotos_48410095-stock-photo-sample-blue-square-grungy-stamp.jpg" : recipe.image} alt="Food Item Image" className="xsz:w-70 xsz:rounded-t-xl" />

                                    {/* Random Recipe Details */}
                                    <div className="flex flex-col xsz:items-start sm:items-center sm:text-center xsz:gap-1 xsz:pb-2 xsz:px-2">
                                        <h3 className="font-poppins text-center text-gradTwo font-semibold xsz:text-base md:text-lg"> {recipe.title} </h3>
                                        <p className="xsz:text-sm font-medium font-inter" dangerouslySetInnerHTML={{ __html: recipe.summary ? recipe.summary.split('. ').slice(0, 1).join('. ') + '.' : "No summary available." }} />
                                    </div>

                                    {/* Some More further details */}
                                    <div className="flex flex-row items-center justify-between w-full">

                                        {/* Prep Timing */}
                                        <div className="flex flex-row items-center xsz:gap-1">
                                            <Clock className="xsz:w-4 xsz:h-4 text-gradOne" />
                                            <p className="xsz:text-sm text-gradOne font-inter font-medium">
                                                {recipe.readyInMinutes} Min
                                            </p>
                                        </div>

                                        {/* Available Servings */}
                                        <div className="flex flex-row items-center xsz:gap-1">
                                            <Utensils className="xsz:w-4 xsz:h-4 text-gradOne" />
                                            <p className="xsz:text-sm text-gradOne font-inter font-medium">
                                                {recipe.servings} Servings
                                            </p>
                                        </div>

                                    </div>

                                    {/* Button regarding Checking Recipe Details */}
                                    <button type="button" className="xsz:text-sm lg:text-base font-poppins bg-transparent hover:bg-gradOne hover:text-white xsz:px-3 xsz:py-1 lg:px-4 lg:py-2 active:scale-95 hover:scale-105 hover:shadow-lg border border-gradOne xsz:rounded-md lg:rounded-lg hover:rounded-full ease-in duration-150 cursor-pointer"> Recipe Details </button>

                                </div>
                            })}

                        </div>

                        <button type="button" className="xsz:w-fit text-gradTwo border border-gradTwo bg-transparent xsz:text-sm lg:text-base font-poppins xsz:px-3 xsz:py-2 xsz:rounded-lg active:scale-95 hover:scale-105 ease-in duration-150 cursor-pointer font-medium hover:text-white hover:bg-gradTwo hover:rounded-xl hover:shadow-lg" onClick={getMoreRecipe}> {showMore} </button>
                    </div>

                    :

                    cuisine !== '' && search === '' ?

                        // Getting Cuisine Based Recipe
                        <div className="flex flex-col items-center xsz:gap-4 lg:gap-7">
                            <div className="xsz:flex xsz:flex-col items-center xsz:pt-3 md:grid md:grid-cols-2 xsz:gap-6 xsz:px-4 md:gap-x-16 md:gap-y-10 lg:grid-cols-3 ease-in duration-150">

                                {recipes.map((recipe) => {
                                    return <div key={recipe.id} className="flex flex-col items-center xsz:gap-3 bg-white xsz:px-4 xsz:pt-5 xsz:pb-3 xsz:rounded-md xsz:shadow-lg lg:rounded-xl xsz:w-5/6 sm:w-4/5 md:w-80 lg:h-fit lg:py-5">

                                        {/* Image coming from the APIs */}
                                        <img src={!recipe.image ? "https://st.depositphotos.com/2274151/4841/i/450/depositphotos_48410095-stock-photo-sample-blue-square-grungy-stamp.jpg" : recipe.image} alt="Food Item Image" className="xsz:w-70 xsz:rounded-t-xl" />

                                        {/* Random Recipe Details */}
                                        <div className="flex flex-col xsz:items-start sm:items-center sm:text-center xsz:gap-1 xsz:pb-2 xsz:px-2">
                                            <h3 className="font-poppins text-center text-gradTwo font-semibold xsz:text-base md:text-lg"> {recipe.title} </h3>
                                        </div>

                                        {/* Button regarding Checking Recipe Details */}
                                        <button type="button" className="xsz:text-sm lg:text-base font-poppins bg-transparent hover:bg-gradOne hover:text-white xsz:px-3 xsz:py-1 lg:px-4 lg:py-2 active:scale-95 hover:scale-105 hover:shadow-lg border border-gradOne xsz:rounded-md lg:rounded-lg hover:rounded-full ease-in duration-150 cursor-pointer"> Recipe Details </button>

                                    </div>
                                })}

                            </div>

                            <button type="button" className="xsz:w-fit text-gradTwo border border-gradTwo bg-transparent xsz:text-sm lg:text-base font-poppins xsz:px-3 xsz:py-2 xsz:rounded-lg active:scale-95 hover:scale-105 ease-in duration-150 cursor-pointer font-medium hover:text-white hover:bg-gradTwo hover:rounded-xl hover:shadow-lg" onClick={getMoreRecipe}> {showMore} </button>
                        </div>

                        :

                        <>

                        </>

            }

        </div>
    )
}

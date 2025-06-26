import React,{useEffect} from 'react'

// components
import Recipes from '../components/Recipes'

export default function Home(props) {

    useEffect(() => {
        document.title = "Recipe Book - Home";
    }, []);

    return (
        <>
            <Recipes apiRandom = {props.apiUrlRandom} apiKey = {props.apikey} apiSearch = {props.apiSearch} />
        </>
    )
}

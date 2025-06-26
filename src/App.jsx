import './App.css'
import { Routes, Route } from 'react-router-dom'

// pages regarding navigation
import Home from './pages/Home'
import Recipe from './pages/Recipe'

// components regarding page header & footer
import Navbar from './components/Navbar'

function App() {

    const apiUrl = import.meta.env.VITE_SPOONACULAR_API_URL_RANDOM;                 // getting random elements
    const apiKey = import.meta.env.VITE_SPOONACULAR_API_KEY;                        // api key for fetching data
    const apiGetInfo = import.meta.env.VITE_SPOONACULAR_API_URL_GETINFO             // for getting recipe info
    const apiSearch = import.meta.env.VITE_SPOONACULAR_API_URL_SEARCH              // search recipe by name

    return (
        <>

            {/* Navbar for Page redirection */}
            <Navbar />

            {/* Routes & Navigations */}
            <Routes>
                <Route path="/" element={<Home apiUrlRandom = {apiUrl} apikey = {apiKey} apiSearch = {apiSearch} />} />
                <Route path="/recipeDetails" element={<Recipe apiGetInfo={apiGetInfo} />}/>
            </Routes>

            {/* Footer regarding further information */}

        </>
    )
}

export default App
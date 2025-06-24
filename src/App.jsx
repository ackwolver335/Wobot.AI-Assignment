import './App.css'
import { Routes, Route } from 'react-router-dom'

// pages regarding navigation
import Home from './pages/Home'

// components regarding page header & footer
import Navbar from './components/Navbar'

function App() {

    const apiUrl = import.meta.env.VITE_SPOONACULAR_API_URL_RANDOM;
    const apiKey = import.meta.env.VITE_SPOONACULAR_API_KEY;

    const response = await fetch(`${apiUrl}?number=5&tags=vegetarian&apikey=${apiKey}`,{
        method: 'GET',
        header: {
            'Content-Type': 
        }
    })

    return (
        <>

            {/* Navbar for Page redirection */}
            <Navbar />

            {/* Routes & Navigations */}
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>

            {/* Footer regarding further information */}

        </>
    )
}

export default App
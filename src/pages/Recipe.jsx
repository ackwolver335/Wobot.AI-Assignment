import React, {useEffect} from 'react'
import Details from '../components/Details'

export default function Recipe() {

    // getting the id
    const id = localStorage.getItem("recipeID");

    useEffect(() => {
        document.title = "Recipe Book - Detailed View";
    }, []);

    return (
        <div className="xsz:pt-16 sm:pt-22 xl:pt-32 xsz:pb-6 lg:pb-12 xsz:px-3">
            <Details foodID={id} />
        </div>
    )
}

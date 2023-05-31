import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

//    const categories = ["One Punch Man", "Rurouni Kenshin", "Full Metal Alchemist Broterhood"];
    const [categories, setCategories] = useState(["One Punch Man"/*, "Rurouni Kenshin", "Full Metal Alchemist Broterhood"*/]);

//    const handleAdd = () => {
//        setCategories( [...categories, "Hunter X Hunter"] );
//        setCategories( (cats) => [...cats, "Hunter X Hunter"]);
//   };

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories= { setCategories }/>
            <hr />

            <ol>
                {
                    categories.map( category => (
//                        return 
//                        <li key = { category } > { category } </li>;
                        <GifGrid
                            key ={ category }
                            category ={ category }
                        />
                     ))
                }
            </ol>


        </>
    )
};
import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = ({defaultCategories = ['Avengers']}) => { // así podemos poner un estado inicial por defecto

    // usamos el hook useState
    const [categories, setCategories] = useState(defaultCategories);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />
            <ol>
                {
                    categories.map(category => ( // usamos map para iterar los elementos, aqui un for no funcionará
                        <GifGrid
                            key={category} // Cada elemento debe tener una key unica, para que React sepa el elemento que está iterando
                            category={category}
                        />
                    ))
                }
            </ol>
        </>
    )
}

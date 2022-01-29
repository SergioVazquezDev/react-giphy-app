import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    // input valor y estado
    const [inputValue, setInputValue] = useState(''); // Iniciamo el estado a '', para evitar errores de undefined

    const handleInputChange = (e) => { 
        setInputValue(e.target.value); // extraemos el valor que se escribió
    }

    // al pulsar enter, lanzaremos el submit
    const handleSubmit = (e) => {
        e.preventDefault(); // para evitar que se refresque toda la pantalla con el submit del formulario
        if (inputValue.trim().length > 2) { // pequeña validacion para que no se lance vacio o con una sola letra
            setCategories(cats => [inputValue, ...cats,]); // añadimos a categorias el input en la primera posicion
            setInputValue(''); // limpiamos el input
        }
    }

    return (
        <form onSubmit={handleSubmit}> 
        <p> {inputValue} </p>
            <input
                type="text"
                value={inputValue} // ultimo valor que se escribió
                onChange={handleInputChange} // se disparará cada vez que la caja de texto cambie
            />
        </form>
    )
}

// obligamos a que siempre se nos pase setCategories
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

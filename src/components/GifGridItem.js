import React from 'react'
import PropTypes from 'prop-types'; // TIPS: 'impt' para importarlos rapidamente

export const GifGridItem = ({ title, url }) => {

    return (
        // className es la class de css
        <div className="card animate__animated animate__fadeIn">
            <img src={ url } alt={ title } />
            <p> { title } </p>
        </div>
    )
}

// obligamos a que siempre se nos pase setCategories
GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}

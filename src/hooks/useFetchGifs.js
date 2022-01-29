import { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs';

// hook custom. Es una funcion que debe empezar por useXXXXX
export const useFetchGifs = (category) => {
    // cuando se use por primera vez, este será su estado
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => { // LOS EFECTOS NO PUEDEN TENER ASYNC
        getGifs(category) // funcion que quiero ejecutar
            .then(imgs => {
                setState({ // cambiamos el estado al terminar
                    data: imgs, // ahora devolvemos las imagenes
                    loading: false // y paramos el loading
                });
            })
    }, [category]) // lista de dependencias del useEffect 
    // (solo se lanzará si la categoria cambia, 
    // evitando que se lance cada vez que otro elemento del componente cambie)

    return state; // { data:[], loading: true };
}

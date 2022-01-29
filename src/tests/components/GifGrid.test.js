import React from 'react';
import '@testing-library/jest-dom'; // eso nos ayuda con el autocompletado en VS Code

import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs'); // con esto fingimos cualquier llamada a ese archivo

describe('Pruebas en el <GifGrid />', () => {

    const category = 'One Punch';

    test('debe de mostrarse correctamente', () => {
        useFetchGifs.mockReturnValue({ // hacemos que nuestro mock retorne lo que queremos que retorne
            data: [],
            loading: true
        });

        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar items cuando se cargan imágenes useFetchGifs', () => {
        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/cualquier/cosa.jpg',
            title: 'Cualquier cosa'
        },
        {
            id: '123',
            url: 'https://localhost/cualquier/cosa.jpg',
            title: 'Cualquier cosa'
        }];

        useFetchGifs.mockReturnValue({ // hacemos que nuestro mock retorne lo que queremos que retorne
            data: gifs, 
            loading: false
        });

        const wrapper = shallow(<GifGrid category={category} />);

        expect( wrapper ).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length); // podemos seleccionar nuestro elemento de GifGridItem 
    })
})

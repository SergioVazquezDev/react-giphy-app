import React from 'react';

import { AddCategory } from '../../components/AddCategory';
import { shallow } from 'enzyme';

describe('Pruebas en <AddCategory />', () => {

    const setCategories = jest.fn(); // referencia para evaluar la función (spy)
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);

    beforeEach(() => {
        jest.clearAllMocks(); // limpiamos simulaciones y mocks
        wrapper = shallow(<AddCategory setCategories={setCategories} />); // lo inicializamos dos veces para tener la ayuda
    });

    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola Mundo'; // valor del evento del input

        input.simulate('change', { target: { value } }); // simulamos change, y añadimos el evento

        expect(wrapper.find('p').text().trim()).toBe(value); // el p contiene el mismo texto
    })

    test('NO debe de postear la información con submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault() { } }); // mandamos como argumento del submit la funcion preventDefault()

        expect(setCategories).not.toHaveBeenCalled();
    })

    test('debe de llamar el setCategories y limpiar la caja de texto', () => {
        const value = 'Hola Mundo';

        // 1. simular el inputChange
        wrapper.find('input').simulate('change', { target: { value } });

        // 2. simular el submit
        wrapper.find('form').simulate('submit', { preventDefault() { } });

        // 3. setCategories se debe de haber llamado
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

        // 4. el valor del input debe de estar ''
        expect(wrapper.find('input').prop('value')).toBe('');
    })
})

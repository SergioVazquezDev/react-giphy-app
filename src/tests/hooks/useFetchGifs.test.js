import { useFetchGifs } from '../../hooks/useFetchGifs'
import { renderHook } from '@testing-library/react-hooks';

// TIPS: necesitamos una libreria externa para hacer test de hooks
// instalar npm install --save-dev @testing-library/react-hooks

describe('Pruebas en el hook useFetchGifs', () => {

    test('debe de retornar el estado inicial', async () => {
        // con renderHook creamos un componente virtual donde invocaremos nuestra función
        // nos quedamos con el resultado, y esperamos nueva actualizacion
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('One Punch'));
        const { data, loading } = result.current;

        await waitForNextUpdate(); // esperamos un nuevo cambio en el estado (despues de extraer los valores iniciales)

        expect(data).toEqual([]);
        expect(loading).toBe(true);
    })

    test('debe de retornar un arreglo de imgs y el loading en false', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('One Punch'));

        // OJO QUE ESTO PUEDE AFECTAR A OTRAS PRUEBAS
        await waitForNextUpdate(); // antes de extraer la información esperamos a ese cambio de estado

        const { data, loading } = result.current;

        expect(data.length).toBe(10);
        expect(loading).toBe(false);
    });
})

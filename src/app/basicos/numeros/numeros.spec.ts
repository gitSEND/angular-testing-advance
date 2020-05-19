import { incrementar } from './numeros';

describe('Pruebas de números', () => {
	it('Debe de retornar 100 si el núnmero ingresado es mayor a 100', () => {
		const respuesta = incrementar(300);
		expect(respuesta).toBe(100);
	});
	it('Debe de retornar el número ingresado + 1, si no es mayor a 100', () => {
		const respuesta = incrementar(50);
		expect(respuesta).toBe(51);
	});
});

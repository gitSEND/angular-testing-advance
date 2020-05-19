import { usuarioLogueado } from './booleanos';

describe('Prueba de booleanos', () => {
	it('Debe de retornar true', () => {
		const respuesta = usuarioLogueado();
		expect(respuesta).toBeTruthy();
		expect(respuesta).not.toBeFalsy();
	});
});

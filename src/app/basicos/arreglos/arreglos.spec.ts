import { obtenerRobots } from './arreglos';

xdescribe('Prueba de arreglos', () => {
	it('Debe de retornar al menos 3 robots', () => {
		const respuesta = obtenerRobots();
		expect(respuesta.length).toBeGreaterThanOrEqual(3);
	});
	it('Debe de existir mega man y ultron', () => {
		const respuesta = obtenerRobots();
		expect(respuesta).toContain('Mega Man');
		expect(respuesta).toContain('Ultron');
	});
});

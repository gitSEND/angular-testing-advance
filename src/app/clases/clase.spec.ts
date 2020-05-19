import { Jugador } from './clase';

describe('Pruebas de clase', () => {
	let jugador: Jugador;

	beforeAll(() => {
		// console.log('beforeAll');
	});
	beforeEach(() => {
		// console.log('beforeEach');
		// jugador.hp = 100;
		jugador = new Jugador();
	});
	afterAll(() => {
		// console.log('afterAll');
	});
	afterEach(() => {
		// console.log('afterEach');
		// jugador.hp = 100;
	});

	it('Debe de retornar 80 de hp, si recibe 20 de daño', () => {
		// const jugador = new Jugador();
		const respuesta = jugador.recibeDanio(20);
		expect(respuesta).toBe(80);
	});
	it('Debe de retornar 50 de hp, si recibe 50 de daño', () => {
		// const jugador = new Jugador();
		const respuesta = jugador.recibeDanio(50);
		expect(respuesta).toBe(50);
	});
	it('Debe de retornar 0 de hp, si recibe 300 de daño', () => {
		// const jugador = new Jugador();
		const respuesta = jugador.recibeDanio(300);
		expect(respuesta).toBe(0);
	});
});

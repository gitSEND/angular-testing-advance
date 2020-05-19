import { Jugador2 } from './jugador2';

describe('Jugador 2 emit', () => {
	let jugador2: Jugador2;
	beforeEach(() => (jugador2 = new Jugador2()));
	it('Debe e emitir un evento cuando reciba daño', () => {
		let nuevoHP = 0;
		jugador2.hpCambia.subscribe((hp) => {
			nuevoHP = hp;
		});
		jugador2.recibeDanio(1000);
		expect(nuevoHP).toBe(0);
	});
	it('Debe e emitir un evento cuando reciba daño y sobrevivir si es menos de 100', () => {
		let nuevoHP = 0;
		jugador2.hpCambia.subscribe((hp) => {
			nuevoHP = hp;
		});
		jugador2.recibeDanio(50);
		expect(nuevoHP).toBe(50);
	});
});

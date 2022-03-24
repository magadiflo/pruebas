import { mensaje } from './string';

describe('Pruebas de String', () => {
    it('Debe de regresar un string', () => {
        const resp = mensaje('Martín');
        expect(typeof resp).toBe('string');
    })
})
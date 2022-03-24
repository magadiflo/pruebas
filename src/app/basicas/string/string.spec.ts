import { mensaje } from './string';

describe('Pruebas de String', () => {
    it('Debe de regresar un string', () => {
        const resp = mensaje('Martín');
        expect(typeof resp).toBe('string');
    }); 
    it('Debe de retornar un saludo con el nombre enviado', () => {
        const nombre = 'Martín';
        const resp = mensaje(nombre);
        expect(resp).toContain(nombre);
    });
})
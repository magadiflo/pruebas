import { obtenerRobots } from './arreglos';

//con x adelante omitimos las pruebas
xdescribe('Prueba de arreglos', () => {
    it('Debe de retornar al menos 3 robots', () => {
        const res = obtenerRobots();
        expect(res.length).toBeGreaterThanOrEqual(3);
    });
    
    it('Debe de existir MegaMan y Ultrón', () => {
        const res = obtenerRobots();
        expect(res).toContain('MegaMan');
        expect(res).toContain('Ultrón');
    });
});
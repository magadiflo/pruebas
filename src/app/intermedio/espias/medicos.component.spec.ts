import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import { EMPTY, of, throwError } from 'rxjs';

describe('MedicosComponent', () => {

    let componente: MedicosComponent;
    const servicio = new MedicosService();

    beforeEach(() => {
        componente = new MedicosComponent(servicio);
    });


    it('Init: Debe de cargar los médicos', () => {
        const medicos = ['medico1', 'medico2', 'medico3'];

        spyOn(servicio, 'getMedicos').and.callFake(() => {
            return of(medicos);
        });

        componente.ngOnInit();
        expect(componente.medicos.length).toBeGreaterThan(0);
    });

    it('Debe de llamar al servidor par agregar un médico', () => {
        const espia = spyOn(servicio, 'agregarMedico').and.callFake(medico => {
            return EMPTY;
        });
        componente.agregarMedico();

        expect(espia).toHaveBeenCalled();
    });

    it('Debe de agregar un nuevo médico al arreglo de médicos', () => {
        const medico = { id: 1, nombre: 'Martín' };
        spyOn(servicio, 'agregarMedico').and.returnValue(of(medico));
        componente.agregarMedico();

        expect(componente.medicos.indexOf(medico)).toBeGreaterThanOrEqual(0);
    });

    it('Si falla la adición, la propiedad mensajeError debe ser igual al error del servicio', () => {
        const miError = 'No se pudo agregar el medico';
        spyOn(servicio, 'agregarMedico').and.returnValue(throwError(() => new Error(miError)));
        componente.agregarMedico();

        expect(componente.mensajeError).toBe(miError);
    });


});

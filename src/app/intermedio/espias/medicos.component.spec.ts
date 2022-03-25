import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import { EMPTY, of } from 'rxjs';

describe('MedicosComponent', () => {

    let componente: MedicosComponent;
    const servicio = new MedicosService();

    beforeEach(() => {
        componente = new MedicosComponent(servicio);
    });


    it('Init: Debe de cargar los médicos', () => {
        const medicos = ['medico1', 'medico2', 'medico3'];

        spyOn(servicio, 'getMedicos').and.callFake(() => {
            return of([medicos]);
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


});

import { TestBed, ComponentFixture } from "@angular/core/testing";

import { MedicoComponent } from "./medico.component";

describe('Médico component', () => {
    
    let component: MedicoComponent;
    let fixture: ComponentFixture<MedicoComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                MedicoComponent,
            ],
        });
        
        fixture = TestBed.createComponent(MedicoComponent);
        component = fixture.componentInstance;
    });

    it('Debe de crearse el componente', () => {
        expect(component).toBeTruthy();
    });

    it('Deben de retornar el nombre del médico', () => {
        const nombre = 'Martín';
        const saludo = component.saludarMedico(nombre);

        expect(saludo).toContain(nombre);
    });
});
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { IncrementadorComponent } from './incrementador.component';


describe('Incremendator Component', () => {

    let component: IncrementadorComponent;
    let fixture: ComponentFixture<IncrementadorComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [IncrementadorComponent],
            imports: [FormsModule]
        });

        fixture = TestBed.createComponent(IncrementadorComponent);
        component = fixture.componentInstance;

    });

    it('Debe de mostrar la leyenda', () => {

        const leyenda = 'Progreso de carga...';
        component.leyenda = leyenda;
        fixture.detectChanges(); //Disparar la detección de cambios

        const elem: HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement;

        expect(elem.innerHTML).toContain(leyenda);

    });

    it('Debe demostrar en el input el valor del progreso', () => {
        component.cambiarValor(5);
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            const input = fixture.debugElement.query(By.css('input'));
            const elem = input.nativeElement;
    
            expect(elem.value).toBe(55);
        });

    });

    it('Debe  incrementar/decrementar en 5, con un click en el botón', () => {
        const botones = fixture.debugElement.queryAll(By.css('.btn-primary'));
        
        botones[0].triggerEventHandler('click', null);
        expect(component.progreso).toBe(45);
        
        botones[1].triggerEventHandler('click', null);
        expect(component.progreso).toBe(50);

    });

});

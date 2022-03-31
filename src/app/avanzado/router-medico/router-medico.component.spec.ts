import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router, Route } from '@angular/router';
import { Observable, EMPTY } from 'rxjs';

import { RouterMedicoComponent } from './router-medico.component';

class FakeRouter {
  navigate(params: any) { }
}

class FakeActivatedRoute {
  params: Observable<any> = EMPTY;
}

describe('RouterMedicoComponent', () => {
  let component: RouterMedicoComponent;
  let fixture: ComponentFixture<RouterMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouterMedicoComponent ],
      providers: [
        { provide: Router, useClass: FakeRouter }, 
        { provide: ActivatedRoute, useClass: FakeActivatedRoute },
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe de redireccionar a Médico cuando se guarde', () => {
    const router = TestBed.inject(Router);
    const spy = spyOn(router, 'navigate');
    component.guardarMedico();
    expect(spy).toHaveBeenCalledWith(['medico', '123']);
  });
});

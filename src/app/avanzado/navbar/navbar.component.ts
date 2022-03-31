import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  id!: string;

  constructor(
    public router: Router,
    public activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.params
      .subscribe(params => {
        this.id = params['id'];
      });
  }

  guardarMedico() {
    this.router.navigate(['medico', '123']);
  }

}

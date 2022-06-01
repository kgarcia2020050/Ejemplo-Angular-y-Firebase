import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/services/servicio.service';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  public postForm:FormGroup;

  constructor(
    public _servicio:ServicioService,
    public formBuilder:FormBuilder,
    public router:Router) {
      this.postForm=this.formBuilder.group({
        titulo:[''],
        contenido:[''],
        Autor:['']
      })
     }

  ngOnInit(): void {
  }

  onSubmit() {
    this._servicio.createPost(this.postForm.value)
    this.router.navigate([''])
  }

}

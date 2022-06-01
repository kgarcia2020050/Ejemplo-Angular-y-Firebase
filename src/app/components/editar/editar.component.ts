import { Component, OnInit } from '@angular/core';

import { ServicioService } from 'src/app/services/servicio.service';

import { FormGroup, FormBuilder } from '@angular/forms';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css'],
})
export class EditarComponent implements OnInit {
  public editForm: FormGroup;

  constructor(
    public service: ServicioService,
    public formBuilder: FormBuilder,
    public activatedRoute: ActivatedRoute,
    public router: Router
  ) {
    this.editForm = this.formBuilder.group({
      titulo: [''],
      contenido: [''],
      Autor: [''],
    });
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.service.getPostById(id).subscribe((response: any) => {
      this.editForm = this.formBuilder.group({
        titulo: [response.titulo],
        contenido: [response.contenido],
        Autor: [response.Autor],
      });
    });
  }

  onSubmit() {
    const id=this.activatedRoute.snapshot.paramMap.get('id')
    this.service.updatePost(this.editForm.value,id)
    this.router.navigate([''])
  }
}

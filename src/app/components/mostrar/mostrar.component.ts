import { Component, OnInit } from '@angular/core';

import { Post } from 'src/app/post.model';

import { ServicioService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.css'],
})
export class MostrarComponent implements OnInit {
  Registros: Post[];

  constructor(private _servicio: ServicioService) {}

  ngOnInit(): void {
    this._servicio.getPosts().subscribe((response) => {
      this.Registros = response.map((info) => {
        return {
          id: info.payload.doc.id,
          ...(info.payload.doc.data() as Post),
        };
      });
    });
  }

  borrar=(post) => this._servicio.deletePost(post)


}

import { Injectable } from '@angular/core';

//importar modulos para firestore
import { AngularFirestore } from '@angular/fire/compat/firestore';

//importar modelo
import { Post } from '../post.model';

@Injectable({
  providedIn: 'root',
})
export class ServicioService {
  constructor(private angularFirestore: AngularFirestore) {}

  getPosts() {
    return this.angularFirestore.collection('posts').snapshotChanges();
  }

  getPostById(id) {
    return this.angularFirestore.collection('posts').doc(id).valueChanges();
  }

  createPost(modelo: Post) {
    return new Promise<any>((resolve, reject) => {
      this.angularFirestore
        .collection('posts')
        .add(modelo)
        .then(
          (response) => {
            console.log(response);
          },
          (error) => {
            reject(error);
          }
        );
    });
  }

  updatePost(modelo: Post, id) {
    return this.angularFirestore.collection('posts').doc(id).update({
      titulo: modelo.titulo,
      contenido: modelo.contenido,
      autor: modelo.Autor,
    });
  }

  deletePost(modelo) {
    return this.angularFirestore.collection('posts').doc(modelo.id).delete();
  }
}

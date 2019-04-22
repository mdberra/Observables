import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Contacto } from '../model/contacto';

@Injectable({providedIn: 'root'})
export class ModelService {
   private contactos : Array<Contacto> = [];

   public c$ = new Subject<Contacto[]>();   // observamos una array de number

   constructor() {
   }
   public agregarContacto(c: Contacto) {
      this.contactos.push(c);
      this.c$.next(this.contactos);
   }
   getContactos$(): Observable<Contacto[]> {
      return this.c$.asObservable();
    }
}
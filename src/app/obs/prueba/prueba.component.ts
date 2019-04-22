import { Component, OnInit } from "@angular/core";
import { Observable } from 'rxjs/Observable';

import { Subscription } from "rxjs/Subscription";

import { Contacto } from "../model/contacto";
import { ModelService } from "../services/model.services";

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styles: []
})
export class PruebaComponent implements OnInit {
  private c$: Observable<Contacto[]>;
  pepe:string = "aaaa";

  contactos;

  private modelSubscription: Subscription;

  constructor(private modelService: ModelService) {
  }

  ngOnInit() {
    this.c$ = this.modelService.getContactos$();
    this.c$.subscribe(contactos => this.contactos = contactos);
  }
  presionar() {
    this.modelService.agregarContacto(new Contacto("1", "2", "3", "4", "5", "6", "7", "8", "9"));
    console.log(this.contactos);
  }
}

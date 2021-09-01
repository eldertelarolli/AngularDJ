import { Component, OnInit } from '@angular/core';
import {Cursos} from './cursos';
@Component({
    selector:'app-curso-lista',
    templateUrl: './cursos-lista-component.html'
})
export class CursoListaComponente implements OnInit{

cursos: Cursos[] = [];
ngOnInit() {
}
}
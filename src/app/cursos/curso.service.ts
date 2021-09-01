import { Injectable } from '@angular/core';
import { Cursos } from './cursos';


@Injectable({
    providedIn: 'root'
})
export class CursosService{
    retrieveAll(): Cursos[] {
       
    }

}
var CURSOS: Cursos [] = [
    {
        id:1,
        name:'Angular:CLI',
        releaseDate:'November 2, 2020',
        description:' Neste curso, alunos irão obter um grande conhecimento nos recusos de CLI',
        duration: 120,
        code:'SDLK-222',
        rating:3,
        price: 9.99,
        imageUrl:'/assets/images/cli.png'
    },
    {
        id:2,
        name:'Angular:forms',
        releaseDate:'November 12, 2020',
        description:' Neste curso, alunos irão obter um grande conhecimento nos recusos de forms',
        duration: 120,
        code:'SDLK-22222',
        rating:4,
        price: 19.99,
        imageUrl:'/assets/images/anw.png'
    },
    {
        id:3,
        name:'Javacript',
        releaseDate:'November 22, 2020',
        description:' Neste curso, alunos irão obter um grande conhecimento nos recusos de javascript',
        duration: 122,
        code:'SDLK-2222',
        rating:3,
        price: 93.99,
        imageUrl:'/assets/images/js.png'
    }
]
import { Component, OnInit } from '@angular/core';
import { Filme, Genero, FilmesService } from '../filmes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  filme: Filme;
  generos:Array<Genero>;

  constructor(
    public filmesService: FilmesService,
    public router: Router
    ) { }

  ngOnInit() {
    this.filme = new Filme();
    this.generos = this.filmesService.listarGeneros();
  }

  gravar(){
    console.log(this.filme);
  }

  cancelar(){
    this.router.navigate(['home']);
  }
}

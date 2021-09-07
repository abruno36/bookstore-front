import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Categoria } from '../categoria.model';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria-create',
  templateUrl: './categoria-create.component.html',
  styleUrls: ['./categoria-create.component.css']
})
export class CategoriaCreateComponent implements OnInit {

  categoria: Categoria = {
    nome: '',
    descricao: ''
  }

  nome = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(100)])
  descricao = new FormControl ('', [Validators.required,  Validators.minLength(3), Validators.maxLength(200)])
 
  constructor(private service: CategoriaService, private router: Router) { }

  ngOnInit(): void {
  }

  create(): void {
    this.service.create(this.categoria).subscribe((resposta) => {
      this.router.navigate(['categorias'])
      this.service.mensagem('Categoria criada com sucesso!');
    }, err => {
      for(let i = 0; i < err.error.errors.length; i++) {
        this.service.mensagem(err.error.errors[i].message)
      }
    })
  }

  cancel(): void {
    this.router.navigate(['categorias'])
  }

  getMessage() {
    if (this.nome.invalid) {
      return "O campo NOME deve conter entre 3 e 100 carateres";
    }

    if (this.descricao.invalid) {
      return "O campo DESCRICAO deve conter entre 3 e 200 carateres";
    }

    return false;
  }
}
import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Categoria } from "../categoria.model";
import { CategoriaService } from "../categoria.service";

@Component({
  selector: "app-categoria-update",
  templateUrl: "./categoria-update.component.html",
  styleUrls: ["./categoria-update.component.css"],
})

export class CategoriaUpdateComponent implements OnInit {
  categoria: Categoria = {
    id: "",
    nome: "",
    descricao: "",
  };

  nome = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(100)])
  descricao = new FormControl ('', [Validators.required,  Validators.minLength(3), Validators.maxLength(200)])
 
  constructor(
    private service: CategoriaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.categoria.id = this.route.snapshot.paramMap.get("id")!;
    this.findById();
  }

  findById(): void {
    this.service.findById(this.categoria.id!).subscribe((resposta) => {
      this.categoria.nome = resposta.nome;
      this.categoria.descricao = resposta.descricao;
    });
  }

  update(): void {
    this.service.update(this.categoria).subscribe((resposta) => {
      this.router.navigate(["categorias"]);
      this.service.mensagem("Categoria atualizada com sucesso");
    }, err => {
      this.service.mensagem('Validar se todos os campos estão preenchidos corretamente!')
    });
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


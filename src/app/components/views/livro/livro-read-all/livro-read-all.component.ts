import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Categoria } from "../../categoria/categoria.model";
import { Livro } from "../livro.model";
import { LivroService } from "../livro.service";
import { CategoriaService } from "../../categoria/categoria.service";

@Component({
  selector: "app-livro-read-all",
  templateUrl: "./livro-read-all.component.html",
  styleUrls: ["./livro-read-all.component.css"],
})
export class LivroReadAllComponent implements OnInit {
  displayedColumns: string[] = ["id", "titulo", "livros", "acoes"];

  id_cat: String = "";
  livros: Livro[] = [];

  categoria: Categoria = {
    nome: '',
    descricao: ''
  }

  constructor(
    private service: LivroService,
    private serviceCat: CategoriaService,
    private route: ActivatedRoute,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.id_cat = this.route.snapshot.paramMap.get("id_cat")!;
    this.findAll();
    this.findByIdCat();
  }

  findAll(): void {
    this.service.findAllByCategoria(this.id_cat).subscribe((resposta) => {
      this.livros = resposta;
      //console.log(this.livros);
      //console.log(this.categoria);
    });
  }

  findByIdCat(): void {
    this.serviceCat.findById(this.id_cat).subscribe((resposta) => {
      this.categoria.nome = resposta.nome;
      this.categoria.descricao = resposta.descricao;
    });
  }

  navegarParaCriarLivro(): void {
    this.router.navigate([`categorias/${this.id_cat}/livros/create`])
  }

  voltar(): void {
    this.router.navigate(['categorias'])
  }
}

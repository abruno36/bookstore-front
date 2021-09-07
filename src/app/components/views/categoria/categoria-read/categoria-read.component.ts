import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { Categoria } from "../categoria.model";
import { CategoriaService } from "../categoria.service";
import {MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource } from "@angular/material/table";
import {MatSort} from '@angular/material/sort';

@Component({
  selector: "app-categoria-read",
  templateUrl: "./categoria-read.component.html",
  styleUrls: ["./categoria-read.component.css"],
})
export class CategoriaReadComponent implements OnInit {

  constructor(private service: CategoriaService, private router: Router) {}

  lista: Categoria[] = [];
  dataSource = new MatTableDataSource<Categoria>(this.lista);
  categorias: Categoria[] = [];
  displayedColumns: string[] = ["id", "nome", "descricao", "livros", "acoes"];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe((resposta) => {
      resposta.forEach(x => {
          this.lista.push(x)
      });
      //console.log("lista");
      //console.log(this.lista);
      //console.log("resposta");
      //console.log(resposta);
      this.categorias = resposta;
      this.dataSource = new MatTableDataSource<Categoria>(this.lista);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      //console.log("dataSource");
      //console.log(this.dataSource);
    });
  }

  navegarParaCategoriaCreate() {
    this.router.navigate(["categorias/create"])
  }
}

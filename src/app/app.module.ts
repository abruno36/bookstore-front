import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http'; 
import { MatSelectModule } from '@angular/material/select'; 
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from "@angular/material/radio"; 
import { MatDatepickerModule } from '@angular/material/datepicker'; 
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatSidenavModule } from '@angular/material/sidenav'; 
import { MatIconModule } from '@angular/material/icon'; 
import { MatButtonModule } from '@angular/material/button'; 
import { MatListModule } from '@angular/material/list'; 
import { MatCardModule } from '@angular/material/card'; 
import { MatTableModule } from '@angular/material/table'; 
import { MatPaginatorModule } from '@angular/material/paginator'; 
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatMenuModule} from '@angular/material/menu';
import { MatChipsModule } from "@angular/material/chips";
import { MatSortModule } from "@angular/material/sort";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { HomeComponent } from './components/views/home/home.component';
import { CategoriaReadComponent } from './components/views/categoria/categoria-read/categoria-read.component';
import { CategoriaCreateComponent } from './components/views/categoria/categoria-create/categoria-create.component';
import { CategoriaUpdateComponent } from './components/views/categoria/categoria-update/categoria-update.component';
import { CategoriaDeleteComponent } from './components/views/categoria/categoria-delete/categoria-delete.component';
import { LivroReadAllComponent } from './components/views/livro/livro-read-all/livro-read-all.component';
import { LivroReadComponent } from './components/views/livro/livro-read/livro-read.component';
import { LivroUpdateComponent } from './components/views/livro/livro-update/livro-update.component';
import { LivroCreateComponent } from './components/views/livro/livro-create/livro-create.component';
import { LivroDeleteComponent } from './components/views/livro/livro-delete/livro-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    CategoriaReadComponent,
    CategoriaCreateComponent,
    CategoriaUpdateComponent,
    CategoriaDeleteComponent,
    LivroReadAllComponent,
    LivroReadComponent,
    LivroUpdateComponent,
    LivroCreateComponent,
    LivroDeleteComponent
  ],
  imports: [
BrowserModule, 
AppRoutingModule, 
FormsModule, 
ReactiveFormsModule, 
BrowserAnimationsModule, 
HttpClientModule, 
BrowserModule, 
AppRoutingModule, 
BrowserAnimationsModule, 
MatToolbarModule, 
MatSidenavModule, 
MatIconModule, 
MatButtonModule, 
MatListModule, 
MatCardModule, 
MatTableModule, 
MatSelectModule, 
MatInputModule, 
MatDatepickerModule, 
MatPaginatorModule, 
MatSnackBarModule,
MatRadioModule,
MatChipsModule,
MatSortModule,
MatMenuModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

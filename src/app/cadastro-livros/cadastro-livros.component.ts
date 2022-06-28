import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CadastroLivroService} from "./cadastro-livro.service";
import {Books} from "../models/books";

@Component({
  selector: 'app-cadastro-livros',
  templateUrl: './cadastro-livros.component.html',
  styleUrls: ['./cadastro-livros.component.css']
})
export class CadastroLivrosComponent implements OnInit {

  booksGroup = new FormGroup({
    name: new FormControl(''),
    author: new FormControl(''),
    date: new FormControl('')
  })

  books: Books[] = [

  ]
  constructor(private cadastroService: CadastroLivroService) { }

  ngOnInit(): void {
    this.get();
  }

  submit(){
    let data = this.booksGroup.value;
    this.cadastroService.add(data).subscribe(
      (books) => {
        console.log(books)
        this.get();
        this.cleanFields();
      },
      (err) => console.error(err));
  };

  cleanFields(){
    this.booksGroup.value.name = '';
    this.booksGroup.value.author = '';
    this.booksGroup.value.date = '';
  }


  get() {
    this.cadastroService.get().subscribe(
      (book) => this.books = book
    )
  }
}

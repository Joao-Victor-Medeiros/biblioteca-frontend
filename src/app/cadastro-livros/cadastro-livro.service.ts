import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Books} from "../models/books";

@Injectable({
  providedIn: 'root'
})
export class CadastroLivroService {

  readonly url = 'http://localhost:3000/books';

  constructor(private http: HttpClient) { }

  get(): Observable<Books[]>{
    return this.http.get<Books[]>(this.url)
  }

  add(b: Books): Observable<Books> {
    return this.http.post<Books>(this.url, b)
  }
}

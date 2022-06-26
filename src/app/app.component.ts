import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'biblioteca';
  content:any = []

  books = new FormGroup({
    name: new FormControl(''),
    author: new FormControl(''),
    date: new FormControl('')
  })

  submit(){
    console.log(this.books.value)
  }

}

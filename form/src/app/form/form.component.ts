import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  mioForm: FormGroup;
  constructor ( ) {
      this.mioForm = new FormGroup ( {
                    nome : new FormControl () ,
                    cognome : new FormControl () ,
                    citta : new FormControl ()	});
      }

  ngOnInit() {
  }

}

      



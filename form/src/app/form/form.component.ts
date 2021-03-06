import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { MatDatepickerInput } from '@angular/material';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit { 
  mioForm: FormGroup;
  constructor ( ) {
      this.mioForm = new FormGroup ( {
                    nome : new FormControl ('' , [ Validators.required, Validators.minLength(5)] ) ,
                    cognome : new FormControl ('' , [ Validators.required, Validators.minLength(5)] ) ,
                    citta : new FormControl ('' , [ Validators.required, Validators.minLength(5)] ),
                    email : new FormControl ('' , [ Validators.required, Validators.email])
                  });
      }

  ngOnInit() {
  }
getInfo(){
  console.log(this.mioForm.value);
}
get nome(){return this.mioForm.get('nome')}
get cognome(){return this.mioForm.get('cognome')}
get citta(){return this.mioForm.get('citta')}
get email(){return this.mioForm.get('email')}
}

      



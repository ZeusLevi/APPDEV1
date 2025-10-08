import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';

type Trainer = {
  name: string;
  age: string;
  address: string;
  favoritePokemon: string;
};

@Component({
  selector: 'app-trainer-form',
  imports: [ReactiveFormsModule],
  templateUrl: './trainer-form.html',
  styleUrls: ['./trainer-form.css']
})

export class TrainerForm {
  trainerList: Trainer[] = [
    {name: "", age: "", address: "", favoritePokemon: ""}
  ];

  formGroup = new FormGroup({
    name: new FormControl('', { nonNullable: true }),
    age: new FormControl('', { nonNullable: true }),
    address: new FormControl('', { nonNullable: true }),
    favoritePokemon: new FormControl('', { nonNullable: true })
});

onSubmit(){
  const trainer = this.formGroup.getRawValue();
  this.trainerList.push(trainer);
  }
}
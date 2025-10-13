import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

type Trainer = {
  name: string;
  age: string;
  address: string;
  favoritePokemon: string;
  slot1: string;
  slot2: string;
  slot3: string;
  slot4: string;
  slot5: string;
  slot6: string;
};

@Component({
  selector: 'app-trainer-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './trainer-form.html',
  styleUrls: ['./trainer-form.css']
})
export class TrainerForm {
  trainerList: Trainer[] = [];

  formGroup = new FormGroup({
    name: new FormControl('', { nonNullable: true }),
    age: new FormControl('', { nonNullable: true }),
    address: new FormControl('', { nonNullable: true }),
    favoritePokemon: new FormControl('', { nonNullable: true }),
    slot1: new FormControl('', { nonNullable: true }),
    slot2: new FormControl('', { nonNullable: true }),
    slot3: new FormControl('', { nonNullable: true }),
    slot4: new FormControl('', { nonNullable: true }),
    slot5: new FormControl('', { nonNullable: true }),
    slot6: new FormControl('', { nonNullable: true }),
  });

  onSubmit() {
    const trainer = this.formGroup.getRawValue();
    const isEmpty = Object.values(trainer).every(value => !value || value.toString().trim() === '');
    if (isEmpty) {
      return;
      }
  this.trainerList.push(trainer);
  }
}
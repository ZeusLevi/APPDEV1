import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-food-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule, MatCardModule, MatProgressBarModule],
  templateUrl: './food-list.html',
  styleUrls: ['./food-list.css']
})
export class FoodList {
  foods: any[] = [];
  loading = true;

  mealNames = ['52772', '53105', '53014', '53009', '53099', '52803', '52950', '53032', '53044', '52833'];

  constructor(private http: HttpClient) {
    const requests = this.mealNames.map(id =>
      this.http.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    );

    Promise.all(requests.map(r => r.toPromise()))
      .then(responses => {
        responses.forEach((res: any) => {
          if (res.meals) this.foods.push(res.meals[0]);
        });
      })
      .finally(() => (this.loading = false));
  }
}


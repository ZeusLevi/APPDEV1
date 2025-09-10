import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  color = ['#FF5733', '#33FF57', '#3357FF', '#F333FF', '#33FFF5', '#F5FF33'];
 
  
    currentColorIndex = signal(0);
    currentColor = signal(this.color[0]);

    changeColor() {
   
        const nextIndex = (this.currentColorIndex() + 1) % this.color.length;
        this.currentColor.set(this.color[nextIndex]);
        this.currentColorIndex.set(nextIndex);
        
      
    }
    
}

import { Component, OnInit } from '@angular/core';
import { WorkoutService } from '../services/workout.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-entrainement',
  standalone: true,
  imports: [CommonModule,FormsModule, HttpClientModule],
  templateUrl: './entrainement.component.html',
  styleUrls: ['./entrainement.component.css']
})
export class EntrainementComponent implements OnInit {
  workouts: any[] = [];
  constructor(private workoutService: WorkoutService) {}

  ngOnInit(): void {
    
    this.workoutService.getWorkouts().subscribe(
      (data: any[]) => {
        console.log('Workouts reçus :', data);
        this.workouts = data;
        console.log('Workouts stockés dans la variable :', this.workouts);
      },
      (error: any) => {
        console.error('Erreur lors de la récupération des workouts :', error);
      }
    );
  }
}

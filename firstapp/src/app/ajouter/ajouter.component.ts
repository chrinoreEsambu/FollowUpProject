import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WorkoutService } from '../services/workout.service';
@Component({
  selector: 'app-ajouter',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent {
  constructor(private workoutService: WorkoutService) {}
  formData = {
    exerciseName: '',
    date: '',
    duration: null as number | null,
    sets: null as number | null,
    reps: null as number | null,
    weight: null as number | null,
    exerciseType: '',
    intensity: '',
    notes: ''
  };

  onSubmit() {
    console.log('Formulaire soumis :', this.formData);
    console.log('Formulaire soumis :', this.formData);

    this.workoutService.addWorkout(this.formData).subscribe(
      (response: any) => {
        console.log('Données envoyées avec succès:', response);
        alert('Entraînement ajouté avec succès !');
      },
      (error: any) => {
        console.error('Erreur lors de l\'envoi des données :', error);
        alert('Erreur lors de l\'ajout de l\'entraînement.');
      }
    );
  }
  
}

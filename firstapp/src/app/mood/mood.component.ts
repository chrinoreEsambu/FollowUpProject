import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SuggestionService } from '../services/suggestion.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ajouter',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule],
  templateUrl: './mood.component.html',
  styleUrls: ['./mood.component.css']
})
export class MoodComponent {
  formData = {
    sleepQuality: '',
    energyLevel: '',
    mood: '',
    goal: '',
    goalCustom: '',
    additionalComments: '',
    exerciseType: ''
  };

  isLoading = false;

  constructor(private SuggestionService: SuggestionService) {}

  onSubmit(): void {
    this.isLoading = true;

    this.SuggestionService.submitSuggestion(this.formData).subscribe({
      next: response => {
        console.log('Réponse du serveur :', response);
        this.resetForm();
        this.isLoading = false;
      },
      error: error => {
        console.error('Erreur lors de l\'envoi des données :', error);
        this.isLoading = false;
      }
    });
  }

  resetForm(): void {
    this.formData = {
      sleepQuality: '',
      energyLevel: '',
      mood: '',
      goal: '',
      goalCustom: '',
      additionalComments: '',
      exerciseType: ''
    };
  }

  onGoalChange(event: any): void {
    if (event.target.value !== 'Autre') {
      this.formData.goalCustom = '';
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { SuggestionService } from '../services/suggestion.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-suggestion-list',
  imports: [CommonModule,FormsModule, HttpClientModule],
  templateUrl: './suggestion-list.component.html'
  
})
export class SuggestionListComponent implements OnInit {
  suggestions: any[] = [];

  constructor(private suggestionService: SuggestionService) {}

  ngOnInit(): void {
    this.loadSuggestions();
  }

  loadSuggestions(): void {
    this.suggestionService.getSuggestions().subscribe((data) => {
      this.suggestions = data;
    });
  }

  deleteSuggestion(id: number): void {
    if (confirm('Confirmer la suppression ?')) {
      this.suggestionService.deleteSuggestion(id).subscribe(() => {
        this.suggestions = this.suggestions.filter(s => s.id !== id);
      });
    }
  }
}

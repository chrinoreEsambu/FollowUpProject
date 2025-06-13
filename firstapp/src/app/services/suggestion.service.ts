import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SuggestionService {
  private apiUrl = 'http://localhost:8000/api/suggestions';

  constructor(private http: HttpClient) {}

  // 🔧 Accepte un objet complet (formData)
  submitSuggestion(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  getSuggestions(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  deleteSuggestion(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}

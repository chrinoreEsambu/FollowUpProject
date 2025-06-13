import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
  // standalone: true
})
export class WorkoutService {
  private apiUrl = 'http://localhost:8000/api/workouts';
  constructor(private http: HttpClient) {}

  addWorkout(workoutData: any): Observable<any> {
    return this.http.post(this.apiUrl, workoutData);
  }

  getWorkouts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  
 
}
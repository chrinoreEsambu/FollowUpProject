import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { WorkoutService } from './app/services/workout.service'; 
import { provideHttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';


bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
     
    WorkoutService, 
    ...appConfig.providers 
  ]
}).catch((err) => console.error(err));

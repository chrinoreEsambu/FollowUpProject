import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SuggestionService } from '../services/suggestion.service';
import { MoodComponent } from './mood.component';

describe('MoodComponent', () => {
  let component: MoodComponent;
  let fixture: ComponentFixture<MoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoodComponent, SuggestionService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

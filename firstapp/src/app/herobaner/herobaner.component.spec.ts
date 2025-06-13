import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerobanerComponent } from './herobaner.component';

describe('HerobanerComponent', () => {
  let component: HerobanerComponent;
  let fixture: ComponentFixture<HerobanerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HerobanerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HerobanerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

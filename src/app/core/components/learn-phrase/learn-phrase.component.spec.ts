import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnPhraseComponent } from './learn-phrase.component';

describe('LearnPhraseComponent', () => {
  let component: LearnPhraseComponent;
  let fixture: ComponentFixture<LearnPhraseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnPhraseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnPhraseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

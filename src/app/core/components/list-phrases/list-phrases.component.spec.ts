import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPhrasesComponent } from './list-phrases.component';

describe('ListPhrasesComponent', () => {
  let component: ListPhrasesComponent;
  let fixture: ComponentFixture<ListPhrasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPhrasesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPhrasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

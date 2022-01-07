import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteDatailsComponent } from './quote-datails.component';

describe('QuoteDatailsComponent', () => {
  let component: QuoteDatailsComponent;
  let fixture: ComponentFixture<QuoteDatailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuoteDatailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteDatailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

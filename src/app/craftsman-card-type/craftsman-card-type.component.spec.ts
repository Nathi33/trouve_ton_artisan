import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CraftsmanCardTypeComponent } from './craftsman-card-type.component';

describe('CraftsmanCardTypeComponent', () => {
  let component: CraftsmanCardTypeComponent;
  let fixture: ComponentFixture<CraftsmanCardTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CraftsmanCardTypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CraftsmanCardTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

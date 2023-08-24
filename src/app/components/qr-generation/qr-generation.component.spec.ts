import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrGenerationComponent } from './qr-generation.component';

describe('QrGenerationComponent', () => {
  let component: QrGenerationComponent;
  let fixture: ComponentFixture<QrGenerationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QrGenerationComponent]
    });
    fixture = TestBed.createComponent(QrGenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

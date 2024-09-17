import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibroNewComponent } from './libro-new.component';

describe('LibroNewComponent', () => {
  let component: LibroNewComponent;
  let fixture: ComponentFixture<LibroNewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LibroNewComponent]
    });
    fixture = TestBed.createComponent(LibroNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

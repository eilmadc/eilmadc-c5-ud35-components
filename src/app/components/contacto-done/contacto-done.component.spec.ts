import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoDoneComponent } from './contacto-done.component';

describe('ContactoDoneComponent', () => {
  let component: ContactoDoneComponent;
  let fixture: ComponentFixture<ContactoDoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactoDoneComponent]
    });
    fixture = TestBed.createComponent(ContactoDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

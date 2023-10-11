import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondoneComponent } from './secondone.component';

describe('SecondoneComponent', () => {
  let component: SecondoneComponent;
  let fixture: ComponentFixture<SecondoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

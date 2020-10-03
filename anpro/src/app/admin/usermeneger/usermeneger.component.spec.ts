import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsermenegerComponent } from './usermeneger.component';

describe('UsermenegerComponent', () => {
  let component: UsermenegerComponent;
  let fixture: ComponentFixture<UsermenegerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsermenegerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsermenegerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

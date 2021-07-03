import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardModeratorComponent } from './dashboard-moderator.component';

describe('DashboardModeratorComponent', () => {
  let component: DashboardModeratorComponent;
  let fixture: ComponentFixture<DashboardModeratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardModeratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardModeratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

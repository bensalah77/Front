import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteBadgecomponentComponent } from './vote-badgecomponent.component';

describe('VoteBadgecomponentComponent', () => {
  let component: VoteBadgecomponentComponent;
  let fixture: ComponentFixture<VoteBadgecomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoteBadgecomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteBadgecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySpaceUserCardComponent } from './my-space-user-card.component';

describe('MySpaceUserCardComponent', () => {
  let component: MySpaceUserCardComponent;
  let fixture: ComponentFixture<MySpaceUserCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MySpaceUserCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MySpaceUserCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

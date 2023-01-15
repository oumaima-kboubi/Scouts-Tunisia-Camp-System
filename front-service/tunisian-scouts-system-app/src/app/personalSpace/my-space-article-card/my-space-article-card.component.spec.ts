import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySpaceArticleCardComponent } from './my-space-article-card.component';

describe('MySpaceArticleCardComponent', () => {
  let component: MySpaceArticleCardComponent;
  let fixture: ComponentFixture<MySpaceArticleCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MySpaceArticleCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MySpaceArticleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleEditCardComponent } from './article-edit-card.component';

describe('ArticleEditCardComponent', () => {
  let component: ArticleEditCardComponent;
  let fixture: ComponentFixture<ArticleEditCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleEditCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleEditCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

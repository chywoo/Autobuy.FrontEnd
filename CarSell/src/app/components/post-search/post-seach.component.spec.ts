import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostSeachComponent } from './post-seach.component';

describe('PostSeachComponent', () => {
  let component: PostSeachComponent;
  let fixture: ComponentFixture<PostSeachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostSeachComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostSeachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssuritygitComponent } from './assuritygit.component';

describe('AssuritygitComponent', () => {
  let component: AssuritygitComponent;
  let fixture: ComponentFixture<AssuritygitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssuritygitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssuritygitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

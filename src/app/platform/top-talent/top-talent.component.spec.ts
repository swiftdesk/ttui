import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTalentComponent } from './top-talent.component';

describe('TopTalentComponent', () => {
  let component: TopTalentComponent;
  let fixture: ComponentFixture<TopTalentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopTalentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopTalentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

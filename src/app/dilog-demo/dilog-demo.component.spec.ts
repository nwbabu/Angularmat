import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DilogDemoComponent } from './dilog-demo.component';

describe('DilogDemoComponent', () => {
  let component: DilogDemoComponent;
  let fixture: ComponentFixture<DilogDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DilogDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DilogDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

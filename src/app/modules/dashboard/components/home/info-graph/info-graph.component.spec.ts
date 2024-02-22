import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoGraphComponent } from './info-graph.component';

describe('InfoGraphComponent', () => {
  let component: InfoGraphComponent;
  let fixture: ComponentFixture<InfoGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfoGraphComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

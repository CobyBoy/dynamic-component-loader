import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToRenderComponent } from './to-render.component';

describe('ToRenderComponent', () => {
  let component: ToRenderComponent;
  let fixture: ComponentFixture<ToRenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToRenderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

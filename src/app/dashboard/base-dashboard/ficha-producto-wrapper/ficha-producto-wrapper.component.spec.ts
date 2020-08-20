import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaProductoWrapperComponent } from './ficha-producto-wrapper.component';

describe('FichaProductoWrapperComponent', () => {
  let component: FichaProductoWrapperComponent;
  let fixture: ComponentFixture<FichaProductoWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichaProductoWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FichaProductoWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

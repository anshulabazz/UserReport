import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBarsComponent } from './menu-bars.component';

describe('MenuBarsComponent', () => {
  let component: MenuBarsComponent;
  let fixture: ComponentFixture<MenuBarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuBarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuBarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

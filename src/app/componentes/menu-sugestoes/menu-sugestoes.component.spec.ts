import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSugestoesComponent } from './menu-sugestoes.component';

describe('MenuSugestoesComponent', () => {
  let component: MenuSugestoesComponent;
  let fixture: ComponentFixture<MenuSugestoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuSugestoesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuSugestoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabecalhoFeedsComponent } from './cabecalho-feeds.component';

describe('CabecalhoFeedsComponent', () => {
  let component: CabecalhoFeedsComponent;
  let fixture: ComponentFixture<CabecalhoFeedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabecalhoFeedsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CabecalhoFeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

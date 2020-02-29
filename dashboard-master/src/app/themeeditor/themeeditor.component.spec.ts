import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeeditorComponent } from './themeeditor.component';

describe('ThemeeditorComponent', () => {
  let component: ThemeeditorComponent;
  let fixture: ComponentFixture<ThemeeditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeeditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeeditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

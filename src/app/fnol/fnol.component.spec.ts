import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FnolComponent } from './fnol.component';

describe('FnolComponent', () => {
  let component: FnolComponent;
  let fixture: ComponentFixture<FnolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FnolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FnolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

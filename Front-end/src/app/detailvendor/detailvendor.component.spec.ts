import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailvendorComponent } from './detailvendor.component';

describe('DetailvendorComponent', () => {
  let component: DetailvendorComponent;
  let fixture: ComponentFixture<DetailvendorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailvendorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailvendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

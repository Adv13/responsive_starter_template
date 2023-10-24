import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideContainerComponent } from './aside-container.component';

describe('AsideContainerComponent', () => {
  let component: AsideContainerComponent;
  let fixture: ComponentFixture<AsideContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsideContainerComponent]
    });
    fixture = TestBed.createComponent(AsideContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

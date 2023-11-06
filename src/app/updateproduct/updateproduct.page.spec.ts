import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateproductPage } from './updateproduct.page';

describe('UpdateproductPage', () => {
  let component: UpdateproductPage;
  let fixture: ComponentFixture<UpdateproductPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UpdateproductPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

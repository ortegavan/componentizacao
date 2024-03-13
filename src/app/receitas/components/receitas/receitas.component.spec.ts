import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceitasComponent } from './receitas.component';

describe('ReceitasComponent', () => {
  let component: ReceitasComponent;
  let fixture: ComponentFixture<ReceitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReceitasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReceitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

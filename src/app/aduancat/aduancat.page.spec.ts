import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AduancatPage } from './aduancat.page';

describe('AduancatPage', () => {
  let component: AduancatPage;
  let fixture: ComponentFixture<AduancatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AduancatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AduancatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

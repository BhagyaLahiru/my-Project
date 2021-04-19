import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GemProcPage } from './gem-proc.page';

describe('GemProcPage', () => {
  let component: GemProcPage;
  let fixture: ComponentFixture<GemProcPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GemProcPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GemProcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

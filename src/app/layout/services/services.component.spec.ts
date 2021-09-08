import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ServicesComponent } from "./services.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("ServicesComponent", () => {

  let fixture: ComponentFixture<ServicesComponent>;
  let component: ServicesComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [ServicesComponent]
    });

    fixture = TestBed.createComponent(ServicesComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});

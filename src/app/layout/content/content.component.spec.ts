import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ContentComponent } from "./content.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("ContentComponent", () => {

  let fixture: ComponentFixture<ContentComponent>;
  let component: ContentComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [ContentComponent]
    });

    fixture = TestBed.createComponent(ContentComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});

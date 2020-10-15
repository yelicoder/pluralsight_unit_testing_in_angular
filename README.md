# pluralsight_unit_testing_in_angular
Origina code are from https://github.com/joeeames/PSAngularUnitTestingCourse

3A for unit testing: Arrange, Act and Assert

Describe the component you want to test and use a () => {} call back method.
Use beforeEach (()=>{}) to do the set up for all testing.
Use it ('description of the test', ()=> {}) to do a specific test. 
Use describe ('group name', ()=> {}) to group testes together. 

You can create a mockService by using jasmine.createSpyObj.

You need TestBed and ComponentFixture to test a component.
TestBed configures and initializes environment for unit testing and provides methods for creating components and services in unit tests.
ComponentFixture is used to debugging and testing a component. It has nativeElement and debugElement. The debugElement is a wrapper around the DOM node and has a lot of useful methods.

A mockService can be injected to the component using the following:
providers: [
    {provide: HeroService, useValue: mockHeroService}
]

In general, whatever in the component's constructor need be mocked

You can create a fake child component using the same selector as the real child component

You can use the actual child component and the debug element to do a deep integration test

To unit test a service, need do the following
1) user TestBed to get the service and HttpTestingController
2) call the service with specific parameters
3) req = httpTestingController.expectOne(correctURL)
4) req.flush(correct response data)
5) httpTestingController.verify()

To test an inputbox
1) Get the native element of the input debugElement
2) set the value of the input element
3) Get the add button
4) Mock the service with the correct returne value
5) Trigger the click event of the add button
6) Expect a new entry added in the list 

The key of testing with ActivatedRoute is to extract the data from ActivatedRoute and render the component correctly. 

import FormsModule to fix the "can't bind to 'ngModel'" error


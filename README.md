# pluralsight_unit_testing_in_angular
Origina code are from https://github.com/joeeames/PSAngularUnitTestingCourse

## Run the application
1. checkout the code
2. nvm use 12.14.1
3. npm i
4. npm start
5. npm test

## Project
1. firstTest: npm test to see the result
2. testPipe: test strengthPipe
3. testService: test messageService.

## How to structure a test
A test should be a complete story, all within the it()
1. move less interesting setup into beforeEach()
2. keep critical setup with in the it()
3. inlcude Arrange, Act, and Assert inside the it()

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

Use the following Directive Stub Template to create a RouterLinkDirectiveStub
@Directive({
    selector: '[routerLink]',
    host: {'(click)': 'onClick()'}
    // 'click' is the event, onClick is the method call in the directive. These two are mapped by the host
})

export class RouterLinkDirectStub {
    @Input('routerLink') linkParams: any;
    navigatedTo: any = null;

    onClick() {
        this.navigatedTo = this.linkParams;
    }
}

Test the routerLink
1) Write the RouterLinkDirectiveStub, in the stub mapping the 'click' event with the correct Function
2) get the stub and trigger the routelink event
3) expect the correct value in the routelink value

Test Async Call: FakeAsync is the best
1) use Timeout and jasmine done function
2) Better: use FakeAsync with tick(). Even better: use FakeAsync with flush(). 
3) for Promise, you can also use async 

Code Coverage: ng test --code-coverage

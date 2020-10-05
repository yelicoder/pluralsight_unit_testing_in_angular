# pluralsight_unit_testing_in_angular
Origina code are from https://github.com/joeeames/PSAngularUnitTestingCourse

3A for unit testing: Arrange, Act and Assert

Describe the component you want to test and use a () => {} call back method.
Use beforeEach (()=>{}) to do the set up for all testing.
Use it ('description of the test', ()=> {}) to do a specific test
Use describe ('group name', ()=> {}) to group testes together

You need TestBed and ComponentFixture to test a component.
TestBed configures and initializes environment for unit testing and provides methods for creating components and services in unit tests.
ComponentFixture is used to debugging and testing a component

import { Component, Input, NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing"
import { By } from "@angular/platform-browser";
import { of } from "rxjs";
import { HeroesComponent } from "../../../../componentShallowIntegrationTest/src/app/heroes/heroes.component"
import { Hero } from "../hero";
import { HeroService } from "../hero.service";

describe('HerosComponent (shallow tests)', () => {
    let fixture: ComponentFixture<HeroesComponent>;
    let mockHeroService;
    let HEROES;

    @Component({
      selector: 'app-hero',
      template: '<div></div>',
    })
    class HeroComponent {
      @Input() hero: Hero;
    }

    beforeEach(() => {
      HEROES = [
        {id: 1, name: 'SpiderDude', strength: 8},
        {id: 2, name: 'Wonderful Woman', strength: 24},
        {id: 3, name: 'SuperDude', strength: 55}
      ]
      
        mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero']);
        TestBed.configureTestingModule({
            declarations: [HeroesComponent],
            providers: [
              {provide: HeroService, useValue: mockHeroService }
            ],
            //schemas: [NO_ERRORS_SCHEMA]
        });
        fixture = TestBed.createComponent(HeroesComponent);
      
      });
      
      it('should set heroes correctly from the service', () => {
        mockHeroService.getHeroes.and.returnValue(of(HEROES));
        fixture.detectChanges();

        expect(fixture.componentInstance.heroes.length).toBe(3);
      })

      it('should create one li for each hero', () => {
        mockHeroService.getHeroes.and.returnValue(of(HEROES));
        fixture.detectChanges();

        expect(fixture.debugElement.queryAll(By.css('li')).length).toBe(3);

      })

    

})
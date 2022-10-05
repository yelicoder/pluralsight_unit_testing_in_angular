import { async, ComponentFixture, fakeAsync, flush, TestBed, tick } from "@angular/core/testing";
import { Location } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { of } from "rxjs";
import { HeroService } from "../hero.service";
import { HeroDetailComponent } from "./hero-detail.component";
import { debounce } from "rxjs/operators";
import { RouterTestingModule } from "@angular/router/testing";


describe ('HeroDetailCoomponent', () =>{
    let fixture: ComponentFixture<HeroDetailComponent>;
    let mockActivatedRoute, mockHeroService, mockLocation;
    beforeEach(()=>{
        mockActivatedRoute = {
            snapshot: { paramMap: {get: () => {return '3';}}}
        }
        mockHeroService = jasmine.createSpyObj(['getHero', 'updateHero']);
        mockLocation = jasmine.createSpyObj(['back']);
       // mockLocation = {
         //   back: jasmine.createSpy('back')
        //}

        
       //providers: [{ provide: Location, useClass: SpyLocation }]

        TestBed.configureTestingModule({
            imports: [FormsModule, RouterTestingModule],
            declarations: [HeroDetailComponent],
            providers: [
                {provide: Location, useValue: mockLocation},
                {provide: ActivatedRoute, useValue: mockActivatedRoute},
                {provide: HeroService, useValue: mockHeroService},
                
            ]
        });

        fixture = TestBed.createComponent(HeroDetailComponent);
        mockHeroService.getHero.and.returnValue(of({id: 3, name: 'SuperDude', strength: 100}))
    });

    it (`should render hero name in a h2 tag`, ()=> {
        fixture.detectChanges();

        expect(fixture.nativeElement.querySelector('h2').textContent).toContain('SUPERDUDE');

    });

    it (`should call updateHero when save is called`, fakeAsync(() => {
        mockHeroService.updateHero.and.returnValue(of({}));
        fixture.detectChanges();
        fixture.componentInstance.save();
        //tick(250);
        flush();

        expect(mockHeroService.updateHero).toHaveBeenCalled()    
    }))

    // it (`should call updateHero when save is called`, async(()=>{
    //     mockHeroService.updateHero.and.returnValue(of({}));
    //     fixture.detectChanges();

    //     fixture.componentInstance.save();

    //     fixture.whenStable().then(() => {
    //         expect(mockHeroService.updateHero).toHaveBeenCalled();
            
    //     });

    // }))

})
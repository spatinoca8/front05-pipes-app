import { HeroCreatorPipe } from './../../pipes/hero-creator.pipe';
import { UpperCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { DefaultValueAccessor } from '@angular/forms';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { heroes } from '../../data/heroes.data';
import { canFlyPipe } from '../../pipes/can-fly.pipe';
import { HeroColorPipe } from '../../pipes/hero-color.pipe';
import { HeroTextColorPipe } from '../../pipes/hero-text-color.pipe';
import { HeroSortByPipe } from '../../pipes/hero-sort-by.pipe';
import { Hero } from '../../interfaces/hero.interface';
import { HeroFilterPipe } from '../../pipes/hero-filter.pipe';

@Component({
  selector: 'app-custom-page',
  imports: [ToggleCasePipe,
    UpperCasePipe,
    canFlyPipe,
     HeroColorPipe,
     HeroTextColorPipe,
    HeroCreatorPipe,
     HeroSortByPipe,
    HeroFilterPipe],
  templateUrl: './custom-page.component.html'
})
export default class CustomPageComponent extends DefaultValueAccessor {

  name=signal('Silvia Patiño')
  upperCase= signal(true);

  heroes= signal(heroes);
  sortBy = signal<keyof Hero | null> (null);
  searchQuery=signal('')
  
}

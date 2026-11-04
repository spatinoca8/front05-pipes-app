import { Component } from '@angular/core';
import { DefaultValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-custom-page',
  imports: [],
  templateUrl: './custom-page.component.html'
})
export default class CustomPageComponent extends DefaultValueAccessor {

}

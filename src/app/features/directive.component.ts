import { Component } from '@angular/core';
import { ColorDirective } from './directive/color.directive';
import { ValidateDirective } from './directive/form-validate.directive';

@Component({
  selector: 'app-directive',
  standalone: true,
  imports: [ColorDirective, ValidateDirective],
  templateUrl: './directive.component.html',
})
export class DirectiveComponent {

}

import { Component, Input } from '@angular/core';

export type IconNames = 'cart' | 'user' | 'key' | 'info' | 'search' | 'loader';

@Component({
  selector: 'app-svg-icon',
  templateUrl: './svg-icon.component.html',
})
export class SvgIconComponent {
  @Input() name: IconNames;
  @Input() className: string;
}

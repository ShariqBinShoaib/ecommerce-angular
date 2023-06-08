import { Component, Input } from '@angular/core';

export type IconNames = 'cart' | 'user' | 'key' | 'info' | 'loader';

@Component({
  selector: 'app-svg-icon',
  templateUrl: './svg-icon.component.html',
  styleUrls: ['./svg-icon.component.css'],
})
export class SvgIconComponent {
  @Input() name: IconNames;
  @Input() className: string;
}

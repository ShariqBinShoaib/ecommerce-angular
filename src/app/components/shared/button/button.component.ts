import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() className? = '';
  @Input() type? = 'button';
  @Output() onClick = new EventEmitter();

  onButtonClick(event: Event) {
    if (this.onClick) {
      this.onClick.emit(event);
    }
  }
}

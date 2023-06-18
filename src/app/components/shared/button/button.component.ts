import { Component, EventEmitter, Input, Output } from '@angular/core';

type Variant = 'contained' | 'outlined' | 'text';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() className? = '';
  @Input() buttonType: 'button' | 'submit' = 'button';
  @Input() variant: Variant = 'contained';
  @Input() disabled: boolean = false;
  @Output() onClick = new EventEmitter();

  onButtonClick(event: Event) {
    this.onClick.emit(event);
  }

  protected variantsClasses: Record<Variant, string> = {
    contained:
      'rounded-md w-full bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm border border-indigo-600 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50',
    outlined:
      'rounded-md px-3.5 py-2.5 text-sm font-semibold text-indigo-600 hover:text-white shadow-sm border border-indigo-600 hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-indigo-300 disabled:opacity-50',
    text: 'text-indigo-600 hover:text-indigo-500 disabled:opacity-50',
  };
}

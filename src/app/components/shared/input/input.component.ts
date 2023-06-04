import {
  Component,
  EventEmitter,
  Input,
  Output,
  forwardRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
  host: {
    '(input)': '_onChange($event.target.value)',
    '(blur)': '_onBlur()',
  },
})
export class InputComponent implements ControlValueAccessor {
  @Input() name: string = '';
  @Input() label?: string;
  @Input() type?: 'text' | 'number' | 'password' = 'text';
  @Input() value?: string;
  @Input() error?: string;
  @Input() placeholder?: string;

  @Output() valueChange = new EventEmitter<string>();
  @Output() onChange = new EventEmitter<Event>();
  @Output() onBlur = new EventEmitter<Event>();

  protected _onChange = () => {};
  protected _onBlur = () => {};

  onValueChange(value: string) {
    this.value = value;
    this.valueChange.emit(value);
  }

  handleChange(event: Event) {
    this.onChange.emit(event);
  }

  handleBlur(event: Event) {
    this.onBlur.emit(event);
  }

  registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this._onBlur = fn;
  }

  writeValue(input: string) {
    this.value = input;
  }
}

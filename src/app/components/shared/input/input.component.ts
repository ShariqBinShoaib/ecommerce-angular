import {
  Component,
  EventEmitter,
  Input,
  Output,
  forwardRef,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { Validators } from 'src/app/types';

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
  @Input() required: boolean = false;
  @Input() validators?: Validators;

  @Output() valueChange = new EventEmitter<string>();
  @Output() onChange = new EventEmitter<Event>();
  @Output() onBlur = new EventEmitter<Event>();

  protected _onChange = () => {};
  protected _onBlur = () => {};

  protected handleChange(event: Event) {
    this.onChange.emit(event);
  }

  protected handleBlur(event: Event) {
    this.onBlur.emit(event);
  }

  protected customValidator(control: FormControl) {
    if (this.validators?.customValidator) {
      return this.validators.customValidator?.value;
    }

    return null;
  }

  onValueChange(value: string) {
    this.value = value;
    this.valueChange.emit(value);
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

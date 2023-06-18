import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Injector,
  Input,
  OnInit,
  Output,
  forwardRef,
} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  NgControl,
} from '@angular/forms';

export type ValidationTypes =
  | 'required'
  | 'pattern'
  | 'minlength'
  | 'maxlength'
  | 'min'
  | 'max'
  | 'customValidator';

export type ErrorMessage = {
  [Type in ValidationTypes]?: string;
};

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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent implements ControlValueAccessor, OnInit {
  @Input() name: string = '';
  @Input() label?: string;
  @Input() type?: 'text' | 'number' | 'password' = 'text';
  @Input() value?: string;
  @Input() errorMessage?: ErrorMessage;
  @Input() placeholder?: string;

  @Output() valueChange = new EventEmitter<string>();
  @Output() onChange = new EventEmitter<Event>();
  @Output() onBlur = new EventEmitter<Event>();

  private ngControl: NgControl;

  constructor(private injector: Injector) {}

  ngOnInit(): void {
    this.ngControl = this.injector.get(NgControl);
  }

  protected _onChange = () => {};
  protected _onBlur = () => {};

  protected get isFieldInvalid(): boolean | null {
    return (
      this.ngControl.invalid && (this.ngControl.dirty || this.ngControl.touched)
    );
  }

  protected get errors() {
    if (this.ngControl.errors) return this.ngControl.errors;
    return {};
  }

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

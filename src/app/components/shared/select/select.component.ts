import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { SelectOption } from 'src/app/types';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectComponent {
  @Input() name: string = '';
  @Input() options: SelectOption[] = [];
  @Input() label?: string;
  @Input() startText?: string;
  @Input() type?: 'numeric' | 'text' = 'text';
  @Input() value?: string;
  @Input() error?: string;

  @Output() valueChange = new EventEmitter<string>();
  @Output() onChange = new EventEmitter<Event>();
  @Output() onBlur = new EventEmitter<Event>();

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
}

import { Directive, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Directive({
  selector: '[validator]',
})
export class InputValidatorDirective implements OnInit {
  constructor(private ngModel: NgModel) {}

  ngOnInit(): void {
    console.log(this.ngModel);
  }
}

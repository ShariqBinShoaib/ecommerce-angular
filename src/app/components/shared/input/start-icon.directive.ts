import {
  Directive,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[startIcon]',
})
export class StartIconDirective implements OnInit, OnDestroy {
  @Input() startIcon: TemplateRef<any>; // Input property to accept the template reference

  constructor(private viewContainerRef: ViewContainerRef) {}

  ngOnInit(): void {
    this.addIcon();
  }

  ngOnDestroy(): void {
    this.removeIcon();
  }

  private addIcon() {
    if (this.startIcon) {
      this.viewContainerRef.clear();
      this.viewContainerRef.createEmbeddedView(this.startIcon);
    }
  }

  private removeIcon() {
    this.viewContainerRef.clear();
  }
}

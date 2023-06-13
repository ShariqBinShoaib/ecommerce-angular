import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
})
export class MainComponent implements OnDestroy {
  ngOnDestroy(): void {
    console.log('Main Destroyed');
  }
}

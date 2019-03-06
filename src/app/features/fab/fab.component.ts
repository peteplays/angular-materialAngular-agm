import { Component } from '@angular/core';

@Component({
  selector: 'app-fab',
  templateUrl: './fab.component.html',
  styleUrls: ['./fab.component.scss'],
})

export class FabComponent {
  fabClicked = false;

  toggleFab() {
    this.fabClicked = !this.fabClicked;
  }
}

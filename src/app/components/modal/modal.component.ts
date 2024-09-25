import { Component } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  isVisible = true;

  show(): void {
    this.isVisible = true;
  }

  hide(): void {
    this.isVisible = false;
  }
}

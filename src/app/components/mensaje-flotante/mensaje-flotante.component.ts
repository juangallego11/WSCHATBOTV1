import { Component, ElementRef, inject, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-mensaje-flotante',
  templateUrl: './mensaje-flotante.component.html',
  styleUrls: ['./mensaje-flotante.component.css']
})

export class MensajeFlotanteComponent {
  showMessage: boolean = true;

  @ViewChild('containerMessageOut') containerMessageOut!: ElementRef;
  constructor(private renderer: Renderer2) { }

  /*  btnCloseWelcomeMessage(): void {
     this.showMessage = false;
   } */

  private toggleClass(element: HTMLElement, className: string): void {
    if (element.classList.contains(className)) {
      this.renderer.removeClass(element, className);
    } else {
      this.renderer.addClass(element, className);
      this.renderer.setStyle(element, 'display', 'block');
    }
  }

  btnCloseWelcomeMessage(): void {
    console.log("cerrando Mensaje.");
    this.showMessage = false;
    const messageOut = document.getElementById('containerMessageOut');
    if (messageOut) {
      this.renderer.setStyle(messageOut, 'display', 'none');
      console.log("Mensaje cerrado.");
    }
  }
}

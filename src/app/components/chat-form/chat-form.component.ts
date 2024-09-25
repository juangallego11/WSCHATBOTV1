import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-chat-form',
  templateUrl: './chat-form.component.html',
  styleUrls: ['./chat-form.component.css']
})
export class ChatFormComponent {

  showMessage: boolean = true;
  isActive: boolean = false;
  isVisible: boolean = false;

  @ViewChild('primeOS') primeOS!: ElementRef;
  @ViewChild('panelContentOS') panelContentOS!: ElementRef;
  @ViewChild('containerMessageOut') containerMessageOut!: ElementRef;
  @ViewChild('chatOSForm') chatOSForm!: ElementRef;
  @ViewChild('chatOSConverse') chatOSConverse!: ElementRef;
  @ViewChild('chatOSBody') chatOSBody!: ElementRef;
  @ViewChild('chatOSTerminos') chatOSTerminos!: ElementRef;
  @ViewChild('chatOSSend') chatOSSend!: ElementRef;
  @ViewChild('recButtonOS') recButtonOS!: ElementRef;
  @ViewChild('btnAttachmentOS') btnAttachmentOS!: ElementRef;
  @ViewChild('divFabOs') divFabOs!: ElementRef;

  constructor(private renderer: Renderer2) { }

  /*  toggleFabOS(): void {
     // Alternar la visibilidad del formulario y el mensaje de bienvenida
     this.isActive = !this.isActive;
     this.isVisible = !this.isVisible;
 
     const panelContentOS = this.panelContentOS.nativeElement;
     const primeOS = this.primeOS.nativeElement;
     const messageOut = this.containerMessageOut.nativeElement;
 
     // Mostrar u ocultar el panel de contenido (formulario)
     if (this.isVisible) {
       this.renderer.setStyle(panelContentOS, 'display', 'block');
       this.renderer.setStyle(messageOut, 'display', 'none'); // Ocultar mensaje
     } else {
       this.renderer.setStyle(panelContentOS, 'display', 'none');
       this.renderer.setStyle(messageOut, 'display', 'block'); // Mostrar mensaje si se oculta el formulario
     }
     
         // Alternar las clases del botón primeOS
         this.toggleClass(primeOS, 'is-active');
         this.toggleClass(primeOS, 'is-float');
         this.toggleClass(primeOS, 'is-visible');
 
     // Scroll hacia el final
     setTimeout(() => {
       if (primeOS) {
         primeOS.scrollTop = primeOS.scrollHeight;
       }
     }, 0);
     this.hideChatOS(2);
   } */



  closeWindow(): void {
    //this.toggleFabOS();
    window.location.reload();
  }


  hideChatOS(hide: number): void {
    switch (hide) {
      case 0:
        this.toggleDisplay(this.chatOSConverse.nativeElement, 'none');
        this.toggleDisplay(this.chatOSBody.nativeElement, 'none');
        this.toggleDisplay(this.chatOSForm.nativeElement, 'block');
        //this.toggleDisplay(this.chatOSTerminos.nativeElement, 'none');
        //this.setElementVisibility(this.chatOSSend.nativeElement, true);
        //this.setElementVisibility(this.btnAttachmentOS.nativeElement, true);
        this.renderer.setStyle(this.divFabOs.nativeElement, 'height', '0px');
        break;

      case 1:
        this.toggleDisplay(this.chatOSConverse.nativeElement, 'block');
        this.toggleDisplay(this.chatOSBody.nativeElement, 'none');
        this.toggleDisplay(this.chatOSForm.nativeElement, 'none');
        //this.toggleDisplay(this.chatOSTerminos.nativeElement, 'none');
        //this.setElementVisibility(this.chatOSSend.nativeElement, false);
        //this.setElementVisibility(this.btnAttachmentOS.nativeElement, false);
        this.renderer.setStyle(this.divFabOs.nativeElement, 'height', '');
        break;

      case 2:
        this.toggleDisplay(this.chatOSConverse.nativeElement, 'none');
        this.toggleDisplay(this.chatOSBody.nativeElement, 'block');
        this.toggleDisplay(this.chatOSForm.nativeElement, 'none');
        this.toggleDisplay(this.chatOSTerminos.nativeElement, 'none');
        this.setElementVisibility(this.chatOSSend.nativeElement, true);
        this.setElementVisibility(this.btnAttachmentOS.nativeElement, true);
        // Lógica adicional que necesites agregar
        break;

      case 3:
        this.toggleDisplay(this.chatOSConverse.nativeElement, 'none');
        this.toggleDisplay(this.chatOSBody.nativeElement, 'none');
        this.toggleDisplay(this.chatOSForm.nativeElement, 'none');
        this.toggleDisplay(this.chatOSTerminos.nativeElement, 'block');
        this.setElementVisibility(this.chatOSSend.nativeElement, true);
        break;
    }
  }

  toggleDisplay(element: HTMLElement, displayValue: string): void {
    this.renderer.setStyle(element, 'display', displayValue);
  }

  setElementVisibility(element: HTMLElement, hidden: boolean): void {
    this.renderer.setStyle(element, 'visibility', hidden ? 'hidden' : 'visible');
  }
  // Add other methods as needed (e.g., guardarCliente, SendFormOS, updateDocument)
}

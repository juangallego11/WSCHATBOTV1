import { Component, ElementRef, inject, Renderer2, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

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
  isModalVisible: boolean = false;

  constructor(private renderer: Renderer2) { }

  readonly dialog = inject(MatDialog);
  private dialogRef: MatDialogRef<ModalComponent> | null = null;

  closeWindow(): void {
    //this.toggleFabOS();
    window.location.reload();
  }

  /* minWindow(): void {
    if (!this.dialogRef) {
      // Si el modal aún no se ha creado, lo creamos
      this.dialogRef = this.dialog.open(ModalComponent, {
        disableClose: true // Esto evita que el modal se cierre al hacer clic fuera de él
      });
    }

    // Alternamos la visibilidad
    this.isModalVisible = !this.isModalVisible;

    if (this.isModalVisible) {
      this.dialogRef.componentInstance.show();
    } else {
      this.dialogRef.componentInstance.hide();
    }
  } */


  hideChatOS(hide: number): void {
    switch (hide) {
      case 0:
        this.toggleDisplay(this.chatOSConverse.nativeElement, 'none');
        this.toggleDisplay(this.chatOSBody.nativeElement, 'none');
        this.toggleDisplay(this.chatOSForm.nativeElement, 'block');
        this.renderer.setStyle(this.divFabOs.nativeElement, 'height', '0px');
        break;

      case 1:
        this.toggleDisplay(this.chatOSConverse.nativeElement, 'block');
        this.toggleDisplay(this.chatOSBody.nativeElement, 'none');
        this.toggleDisplay(this.chatOSForm.nativeElement, 'none');
        this.renderer.setStyle(this.divFabOs.nativeElement, 'height', '');
        break;

      case 2:
        this.toggleDisplay(this.chatOSConverse.nativeElement, 'none');
        this.toggleDisplay(this.chatOSBody.nativeElement, 'block');
        this.toggleDisplay(this.chatOSForm.nativeElement, 'none');
        this.toggleDisplay(this.chatOSTerminos.nativeElement, 'none');
        // Lógica adicional que necesites agregar
        break;

      case 3:
        this.toggleDisplay(this.chatOSConverse.nativeElement, 'none');
        this.toggleDisplay(this.chatOSBody.nativeElement, 'none');
        this.toggleDisplay(this.chatOSForm.nativeElement, 'none');
        this.toggleDisplay(this.chatOSTerminos.nativeElement, 'block');
        break;
    }
  }

  toggleDisplay(element: HTMLElement, displayValue: string): void {
    this.renderer.setStyle(element, 'display', displayValue);
  }

  setElementVisibility(element: HTMLElement, hidden: boolean): void {
    this.renderer.setStyle(element, 'visibility', hidden ? 'hidden' : 'visible');
  }
}

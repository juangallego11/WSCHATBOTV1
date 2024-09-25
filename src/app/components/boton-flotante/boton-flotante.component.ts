import { Component, ElementRef, inject, Renderer2, ViewChild } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { MensajeFlotanteComponent } from 'src/app/components/mensaje-flotante/mensaje-flotante.component';

@Component({
  selector: 'app-boton-flotante',
  templateUrl: './boton-flotante.component.html',
  styleUrls: ['./boton-flotante.component.css'],
  //standalone: true, // Hacemos el componente standalone
})
export class BotonFlotanteComponent {
  showMessage: boolean = true;
  isActive: boolean = false;
  isVisible: boolean = false;

  @ViewChild(MensajeFlotanteComponent) mensajeFlotante!: MensajeFlotanteComponent;
  @ViewChild('primeOS') primeOS!: ElementRef;

  constructor(private renderer: Renderer2) { }

  ngAfterViewInit() {
    if (this.mensajeFlotante) {
      console.log('MensajeFlotanteComponent cargado correctamente.');
    } else {
      console.error('No se ha podido cargar MensajeFlotanteComponent.');
    }
  }

  //constructor(private mensajeFlotante: MensajeFlotanteComponent){}

  readonly dialog = inject(MatDialog);

  toggleFabOS(): void {
    console.log("entro aca");
    this.isActive = !this.isActive;
    this.isVisible = !this.isVisible;

    // Asegurarse de que el componente mensajeFlotante ha sido referenciado correctamente
    if (this.mensajeFlotante) {
      this.mensajeFlotante.btnCloseWelcomeMessage();  // Llamamos a la función btnCloseWelcomeMessage
    } else {
      console.error('No se ha podido referenciar el componente MensajeFlotanteComponent');
    }
    const dialogRef = this.dialog.open(ModalComponent);


    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

  }
}

import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonButton, IonLabel, IonInput } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NgStyle } from '@angular/common';
import { NgSwitch } from '@angular/common';
import { NgSwitchCase } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonInput, IonLabel, IonButton, IonItem, IonHeader, IonToolbar, IonTitle, IonContent, NgClass, IonicModule,FormsModule, NgStyle, NgSwitch, NgSwitch, NgSwitchCase, CommonModule],
})
export class HomePage {

contador: number = 0;
phoneNumber: any;
number: any;
variable: any;
textColor: any;
colorButton: any;
names: any;

  incrementarContador() {
    this.contador++;

    const names = ["Perro", "Gato", "León", "Tigre", "Oso"];

    const phoneNumber = String;


  const variable: number = Math.floor(Math.random() * 101); // Genera un número aleatorio entre 0 y 100


  const textColor: string = '#2aff2b';


const colorButton: string = 'primary'; // Cambia este valor según necesites


  }
  constructor() {}
}

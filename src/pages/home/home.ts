import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController,NavParams } from 'ionic-angular';
import {CamiloPage} from '../camilo/camilo'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  valor : string = "";
  pagina = CamiloPage;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
   // private navCtr : NavController;

  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Login',
      subTitle: 'Sesión iniciada...',
      buttons: ['OK']
    });
    alert.present();
  }

  showAlertRecuperar() {
    let alert = this.alertCtrl.create({
      title: 'Recuperar Contraseña',
      subTitle: 'Escribe tu correo para recuperar tu contraseña.',
      inputs : [{
        placeholder: 'Correo electrónico'
        },
        {
          placeholder: 'Correo electrónico2'
        }
      ],
      buttons: [
        {
          text: 'Enviar correo',
          handler: data => {
            console.log(data);
            this.showAlertConfirmaRecuperar(data);
          }
        }
      ]
    });
    alert.present();
  }

  showAlertConfirmaRecuperar(data) {
    let alert = this.alertCtrl.create({
      title: 'Recuperar Contraseña',
      subTitle: 'Acabamos de enviarte un mensaje a tu correo: ' + data[0] + ', ' + data[1],
      buttons: ['OK']
    });
    alert.present();
  }


  showConfirm() {
    const confirm = this.alertCtrl.create({
      title: 'Use this lightsaber?',
      message: 'Do you agree to use this lightsaber to do good across the intergalactic galaxy?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }


  nuevaAlert() {
    let alert = this.alertCtrl.create({
      title: 'Login',
      subTitle: this.valor,
      buttons: ['OK']
    });
    alert.present();
    this.navCtrl.push(this.pagina);
  }

}

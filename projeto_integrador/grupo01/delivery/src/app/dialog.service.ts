import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private alertCtl: AlertController) { }

   async showSuccessAlert(){
    const alert = await this.alertCtl.create({
      header: 'Sucesso!',
      message: 'Operação realizada com sucesso.',
      buttons: ['OK']
    });
    await alert.present();
  }


  async showErrorAlert(){
    const alert = await this.alertCtl.create({
      header: 'ERROR!',
      message: 'Erro ao realizar a operação',
      buttons: ['OK']
    });
    await alert.present();
  }


  async showAlert(header: string, message: string){
    const alert = await this.alertCtl.create({
      header: header,
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }



}
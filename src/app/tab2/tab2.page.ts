import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public url: any;

  constructor(public navCtrl: NavController, 
              private sanitizer: DomSanitizer){
    
    this.getSafeUrl("https://www.youtube.com/embed/6k8cpUkKK4c?si=QNZY-x_sWGflUfea");
  
  }

  getSafeUrl(ruta: string) {
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(ruta);    
  }

}

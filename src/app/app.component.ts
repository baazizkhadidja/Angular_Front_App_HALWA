import { Component, ComponentFactoryResolver } from '@angular/core';
import {HalwaService} from './service/halwa.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HalwaService]
})
export class AppComponent {
  title = 'halwa';
  halwa : any[];
  

  constructor(private halwaService:HalwaService){
    halwaService.getHalwa().subscribe(res => {
        console.log(res);
        this.halwa = res;
    }, err => {
        console.log(err);
    })
  }




  }





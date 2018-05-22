import { Component, OnInit,OnChanges,DoCheck } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
 <app-ng-style></app-ng-style>

  <app-css></app-css>

    <p>Hola mundo desde el appcomponent</p>

    <app-clases>
    </app-clases>
  `,
  styles: []
})
export class HomeComponent implements OnInit,OnChanges,DoCheck {

  constructor() { }

  ngOnInit() {
    console.log("ngOnInit");
  }

  ngOnChanges(){
      console.log("OnChanges");
  }

  ngDoCheck(){
      console.log("ngDoCheck");
  }

}

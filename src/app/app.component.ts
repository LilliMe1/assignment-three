import { Component } from '@angular/core';
import { getClosureSafeProperty } from '@angular/core/src/util/property';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment-three';
  content='Save Me';
  display= false;
  countArray=[];
  countArrayFromFive=this.countArray.slice(5);
  count=0;
  displayMethod(){
    this.display = !this.display;
    this.count=this.count +1;
    this.countArray.push(this.count);
    if(this.count>=5){
      this.countArrayFromFive.push(this.count);
      delete this.countArray.pop();
    }
  }
  getColor(){
    return this.count>=5? 'red': 'transparent';
  }
  getDisplay(){
    return this.display ?'block':'none';
  }
}
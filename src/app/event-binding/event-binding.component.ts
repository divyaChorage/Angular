import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {


  result:number=0;
//  by using   templat  ref var
  addition(n1: string, n2: string) {
    // const num1 = parseFloat(n1);
    // const num2 = parseFloat(n2);
    // this.result = num1 + num2;

    // unary  oprator   + 
    //convert string/ any /boolean  data  tytpe  into number
    this.result = +n1 + +n2;  
    
  }

num1:number=0;
num2:number=0;
multResult:number=0;

  multi()
  {
    this.multResult=this.num1*this.num2;

  }


  imgClick()
  {
    console.log("image licked ")
  }



  boxColor: string = 'lightgray';  // Default color of the box
  boxText: string = '';  

  updateColor(event: any) {
    const value = event.target.value;  
    this.boxColor = value;
    this.boxText = value; 
  }
 
}

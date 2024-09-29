import { FormatWidth } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-data-flow',
  templateUrl: './data-flow.component.html',
  styleUrls: ['./data-flow.component.css']
})
export class DataFlowComponent {

  isHidden:boolean=true;
  name:string="divya"

  rating:number=2;
  isDisabled: boolean = false;
  jsonS=
  {
    "color":'red',
  "width":50,
  fontFamily:'arial'  ,
  'font-family':'arial'

  }


  Submission: string = 'alert'; // Example value, could be 'success', 'alert', or 'error'
  statusMessage: string='';

  constructor() {
    this.setStatusMessage();
  }

  setStatusMessage() {
    if (this.Submission === 'success') {
      this.statusMessage = 'Submitted';
    } else if (this.Submission === 'alert') {
      this.statusMessage = 'Something is wrong';
    } else {
      this.statusMessage = 'Error';
    }
  }
  
}

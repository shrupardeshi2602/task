import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

import { ServiceService } from '../service.service';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})


export class FormComponent implements OnInit {

    longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
    from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
    originally bred for hunting.`;
  userService: any;
 
  public data:any;
  constructor(private mySer: ServiceService) { 
  
  }
  ngOnInit(): void {
    this.mySer.getData().subscribe((res:any)=>{
      this.data= res.data;
      console.log(this.data.data);
    })
    
  }
  userDetail(){
    console.log('userDetail');
  }



 



  }
 




 


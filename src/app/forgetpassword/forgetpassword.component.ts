import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UmsService } from '../service/ums.service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent {
 constructor(private forgetp:UmsService){
  
 }

   
 forget=new FormGroup({
   email:new FormControl('',[Validators.required,Validators.email])
 })


forg:any
 forgetGet(){
    this.forgetp.forgetPassGet(this.forget.value.email).subscribe((res)=>this.forg=res
    )
}
}

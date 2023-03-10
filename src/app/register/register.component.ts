import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UmsService } from '../service/ums.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
 constructor(private regis:UmsService){
      
 this.countryget()
}


register=new FormGroup({
  fname:new FormControl('',[Validators.required,Validators.maxLength(12),Validators.minLength(2)]),
  lname:new FormControl('',[Validators.required,Validators.maxLength(12),Validators.minLength(2)]),
  email:new FormControl('',[Validators.required,Validators.email]),
  dob:new FormControl('',[Validators.required]),
  phno:new FormControl('',[Validators.required,Validators.maxLength(10),Validators.minLength(2)]),
  gender:new FormControl('',[Validators.required]),
  cityId:new FormControl('',[Validators.required]),
  stateId:new FormControl('',[Validators.required]),
  countryId:new FormControl('',[Validators.required])
})




checkget(mail:any){
  this.regis.checkmailGett(mail).subscribe((res:any)=>console.log(res))
}

country:any
countryget(){
   this.regis.countryGet().subscribe((res=>this.country=res))
}


regpost(){
  this.regis.RegPost(this.register.value).subscribe(res=>alert(res))
}


state:any
stateget(countryId:any){
  this.regis.stateGet(countryId).subscribe(res=>this.state=res)
}


city:any
cityget(stateId:any){
   this.regis.cityGet(stateId).subscribe(res=>this.city=res)
}


}

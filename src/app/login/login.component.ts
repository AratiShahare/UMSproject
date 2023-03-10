import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { UmsService } from '../service/ums.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private log:UmsService){
  

  }


 
    login=new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    pwd:new FormControl('',[Validators.required])
  }) 

  logiPost(){
     this.log.loginPost(this.login.value).subscribe((res)=>alert(res))
  }

}

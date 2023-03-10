import { Component } from '@angular/core';
import { FormControl, FormGroup,Validators} from '@angular/forms';
import { UmsService } from '../service/ums.service';

@Component({
  selector: 'app-unlock-account',
  templateUrl: './unlock-account.component.html',
  styleUrls: ['./unlock-account.component.css']
})
export class UnlockAccountComponent {
  constructor(private unl:UmsService ){

  }
    passw= false;
  pass(){
    if(this.unlock.value.newPwd != this.unlock.value.confirmPwd){
        this.passw=true;
    }
    else{
       this.passw=false;
    }
  }
 
  //  form
  unlock=new FormGroup({
    email:new FormControl('',[Validators.required]),
    tempPwd:new FormControl('',[Validators.required]),
    newPwd:new FormControl('',[Validators.required]),
    confirmPwd:new FormControl('',[Validators.required])
  })
  

  Unlockpost(){
    this.unl.unlockPost(this.unlock.value).subscribe((res)=>alert(res))
  }
  
}

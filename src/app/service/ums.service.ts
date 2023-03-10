import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UmsService {

  constructor(private http:HttpClient) { }



  forgetPassGet(mail:any){
    return this.http.get(`http://15.206.171.20:9090/forgotPwd/${mail}`,{responseType:'text'})
  }


  loginPost(body:any){
    return this.http.post(`http://15.206.171.20:9090/login`,body,{responseType:'text'})
  }


  unlockPost(body:any){
   return  this.http.post(`http://15.206.171.20:9090/unlock`,body,{responseType:'text'})
  }

  checkmailGett(mail:any){
    return this.http.get(`http://15.206.171.20:9090/emailcheck/${mail}`,{responseType:'text'})
  }

  countryGet(){
    return this.http.get(`http://15.206.171.20:9090/countries`)
  }
 
  stateGet(countryId:any){
    return this.http.get(`http://15.206.171.20:9090/states/${countryId}`)
  }

  cityGet(stateId:any){
    return this.http.get(`http://15.206.171.20:9090/cities/${stateId}`)
  }

  RegPost(body:any){
    return this.http.post(`http://15.206.171.20:9090/saveUser`,body,{responseType:'text'})
  }
  
 
}

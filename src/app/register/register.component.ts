import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RestoService } from '../resto.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
alert:boolean=false;
  constructor(private resto:RestoService) { }
  RegisterForm = new FormGroup({
    Name: new FormControl(''),
    Email: new FormControl(''),
    Password: new FormControl(''),
  })
  ngOnInit(): void {
  }
  CollectUser(){
    // console.log(this.RegisterForm.value)
this.resto.RegisterUser(this.RegisterForm.value).subscribe((result)=>{
  console.log(result);
});
    this.alert=true;
  }
CloseAlert(){
  this.alert=false;
  this.RegisterForm.reset({});
}
}

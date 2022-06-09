import { Component, OnInit } from '@angular/core';
import { RestoService } from '../resto.service';
import { User } from '../user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {



  Time=['daily','weekly', 'monthly'];

  Type=['food Lover','Content Lover'];
  constructor(private resto: RestoService ) { 

  }

  onSubmit(){
 
     
      this.resto.signup(this.userModel).subscribe((result) => {
        console.log(result);
      });
     
   
  }

userModel=new User ('akshita','aks123@gmail.com',5432556434,'','');
  ngOnInit(): void {
  }

  value= 'this ia custom pipe Test';
date =new Date();

nameArr=[
'  Sunil ',
'Puneet ',
'Sukhwinder Chaudhri',
'Tushar Das',
'Raman Misra',
]
}

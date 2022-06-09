import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl ,Validators } from '@angular/forms';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.css']
})
export class AddRestoComponent implements OnInit {

componentName="user"

alert:boolean=false;
  constructor(private Resto: RestoService) { }

  RestoForm = new FormGroup({
    Name: new FormControl('',[Validators.required, Validators.minLength(3),Validators.pattern('^[a-zA-Z ]*$')]),
    Email: new FormControl('',[Validators.required,Validators.email]),
    Address: new FormControl('',[Validators.required]),
  })

  ngOnInit(): void {
   

  }

  CollectResto() {
    // console.log(this.RestoForm.value);

    this.Resto.SaveResto(this.RestoForm.value).subscribe((result:any)=>{
      console.log(result)
      this.alert=true
      this.RestoForm.reset({})
    })
     
  }

  CloseAlert()
  {
    this.alert=false
  }
   get Name(){
    return this.RestoForm.get('Name');
  }
   get Email(){
    return this.RestoForm.get('Email');
  }
   get Address(){
    return this.RestoForm.get('Address');
  }
  numb(){
    return 100;
  }
  add(a:any,b:any){
    return a+b ;
  }
}

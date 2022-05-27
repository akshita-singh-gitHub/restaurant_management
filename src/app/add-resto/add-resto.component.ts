import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { RestoService } from '../resto.service';
// import { observable } from 'rxjs';
@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.css']
})
export class AddRestoComponent implements OnInit {

  validationMessages={
    'Email':{
      'emaildomain': 'email domain invalid'
    }
  }
alert:boolean=false;
  constructor(private Resto: RestoService) { }

  RestoForm = new FormGroup({
    Name: new FormControl(''),
    Email: new FormControl('',emailDomain),
    Address: new FormControl(''),
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
}
function emailDomain(control:AbstractControl): {[key:string]:any}|null{
  const Email: string=control.value;
  const domain=Email.substring(Email.lastIndexOf('@')+1);
  if(domain.toLowerCase()=== 'gmail.com'){
    return null;
  }
  else {
    return {'emailDomain':true};
  }

}
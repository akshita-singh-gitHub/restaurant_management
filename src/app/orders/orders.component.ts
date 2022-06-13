import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl ,Validators } from '@angular/forms';
import { RestoService } from '../resto.service';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  alert:boolean=false;
  constructor(private Resto: RestoService) { }

  OrderForm = new FormGroup({
    Name: new FormControl('',[Validators.required, Validators.minLength(3),Validators.pattern('^[a-zA-Z ]*$')]),
    Food: new FormControl(''),
    Email: new FormControl('',[Validators.required,Validators.email]),
    Address: new FormControl('',[Validators.required]),
  })


  ngOnInit(): void {
  }

  CollectOrder() {
    // console.log(this.OrderForm.value);

    this.Resto.SaveOrder(this.OrderForm.value).subscribe((result:any)=>{
      console.log(result)
      this.alert=true
      this.OrderForm.reset({})
    })
     
  }

  CloseAlert()
  {
    this.alert=false
  }
   get Name(){
    return this.OrderForm.get('Name');
  }
   get Email(){
    return this.OrderForm.get('Email');
  }
   get Address(){
    return this.OrderForm.get('Address');
  }
  
}


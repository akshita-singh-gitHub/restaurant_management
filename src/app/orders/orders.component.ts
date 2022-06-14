import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl ,Validators } from '@angular/forms';
import { FoodService } from '../service/food/food.service';
import { RestoService } from '../resto.service';
import { FoodDetail } from '../shared/models/foodDetail';
// import { StarRatingComponent } from 'ng-starrating';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  FoodImages:FoodDetail[]=[];
  alert:boolean=false;
  constructor(private FoodServ: FoodService , private resto: RestoService) { }

  OrderForm = new FormGroup({
    Name: new FormControl('',[Validators.required, Validators.minLength(3),Validators.pattern('^[a-zA-Z ]*$')]),
    Food: new FormControl(''),
    Email: new FormControl('',[Validators.required,Validators.email]),
    Address: new FormControl('',[Validators.required]),
  })


  ngOnInit(): void {
    this.FoodImages=this.FoodServ.getImages();
  }

  CollectOrder() {
    // console.log(this.OrderForm.value);

    this.resto.SaveOrder(this.OrderForm.value).subscribe((result:any)=>{
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


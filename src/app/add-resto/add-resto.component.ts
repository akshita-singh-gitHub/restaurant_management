import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RestoService } from '../resto.service';
// import { observable } from 'rxjs';
@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.css']
})
export class AddRestoComponent implements OnInit {

  constructor(private Resto: RestoService) { }

  RestoForm = new FormGroup({
    Name: new FormControl(''),
    Email: new FormControl(''),
    Address: new FormControl(''),
  })

  ngOnInit(): void {
   

  }

  CollectResto() {
    // console.log(this.RestoForm.value);

    this.Resto.SaveResto(this.RestoForm.value).subscribe((result:any)=>console.log(result))
  }

}

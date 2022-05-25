import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
  styleUrls: ['./update-resto.component.css']
})
export class UpdateRestoComponent implements OnInit {
alert: boolean=false;
  constructor(private router:ActivatedRoute,private resto: RestoService) { }
  EditForm = new FormGroup({
    Name: new FormControl(''),
    Email: new FormControl(''),
    Address: new FormControl('')
  })
  ngOnInit(): void {

// console.log(this.router.snapshot.params['id']);
this.resto.DetailToEdit(this.router.snapshot.params['id']).subscribe((result:any)=>{
  // console.log(result);
  this.EditForm = new FormGroup({
    Name: new FormControl(''),
    Email: new FormControl(''),
    Address: new FormControl(''),
  })

})
  }
  CollectData(){
    // console.log(this.EditForm.value);
    this.resto.UpdateResto(this.router.snapshot.params['id'],this.EditForm.value).subscribe((result:any)=>{
console.log(result);
    })
    this.alert=true;

  }
  CloseAlert(){
    this.alert=false;
    this.EditForm.reset({});
  }

  }



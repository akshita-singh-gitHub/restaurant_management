import { Component, OnInit } from '@angular/core';
import { RestoService } from '../resto.service';
// import { UpdateRestoComponent } from '../update-resto/update-resto.component';
@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.css']
})

export class ListRestoComponent implements OnInit {
  collection:any = [];
  constructor(private resto: RestoService) { }


  ngOnInit(): void {
    this.resto.getList().subscribe((result) => {
      // console.log(result);
      this.collection = result;
    })
  
  }
  Delete(item:any){
    this.collection.splice(item-1,1)
    this.resto.DeleteResto(item).subscribe((result)=>{
      console.log('result deleted');
    })
          

  }
}
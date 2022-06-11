import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
// import { SignupComponent } from './signup/signup.component';

@Injectable({
  providedIn: 'root'
})



// app.use(function(req:any, res:any, next:any)
// {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, x-Requested-With,Content-Type,Accept");
//     next();

// });

export class RestoService {
  url = 'https://restaurant-auth123-default-rtdb.asia-southeast1.firebasedatabase.app/restaurant';
  rootURL = 'https://restaurant-auth123-default-rtdb.asia-southeast1.firebasedatabase.app/';

  // url = 'http://localhost:3000/restaurant';
  // rootURL = 'http://localhost:3000/';


  // url = 'https://angulra-auth12-default-rtdb.firebaseio.com/restaurant';
  // rootURL = 'https://angulra-auth12-default-rtdb.firebaseio.com/';


  

  constructor(private http: HttpClient) { }

  getList() {
    return this.http.get(this.url);

  }
  SaveResto(data:any){
    // console.log(data);
return this.http.post(this.url,data);
  }
  DeleteResto(id:any)
  {
    return this.http.delete(`${this.url}/${id}`);
  }

  RegisterUser(UserDetails:any){
   return this.http.post(this.rootURL+"user",UserDetails);
  }
  DetailToEdit(id:any){
   return this.http.get(`${this.url}/${id}`)
  }
  UpdateResto(id:any,data:any){
    return this.http.put(`${this.url}/${id}`,data)

  }
  signup(News_user:any){
    return this.http.post(this.rootURL+"News_user",News_user);

  }

}

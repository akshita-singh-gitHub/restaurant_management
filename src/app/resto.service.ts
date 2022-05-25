import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RestoService {
  url = 'http://localhost:3000/restaurant';
  rootURL = 'http://localhost:3000/';

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

}

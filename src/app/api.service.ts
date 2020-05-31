import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = environment.api;
  constructor(
    private http:HttpClient
  ) { }

  loadListUser(page){
    return new Promise<any>(response =>{
      this.http.get(this.apiUrl + 'list-users/' + page).subscribe(
        (data)=>{
          response(data);
        },
        (error)=>{
          response({
            error:true,
            mensaje:"Error al consumir el api"
          });
        }
      );  
    });
    
  }
  loadUser(id){
    return new Promise<any>(response =>{
      this.http.get(this.apiUrl + 'user/' + id).subscribe(
        (data)=>{
          response(data);
        },
        (error)=>{
          response({
            error:true,
            mensaje:"Error al consumir el api"
          });
        }
      );  
    });
  }
}

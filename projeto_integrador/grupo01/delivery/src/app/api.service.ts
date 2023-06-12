import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseurl = environment.baseurl;
  constructor(private http: HttpClient) { }

  salvar(item: any, endpoint: string):Observable<any>{
    if(item.id){
      return this.http.put( `${this.baseurl}/${endpoint}/${item.id}`, item);
    }else{
      return this.http.post( `${this.baseurl}/${endpoint}`, item);
    }
  }

  obter(endpoint: string):Observable<any>{
    return this.http.get(`${this.baseurl}/${endpoint}`);
  }
  excluir(endpoint:string ):Observable<any>{
    return this.http.delete(`${this.baseurl}/${endpoint}`);
  }

  login(login: string){
    return this.http.get( `${this.baseurl}/usuarios?login=${login}`)
  }


}

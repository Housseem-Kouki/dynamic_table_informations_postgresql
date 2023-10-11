import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigTable } from '../models/configtable';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigTableServiceService {
  constructor(private http:HttpClient) { }

  getConfigTable(tablename:string):Observable<ConfigTable[]>{
    //return this.list
    return this.http.get<ConfigTable[]>("http://192.168.137.1:8001/getTableColInfos/"+tablename);
  }

  getAllDynamique(tablename:string):Observable<any>{
    //return this.list
    return this.http.get<ConfigTable[]>("http://192.168.137.1:8001/getAllDynamique/"+tablename);
  }
}

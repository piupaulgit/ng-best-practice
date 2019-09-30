import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CommonService {
  BASE_PATH: string = "http://localhost:3000";

  constructor(private http: HttpClient) {}

  getFilters(moduleName): Observable<any> {
    return this.http.get<any>(`${this.BASE_PATH}/${moduleName}`);
  }
  getTableData(moduleName): Observable<any> {
    return this.http.get<any>(`${this.BASE_PATH}/${moduleName}`);
  }
  sidebarMenuList(): Observable<any> {
    return this.http.get<any>(this.BASE_PATH + "moduleName");
  }
}

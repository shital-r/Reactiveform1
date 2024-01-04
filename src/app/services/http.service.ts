import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
baseurl:string='http://localhost:3000/'
// counter:number=0;
subjectname=new Subject<any>();

  constructor(private http:HttpClient) { }
  httpHeader:HttpHeaders =new HttpHeaders()
                          .set('content-type',"application/json");


      counter= new Subject<any>();

      incrementcounter(num:number){
        this.counter.next(num);
      }

      update(str:string){
        this.subjectname.next(str);
      }
  getDatafromServer(endPoint:string){
    const url=this.baseurl +endPoint;
    return this.http.get(url,{headers:this.httpHeader});

  }


  saveDatatoServer(endPoint:string,body:any){
    const url=this.baseurl+endPoint;
    return this.http.post(url,body,{headers:this.httpHeader});
}

  updataDatatoServer(endPoint:string,body:any){
  const url=this.baseurl +endPoint;
  return this.http.put(url,body,{headers:this.httpHeader});

}


deletDatafromServer(endPoint:string){
  const url=this.baseurl +endPoint;

  return this.http.delete(url,{headers:this.httpHeader} );
}

// getLoginDatafromServer(endPoint:string){
//   // const url=this.baseurl+endPoint;
//   return this.http.get("http://localhost:3000/logindata");

// }

}

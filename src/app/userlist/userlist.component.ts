import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  userlist: user[] = [];
  cartcounter:any=0;
  username:string='';
  constructor(private http: HttpService,private route:Router) {
    this.http.subjectname.subscribe(el=>{
      this.username=el;
    })

}


  

  ngOnInit(): void {
    
    this.getUserlist();
  }
  // update(name:any){
    // this.username=name.value;
    // this.http.subjectname.next(name.value);
    // this.http.update(this.username);
    // console.log(this.username);
    updatename(name:any){
      this.http.subjectname.next(name.value);
    // }
  }

  getUserlist() {
    this.http.getDatafromServer('users').subscribe((response: any) => {
      if (response && response.length > 0) {
        this.userlist = response;
        // this.userlist=this.userlist.filter((el:any)=>el.gender=="male");
      }
    },
      error => {

      })
  }
  incrementcount(){

++ this.cartcounter;
this.http.incrementcounter(this.cartcounter);
console.log(this.cartcounter);

  }

  delet(index:number){
// this.userlist.splice(index,1);
const id=this.userlist[index].id;
const endPoint="users/"+id;
this.http.deletDatafromServer(endPoint).subscribe((el:any)=>{
  this.userlist.splice(index,1);

console.log(el)
})


  }


}
export interface user {
  firstName:string;
  lastName:string;
  mobileNo:number;
  email:string;
  Company:string;
  DOB:number;
  id:number;
}

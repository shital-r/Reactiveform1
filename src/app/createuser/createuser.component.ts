import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../services/http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent {
  userForm!:FormGroup;
  selectedUserid:string|null =null;

  constructor(private fb:FormBuilder,private http:HttpService , private router:Router,private route:ActivatedRoute){
  }
  
  
  ngOnInit(): void {
    this.createform();
    this.selectedUserid=this.route.snapshot.paramMap.get('id');
    if(this.selectedUserid){
      this.getUserDetails();
    }
    
  }
  createform(){
    this.userForm=this.fb.group({
    //   "username":['',[Validators.required]],
    //   "mobileno":['',[Validators.required]],
    //   "email":['',[Validators.required]],
    //   "gender":['',[Validators.required]]

    // })
    "firstName":new FormControl('',[Validators.required,Validators.minLength(2),Validators.maxLength(10),Validators.pattern("[a-zA-Z]{2,10}")]),
    "lastName":new FormControl('',[Validators.minLength(2),Validators.maxLength(10)]),
    "mobileNo":new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
    "gender":new FormControl('',[]),
    "email":new FormControl('',[]),
    "Company":new FormControl('',[]),
    "DOB":new FormControl('',[]),
    "Password":new FormControl('',[]),
    "confirmPassword":new FormControl('',[]),

    
   })

  }

  getUserDetails(){
    const endPoint= "users/"+this.selectedUserid;
    this.http.getDatafromServer(endPoint).subscribe((response:any)=>{
      if(response){
        this.userForm.patchValue(response);
        console.log(response);
      }
    })
  }
    Submit(){
      // const value=this.userform.value;
      if(this.selectedUserid==null){
        this.http.saveDatatoServer('users',this.userForm.value).subscribe((result:any)=>{
          console.log(result)})
  
      }else{
        const endPoint='users/'+this.selectedUserid;
        this.http.updataDatatoServer(endPoint,this.userForm.value).subscribe((resp:any)=>{
          console.log("success");
        })
      }
      console.log(this.userForm.value);

      // this.http.saveDatatoServer('users',this.userForm.value).subscribe((result:any)=>{
      //   console.log(result) })
    }

    navigate(){
      this.router.navigate(['/userlist'])
    }
    reset(){
      this.userForm.reset();
    }
    
    
  }


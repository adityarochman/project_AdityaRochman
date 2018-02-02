import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers } from "@angular/http";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  file: File;
  imagePath = "";
  vendorList = [];

  constructor(private http : Http, private route : Router) { }

  ngOnInit() {
  }

  // fileChange($event) {
  //   this.file = $event.target.files[0];
  //   console.log(this.file);
  // }

  // loadVendorList() {

  //   let token = sessionStorage.getItem("token");
  //   let header = new Headers({ "Authorization": "Bearer " + token });
  //   let options = new RequestOptions({ headers: header })

  //   this.http.get("http://localhost:3002/api/vendor", options)
  //     .subscribe(
  //     result => {
  //       this.vendorList = result.json();
  //     },
  //     error => {

  //     }
  //     );
  // }

  // upload() {

  //   let formData = new FormData();
  //   formData.append("image", this.file);
  //   formData.append("name", "Employee 1");
  //   formData.append("address", "Address 1");

  //   let header = new Headers();
  //   let options = new RequestOptions({ headers: header });

  //   this.http.post("http://localhost:3000/upload", formData, options)
  //     .subscribe(
  //     result => {
  //       // console.log(result);
  //       console.log(result.json());
  //       this.imagePath = result.json().path;
  //     },
  //     error => {
  //       console.log(error);
  //     },
  //   );
  // }

  Register(f: NgForm) {
    
    if(f.value.username != null && f.value.username != "" && f.value.password != null && f.value.password != "" && f.value.email != null && f.value.email != "") {

      let obj = {
        name: f.value.name,
        namevendor: f.value.namevendor,
        address: f.value.address,
        category: f.value.category,
        email: f.value.email,
        phoneNumber: f.value.phoneNumber,
        since: f.value.since,
        username: f.value.username,
        password:f.value.password
      }

      let header = new Headers({ "Content-Type": "application/json" });
      let options = new RequestOptions({ headers: header });

      this.http.post("http://localhost:3002/api/uservendor/register", obj, options)
        .subscribe(
        result => {
          this.route.navigate(["/login"]);
        },
        error => {
          console.log("Please Try Again")
          alert("Please Try Again")
        }
        )
    }else{
      console.log("Please input all fields")
      alert("Please input all fields")
    }

  }

  // SaveVendorData(f: NgForm) {
  //   if (f.value.name != "" && f.value.name != null && this.file != null) {


  //     let formData = new FormData();
  //     formData.append("name", f.value.name);
  //     formData.append("namevendor", f.value.namevendor);
  //     formData.append("address", f.value.address);
  //     formData.append("email", f.value.email);
  //     formData.append("category", f.value.category);
  //     formData.append("phoneNumber", f.value.phoneNumber);
  //     formData.append("since", f.value.since);
  //     formData.append("description", f.value.description);
  //     formData.append("profile", this.file);

  //     let header = new Headers();
  //     let options = new RequestOptions({ headers: header });

  //     this.http.post("http://localhost:3002/api/uservendor/register", formData, options)
  //       .subscribe(
  //       result => {
  //         console.log(result.json());
  //         this.loadVendorList();
  //         f.reset();
  //       },
  //       error => {
  //         console.log(error);
  //       },
  //     );



  //   }
  //   else {
  //     console.log("error")
  //   }
  // }
}

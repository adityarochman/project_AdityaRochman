import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from "@angular/forms";
import { Http, RequestOptions, Headers } from "@angular/http";

@Component({
  selector: 'app-detailvendor',
  templateUrl: './detailvendor.component.html',
  styleUrls: ['./detailvendor.component.css']
})
export class DetailvendorComponent implements OnInit {

  file;
  vendor = {};

  constructor(private httpClient : HttpClient, private http : Http, private router : Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getVendorDetail(this.route.snapshot.params['id']);
  }

  getVendorDetail(id) {

    let header = new Headers({ "Content-Type": "application/json" });
    let options = new RequestOptions({ headers: header })

    this.http.get('http://localhost:3002/api/uservendor/detail/'+id)
    .subscribe(
      data => {
      this.vendor = data;
    });
  }

  Update(f: NgForm) {
    if (f.value.name != "" && f.value.name != null && this.file != null) {


      let formData = new FormData();
      formData.append("name", f.value.name);
      formData.append("namevendor", f.value.namevendor);
      formData.append("address", f.value.address);
      formData.append("email", f.value.email);
      formData.append("category", f.value.category);
      formData.append("phoneNumber", f.value.phoneNumber);
      formData.append("since", f.value.since);
      formData.append("description", f.value.description);
      formData.append("profile", this.file);

      let header = new Headers();
      let options = new RequestOptions({ headers: header });

      this.http.put("http://localhost:3002/api/vendor/", formData, options)
        .subscribe(
        result => {
          console.log(result.json());
          // this.loadVendorList();
          // f.reset();
        },
        error => {
          console.log(error);
        },
      );



    }
    else {
      console.log("error")
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from "@angular/forms";
import { Http, RequestOptions, Headers } from "@angular/http";
import { FormsModule } from "@angular/forms"

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  vendor = {};

  constructor (private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.getVendorDetail(this.route.snapshot.params['id']);
  }

  getVendorDetail(id) {

    let header = new Headers({ "Content-Type": "application/json" });
    let options = new RequestOptions({ headers: header })

    this.http.get('http://localhost:3002/api/vendor/detail/'+id)
    .subscribe(
      data => {
      this.vendor = data;
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers } from "@angular/http";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  vendorList = [];

  constructor(private http : Http, private route : Router) { }

  ngOnInit() {
    this.loadVendorlist()
  }

  loadVendorlist() {
    let header = new Headers({ "Content-Type": "application/json" });
    let options = new RequestOptions({ headers: header })

    this.http.get("http://localhost:3002/api/vendor", options)
    .subscribe(
      result => {
        this.vendorList = result.json();
      },
      error => {

      }
    );
  }
}

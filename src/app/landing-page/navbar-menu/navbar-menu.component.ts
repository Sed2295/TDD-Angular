import { Component, OnInit } from '@angular/core';
//Para que funcione jquery
declare var $:any;

@Component({
  selector: 'app-navbar-menu',
  templateUrl: './navbar-menu.component.html',
  styleUrls: ['./navbar-menu.component.css']
})
export class NavbarMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(".dropdown-trigger").dropdown();
    $('.sidenav').sidenav();
  }

}

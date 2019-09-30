import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CommonService } from '../../services/common.service';

@Component({
  selector: "app-sidenav",
  templateUrl: "./sidenav.component.html",
  styleUrls: ["./sidenav.component.scss"]
})
export class SidenavComponent implements OnInit {
  menus: [];
  constructor(private router: Router, private service: CommonService) {}

  ngOnInit() {
    this.service.sidebarMenuList().subscribe(data => this.menus = data);
  }
}

import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../services/title.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  headerData;

  constructor(private titleService: TitleService) { }

  ngOnInit() {
    // init page title;
    this.titleService.init();

    // dynamic title and icon in header
    this.titleService.headerData.subscribe(data => this.headerData = data); 
  }

}

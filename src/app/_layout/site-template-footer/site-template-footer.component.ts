import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-site-template-footer',
  templateUrl: './site-template-footer.component.html',
  styleUrls: ['./site-template-footer.component.scss']
})
export class SiteTemplateFooterComponent implements OnInit {
  todayYear: Date = new Date();
  constructor() { }

  ngOnInit() {

  }

}

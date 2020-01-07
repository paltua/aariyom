import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-template-footer',
  templateUrl: './admin-template-footer.component.html',
  styleUrls: ['./admin-template-footer.component.scss']
})
export class AdminTemplateFooterComponent implements OnInit {
  todayYear: Date = new Date();
  constructor() { }

  ngOnInit() {
  }

}

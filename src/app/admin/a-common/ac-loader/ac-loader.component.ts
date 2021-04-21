import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ac-loader',
  templateUrl: './ac-loader.component.html',
  styleUrls: ['./ac-loader.component.scss']
})
export class AcLoaderComponent implements OnInit {
  msg: any;
  showMsg: any;
  @Input() changeMsg: any = '';
  @Input() z_index: number = 99999999;
  constructor() {
    this.msg = "Please wait as system started to process your command.";
  }

  ngOnInit() {
    if (this.changeMsg && this.changeMsg !== "") {
      this.showMsg = this.changeMsg;
    } else {
      this.showMsg = this.msg;
    }
  }
}

import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-aju-reply',
  templateUrl: './aju-reply.component.html',
  styleUrls: ['./aju-reply.component.scss']
})
export class AjuReplyComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}


import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonService } from 'src/app/_service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  loader: Boolean = true;
  main_text: any;
  @Output() bannerLoader = new EventEmitter<Boolean>();
  constructor(public commonSer: CommonService,) { }

  ngOnInit() {
    this.commonSer.getSettings('home').subscribe(retData => {
      let data: any = retData.data;
      this.main_text = data.main_text;
      this.loader = false;
      this.bannerLoader.emit(false);
    })
  }

}

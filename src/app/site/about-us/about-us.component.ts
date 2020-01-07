import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/_service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  loader: Boolean = true;
  who_we_are: any;
  our_mission: any;
  image: any;
  constructor(public commonSer: CommonService) { }

  ngOnInit() {
    this.commonSer.getSettings('about_us').subscribe(retData => {
      let data: any = retData.data;
      this.who_we_are = data.who_we_are;
      this.our_mission = data.our_mission;
      this.image = data.image_path;
      this.loader = false;
    })
  }



}

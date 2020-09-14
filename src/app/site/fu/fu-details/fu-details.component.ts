import { Component, OnInit } from '@angular/core';
import { SiteService } from 'src/app/_service/site.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-fu-details',
  templateUrl: './fu-details.component.html',
  styleUrls: ['./fu-details.component.scss']
})
export class FuDetailsComponent implements OnInit {
  data: any;
  imageList: any;
  details: Observable<any>;
  dataId: any;
  masterDetails: any;
  loader: Boolean = true;
  fu_about: string = '';
  fu_desc: string = '';
  fu_objectives: string = '';
  fu_title: string = '';
  fu_managed_by: string = '';
  fu_operating_location: string = '';
  imagePath: string = '';
  imagePathThumb: string = '';
  constructor(
    private siteSer: SiteService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(routeParams => {
      this.dataId = routeParams.fu_id;
      this.siteSer.getSingleFunctionalUnitDetails(this.dataId).subscribe(retData => {
        this.loader = false;
        this.data = retData.data;
        this.masterDetails = this.data.details[0];
        this.fu_title = this.masterDetails.fu_title;
        this.fu_managed_by = this.masterDetails.fu_managed_by;
        this.fu_operating_location = this.masterDetails.fu_operating_location;
        this.fu_about = this.masterDetails.fu_about;
        this.fu_desc = this.masterDetails.fu_desc;
        this.fu_objectives = this.masterDetails.fu_objectives;
        this.imageList = this.data.details;
        // this.imagePath = this.masterDetails.image_path;
        // this.imagePathThumb = this.masterDetails.image_path_thumb;
        // console.log(this.data);
      })
    });
  }

}

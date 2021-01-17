import { Component, OnInit } from '@angular/core';
import { SiteService } from 'src/app/_service/site.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-programme-details',
  templateUrl: './programme-details.component.html',
  styleUrls: ['./programme-details.component.scss']
})
export class ProgrammeDetailsComponent implements OnInit {
  data: any;
  imageList: any;
  details: Observable<any>;
  dataId: any;
  masterDetails: any;
  loader: Boolean = true;
  program_about: string = '';
  program_desc: string = '';
  program_objectives: string = '';
  program_title: string = '';
  org_by_custom_name: string = '';
  fu_details: any;
  constructor(
    private siteSer: SiteService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(routeParams => {
      this.dataId = routeParams.programme_id;
      this.siteSer.getSingleProgrammeDetails(this.dataId).subscribe(retData => {
        this.loader = false;
        this.data = retData.data;
        this.masterDetails = this.data.details[0];
        this.program_title = this.masterDetails.program_title;
        this.program_about = this.masterDetails.program_about;
        this.program_desc = this.masterDetails.program_desc;
        this.program_objectives = this.masterDetails.program_objectives;
        this.fu_details = this.data.details;
        this.org_by_custom_name = this.masterDetails.org_by_custom_name;
        this.imageList = this.data.images;
      })
    });
  }

}

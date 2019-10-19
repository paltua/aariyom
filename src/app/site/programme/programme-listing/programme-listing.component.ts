import { Component, OnInit } from '@angular/core';
import { SiteService } from 'src/app/_service/site.service';

@Component({
  selector: 'app-programme-listing',
  templateUrl: './programme-listing.component.html',
  styleUrls: ['./programme-listing.component.scss']
})
export class ProgrammeListingComponent implements OnInit {
  list: any;
  constructor(
    private siteSer: SiteService
  ) { }

  ngOnInit() {
    this.siteSer.getAllPrograms().subscribe(retDate => {
      this.list = retDate.data;
    });
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { SiteService } from 'src/app/_service/site.service';

@Component({
	selector: 'app-event-by-program',
	templateUrl: './event-by-program.component.html',
	styleUrls: ['./event-by-program.component.scss']
})
export class EventByProgramComponent implements OnInit {
	@Input() dataId: any;
	events: any = [];
	constructor(private siteSer: SiteService) { }

	ngOnInit() {
		this.siteSer.getEventByProgramme(this.dataId).subscribe(retData => {
			// console.log(retData);
			if (retData.status === 'success') {
				let datas: any = retData.data;
				this.events = datas.list;
			}
		})
	}

}

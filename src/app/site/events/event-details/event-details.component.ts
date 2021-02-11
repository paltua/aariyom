import { Component, OnInit, SimpleChanges } from '@angular/core';
import { SiteService } from 'src/app/_service/site.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
declare let $: any;

class Details {
	address: any = '';
	city_name: any = '';
	r_name: any = '';
	c_name: any = '';
	pin: any = '';
	event_start_date_time: any = '';
	event_end_date_time: any = '';
	event_long_desc: any = '';
	event_objectives: any = '';
	event_title: any = '';
	event_about: any = '';
	program_title: any = '';
	image_path: any = '';
}
@Component({
	selector: 'app-event-details',
	templateUrl: './event-details.component.html',
	styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {
	data: any;
	imageList;
	details: Observable<Details>;
	dataId: any;
	address: any = '';
	city_name: any = '';
	r_name: any = '';
	c_name: any = '';
	pin: any = '';
	event_start_date_time: any = '';
	event_end_date_time: any = '';
	event_long_desc: any = '';
	event_objectives: any = '';
	event_title: any = '';
	event_about: any = '';
	program_title: any = '';
	event_youtube_url: any = '';
	image_path: any = '';
	loader: Boolean = true;

	urlSafe: SafeResourceUrl;

	constructor(
		private siteSer: SiteService,
		private route: ActivatedRoute,
		public sanitizer: DomSanitizer
	) {

	}


	ngOnInit() {
		this.route.params.subscribe(routeParams => {
			this.dataId = routeParams.event_id;
			this.siteSer.getSingleEvent(this.dataId).subscribe(retData => {
				this.data = retData.data;
				console.log(this.data);
				if (this.data.details.length > 0) {
					this.imageList = this.data.images;
					this.setVariableValue();
				}
			})
		});
		setTimeout(() => {
			this.loader = false;
			this.setCarousel();
		}, 2000);

	}

	/**
	 * setVariableValue
	 */
	public setVariableValue() {
		this.address = this.data.details[0].address;
		this.city_name = this.data.details[0].city_name;
		this.r_name = this.data.details[0].r_name;
		this.c_name = this.data.details[0].c_name;
		this.pin = this.data.details[0].pin;
		this.event_start_date_time = this.data.details[0].event_start_date_time;
		this.event_end_date_time = this.data.details[0].event_end_date_time;
		this.event_long_desc = this.data.details[0].event_long_desc;
		this.event_objectives = this.data.details[0].event_objectives;
		this.event_title = this.data.details[0].event_title;
		this.event_about = this.data.details[0].event_about;
		this.program_title = this.data.details[0].program_title;
		this.image_path = this.data.details[0].image_path;
		this.event_youtube_url = this.data.details[0].event_youtube_url;
		if (this.event_youtube_url != '') {
			this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.event_youtube_url);
		}
	}

	/**
	   * setCarousel
	   */
	public setCarousel() {
		// $('.owl-carousel').owlCarousel({
		// 	items: this.imageList.length,
		// 	margin: 10,
		// 	loop: true,
		// 	autoplay: true,
		// 	nav: true,
		// 	dots: true,
		// 	responsive: {
		// 		0: {
		// 			items: 2
		// 		},
		// 		600: {
		// 			items: 3
		// 		},
		// 		1000: {
		// 			items: 4
		// 		}
		// 	}
		// })

	}

	/**
	 * changeImage
	 */
	public changeImage(path = '') {
		this.image_path = path;
	}

	/**
   * checkCompleted
   */
	public checkCompleted(event_end_date_time) {
		if (event_end_date_time) {
			let today = new Date();
			let eventData = new Date(event_end_date_time);
			if (eventData < today) {
				return true;
			} else {
				return false;
			}
		} else {
			return false;
		}
	}

}

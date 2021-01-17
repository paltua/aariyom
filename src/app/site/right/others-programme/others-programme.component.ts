import { Component, OnInit, Input } from '@angular/core';
import { SiteService } from 'src/app/_service/site.service';
import 'lazysizes';
declare let $: any;
@Component({
	selector: 'app-others-programme',
	templateUrl: './others-programme.component.html',
	styleUrls: ['./others-programme.component.scss']
})
export class OthersProgrammeComponent implements OnInit {
	@Input() dataId: any;
	list: any;
	listCount: Number = 4;
	loader: Boolean = true;
	constructor(
		public siteSer: SiteService
	) { }

	ngOnInit() {
		this.siteSer.getOthersProgramme(this.dataId).subscribe(resData => {
			this.list = resData.data;
			this.listCount = this.list.length + 1;
			setTimeout(() => {
				this.loader = false;
				this.setCarousel();
			}, 1500);
		})
	}

	/**
	 * setCarousel
	 */
	public setCarousel() {
		// console.log(this.listCount);
		$('.owl-carousel').owlCarousel({
			items: this.listCount,
			margin: 10,
			loop: true,
			autoplay: true,
			nav: true,
			dots: true,
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 2
				},
				1000: {
					items: 4
				}
			}
		})
	}

	/**
	 * truncate
	 */
	public truncate(str = '', counter = 0) {
		if (str != '') {
			return this.siteSer.truncateStr(str, counter);
		} else {
			return '';
		}
	}

}

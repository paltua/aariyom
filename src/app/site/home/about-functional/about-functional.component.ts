import { Component, OnInit, AfterViewInit } from '@angular/core';
import { SiteService } from 'src/app/_service/site.service';
declare let $: any;
@Component({
	selector: 'app-about-functional',
	templateUrl: './about-functional.component.html',
	styleUrls: ['./about-functional.component.scss']
})
export class AboutFunctionalComponent implements OnInit, AfterViewInit {
	list: any;
	listCount: Number = 0;
	constructor(
		public siteSer: SiteService
	) { }

	ngOnInit() {
		this.list = [];
		this.getData();
	}

	/**
	 * setCarousel
	 */
	public setCarousel() {
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
	 * getData
	 */
	public getData() {
		this.siteSer.getFunctionalUnitHome().subscribe(retData => {
			this.list = retData.data;
			this.listCount = this.list.length + 1;
			// this.setCarousel();
		})
	}

	/**
	 * truncate
	 */
	public truncate(str = '', counter = 0) {
		return this.siteSer.truncateStr(str, counter);
	}

	ngAfterViewInit() {
		setTimeout(() => {
			this.setCarousel();
		}, 1000);
	}

}

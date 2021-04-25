import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { EventService } from './../../../_service/event.service';
import { FormBuilder } from '@angular/forms';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
	selector: 'app-image',
	templateUrl: './image.component.html',
	styleUrls: ['./image.component.scss'],
	animations: [routerTransition()]
})
export class ImageComponent implements OnInit {
	pageTitle: string;
	status: any;
	msg: any;
	eventId: any;
	list: any;
	listCount: number;
	fileData: File = null;
	previewUrl: any = null;
	fileUploadProgress: string = null;
	uploadedFilePath: string = null;
	isDefaultForm: any;
	loader: Boolean;
	constructor(
		private eventSer: EventService,
		private router: Router,
		private route: ActivatedRoute,
		private fb: FormBuilder,
	) {
		this.pageTitle = 'Event';
		this.status = '';
		this.msg = '';
		this.list = [];
		this.listCount = 1;
		this.eventId = (this.route.snapshot.paramMap.get('event_id') ? this.route.snapshot.paramMap.get('event_id') : 0);
		this.isDefaultForm = this.fb.group({
			is_default: [''],
		});
	}

	ngOnInit() {
		this.eventSer.image_list(this.eventId).subscribe(retData => {
			this.listCount = retData.data.length;
			this.list = retData.data;
		});
	}

	fileProgress(fileInput: any) {
		this.fileData = <File>fileInput.target.files[0];
		this.preview();
	}

	preview() {
		// Show preview 
		var mimeType = this.fileData.type;
		if (mimeType.match(/image\/*/) == null) {
			return;
		}

		var reader = new FileReader();
		reader.readAsDataURL(this.fileData);
		reader.onload = (_event) => {
			this.previewUrl = reader.result;
		}
	}

	onSubmit() {
		this.loader = true;
		const formData = new FormData();
		formData.append('event_image', this.fileData);
		formData.append('event_id', this.eventId);
		formData.append('created_by', '1');
		if (this.fileData === null) {
			this.loader = false;
			this.status = 'danger';
			this.msg = 'Please select a image.';
		} else {
			this.eventSer.upload(formData).subscribe(retData => {
				this.loader = false;
				this.uploadedFilePath = '';
				this.status = retData.status;
				this.msg = retData.message;
				this.ngOnInit();
			})
		}
	}

	/**
	 * changeDefault
	 */
	public changeDefault(ei_id = 0) {
		this.loader = true;
		this.eventSer.updateDefaultImage(this.eventId, ei_id).subscribe(retData => {
			this.loader = false;
			this.status = retData.status;
			this.msg = retData.message;
			this.previewUrl = '';
			this.ngOnInit();
		})
	}

	/**
	 * delete
	 */
	public delete(ei_id = 0, is_default = '0') {
		let confirmStatus: boolean = false;
		if (is_default === '0') {
			confirmStatus = confirm('Are you sure to delete this Image?');
		} else {
			confirmStatus = confirm('This is the default image. So please change your default image then delete this image.');
		}
		if (confirmStatus === true) {
			this.eventSer.deleteImage(this.eventId, ei_id).subscribe(retData => {
				this.status = retData.status;
				this.msg = retData.message;
				this.ngOnInit();
			});
		}
		// console.log(confirmStatus);
	}

}

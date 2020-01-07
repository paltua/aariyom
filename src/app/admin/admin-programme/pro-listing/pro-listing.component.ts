import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { ProgrammeService } from './../../../_service/programme.service';
import { Observable } from 'rxjs';
import { Programme, ApiResponses } from './../../../_models';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

class DataTablesResponse {
	data: any[];
	draw: number;
	recordsFiltered: number;
	recordsTotal: number;
}

class ListTable {
	program_id: any[];
	program_title: number;
	program_desc: number;
	is_deleted: string;
	created_by: number;
	created_date: Date;
	user_name: number;
}

@Component({
	selector: 'app-pro-listing',
	templateUrl: './pro-listing.component.html',
	styleUrls: ['./pro-listing.component.scss'],
	animations: [routerTransition()]
})
export class ProListingComponent implements OnInit, AfterViewInit, OnDestroy {
	pageTitle: string;
	programme: Observable<Programme>;
	apiRes: Observable<ApiResponses>;
	list: any;
	listCount: any;
	status: any;
	msg: any;
	dtOptions: DataTables.Settings = {};
	listTables: ListTable[];
	mySubscription: any;
	// @ViewChild(MatPaginator) paginator: MatPaginator;
	constructor(
		private programSer: ProgrammeService,
		private router: Router,
		private route: ActivatedRoute,
	) {
		this.pageTitle = 'Programme';
		this.status = '';
		this.msg = '';
	}

	ngAfterViewInit() {
		// this.dataSource.paginator = this.paginator;
	}

	ngOnInit() {
		this.setTempMessages();
		this.listing();
	}

	/**
	 * setTempMessages
	 */
	public setTempMessages() {
		// console.log(this.status, this.msg);
		if (localStorage.getItem('status') && localStorage.getItem('msg')) {
			this.status = localStorage.getItem('status');
			this.msg = localStorage.getItem('msg');
			localStorage.setItem('status', '');
			localStorage.setItem('msg', '');
		}
	}

	/**
	 * tableClass
	 */
	public tableClass(i) {
		return {
			'table-secondary': (i % 2 === 0),
			'table-warning': (i % 2 === 1),
		};
	}

	/**
	 * delete
	 */
	public delete(program_id = 0) {
		let confirmStatus: boolean = false;
		if (program_id > 0) {
			confirmStatus = confirm('Are you sure to delete this Programme?');
		}
		if (confirmStatus === true) {
			this.router.navigate(['/admin/programs/delete/' + program_id]);
		}
	}

	/**
	 * listing
	 */
	public listing() {
		const that = this;
		this.dtOptions = {
			pagingType: 'full_numbers',
			pageLength: 10,
			serverSide: true,
			processing: true,
			ajax: (dataTablesParameters: any, callback) => {
				that.programSer.list(dataTablesParameters).subscribe(resp => {
					that.listTables = resp.data.list;
					this.listCount = resp.data.recordsFiltered;
					callback({
						recordsTotal: resp.data.recordsTotal,
						recordsFiltered: resp.data.recordsFiltered,
						data: []
					});
				});
			},
			columns: [
				{ data: 'PROG.program_id', searchable: false, orderable: true },
				{ data: 'PROG.program_title', searchable: true, orderable: true },
				{ data: 'PROG.program_desc', searchable: true, orderable: true },
				{ data: 'UMD.user_name', searchable: true, orderable: true },
			]
		};
	}


	ngOnDestroy() {
		if (this.mySubscription) {
			this.mySubscription.unsubscribe();
		}
	}

}


import { Component, OnInit } from '@angular/core';
import { FunctionalunitService } from 'src/app/_service/functionalunit.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
  status: any;
  msg: any;
  dataId: any;
  constructor(
    private fuSer: FunctionalunitService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.dataId = (this.route.snapshot.paramMap.get('fu_id') ? this.route.snapshot.paramMap.get('fu_id') : 0);
  }

  ngOnInit() {
    this.fuSer.delete(this.dataId).subscribe(retData => {
      localStorage.setItem('status', retData.status);
      localStorage.setItem('msg', retData.message);
      this.router.navigate(['/admin/functional-units']);
    });
  }

}

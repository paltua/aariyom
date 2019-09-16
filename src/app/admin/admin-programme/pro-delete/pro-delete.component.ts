import { Component, OnInit } from '@angular/core';
import { ProgrammeService } from 'src/app/_service/programme.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pro-delete',
  templateUrl: './pro-delete.component.html',
  styleUrls: ['./pro-delete.component.scss']
})
export class ProDeleteComponent implements OnInit {

  status: any;
  msg: any;
  program_id: any;
  constructor(
    private programSer: ProgrammeService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.program_id = (this.route.snapshot.paramMap.get('id') ? this.route.snapshot.paramMap.get('id') : 0);
  }

  ngOnInit() {
    this.programSer.delete(this.program_id).subscribe(retData => {
      localStorage.setItem('status', retData.status);
      localStorage.setItem('msg', retData.message);
      this.router.navigate(['/admin/programs/listing']);
    });
  }

}

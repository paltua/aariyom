import { Component, OnInit } from '@angular/core';
import { EventService } from './../../../_service/event.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
  status: any;
  msg: any;
  eventId: any;
  constructor(
    private eventSer: EventService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.eventId = (this.route.snapshot.paramMap.get('event_id') ? this.route.snapshot.paramMap.get('event_id') : 0);
  }

  ngOnInit() {
    this.eventSer.delete(this.eventId).subscribe(retData => {
      localStorage.setItem('status', retData.status);
      localStorage.setItem('msg', retData.message);
      this.router.navigate(['/admin/events/listing']);
    });

  }

}

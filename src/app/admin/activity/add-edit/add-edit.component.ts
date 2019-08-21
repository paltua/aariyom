import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss'],
  animations: [routerTransition()]
})
export class AddEditComponent implements OnInit {
  public editor = ClassicEditor;
  public editorData = '';
  public start_date = '';
  public model: any;
  constructor() { }

  ngOnInit() {
  }

}

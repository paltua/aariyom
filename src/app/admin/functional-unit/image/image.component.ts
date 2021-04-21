import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FunctionalunitService } from 'src/app/_service/functionalunit.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
  pageTitle: string;
  status: any;
  msg: any;
  id: any;
  list: any;
  listCount: number;
  fileData: File = null;
  previewUrl: any = null;
  fileUploadProgress: string = null;
  uploadedFilePath: string = null;
  isDefaultForm: FormGroup;
  is_completed: string = "0";
  constructor(
    private fuSer: FunctionalunitService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
  ) {
    this.pageTitle = 'Functional Unit';
    this.status = '';
    this.msg = '';
    this.list = [];
    this.listCount = 1;
    this.id = (this.route.snapshot.paramMap.get('fu_id') ? this.route.snapshot.paramMap.get('fu_id') : 0);
    this.isDefaultForm = this.fb.group({
      is_default: [''],
    });

  }

  ngOnInit() {
    this.fuSer.image_list(this.id).subscribe(retData => {
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

  /**
   * chnageIsCompleted
   */
  public chnageIsCompleted() {
    this.is_completed = this.is_completed == "1" ? "0" : "1";
    // console.log(this.is_completed);
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('program_image', this.fileData);
    formData.append('fu_id', this.id);
    formData.append('created_by', '1');
    formData.append('is_completed', this.is_completed);
    if (this.fileData === null) {
      this.status = 'danger';
      this.msg = 'Please select a image.';
    } else {
      this.fuSer.upload(formData).subscribe(retData => {
        this.status = retData.status;
        this.msg = retData.message;
        this.ngOnInit();
      })
    }
  }

  /**
   * changeDefault
   */
  public changeDefault(prog_img_id = 0) {
    // console.log(this.id, prog_img_id);
    this.fuSer.updateDefaultImage(this.id, prog_img_id).subscribe(retData => {
      this.status = retData.status;
      this.msg = retData.message;
      this.previewUrl = '';
      this.ngOnInit();
    })
  }

  /**
   * delete
   */
  public delete(prog_img_id = 0, is_default = '0') {
    let confirmStatus: boolean = false;
    if (is_default === '0') {
      confirmStatus = confirm('Are you sure to delete this Image?');
    } else {
      confirmStatus = confirm('This is the default image. So please change your default image then delete this image.');
    }
    if (confirmStatus === true) {
      this.fuSer.deleteImage(this.id, prog_img_id).subscribe(retData => {
        this.status = retData.status;
        this.msg = retData.message;
        this.ngOnInit();
      });
    }
    // console.log(confirmStatus);
  }

}

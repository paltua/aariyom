import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { routerTransition } from 'src/app/router.animations';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CommonService } from 'src/app/_service';
import { ProgrammeService } from 'src/app/_service/programme.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-setting-about-us',
  templateUrl: './setting-about-us.component.html',
  styleUrls: ['./setting-about-us.component.scss'],
  animations: [routerTransition()],
})
export class SettingAboutUsComponent implements OnInit, OnDestroy {
  page: string = 'about_us';
  pageTitle: String = 'About Us Setting';
  status: String = '';
  msg: String = '';
  settingsForm: any;
  settingsFormMedia: any;
  settingsFormMediaWwaOr: any;
  submitted = false;
  submittedMedia = false;
  public editor = ClassicEditor;
  public editorData = '';
  public start_date = '';
  public model: any;
  fileData: File = null;
  previewUrl: any = null;
  fileUploadProgress: string = null;
  uploadedFilePath: string = null;
  formData: any;
  image_youtube: String = 'image';
  dtOptions: DataTables.Settings = {};
  listTables: any = [];
  mySubscription: any;
  listCount: any;
  constructor(
    private fb: FormBuilder,
    private commonService: CommonService,
    private programSer: ProgrammeService,
    private dom: DomSanitizer
  ) {
    this.settingsForm = this.fb.group({
      page: [this.page],
      who_we_are: ['', Validators.required],
      our_mission: ['', Validators.required]
    });
    this.settingsFormMedia = this.fb.group({
      page: [this.page],
      path: [""],
      youtube: [''],
      type: [this.image_youtube]
    });
    this.settingsFormMediaWwaOr = this.fb.group({
      wwa: [],
      or: [],
    });
  }

  ngOnInit() {
    this.listing();
    this.formData = new FormData();
    this.commonService.getSettings(this.page).subscribe(retData => {
      let data: any = retData.data;
      // console.log(data);
      this.previewUrl = data.image_path;
      this.settingsForm = this.fb.group({
        who_we_are: [data.who_we_are, Validators.required],
        our_mission: [data.our_mission, Validators.required],
      });

    });
    this.settingsFormMedia = this.fb.group({
      page: [this.page],
      path: [this.fileData],
      youtube: [''],
      type: [this.image_youtube]
    });
  }

  get f(): any {
    return this.settingsForm.controls;
  }

  get fm(): any {
    return this.settingsFormMedia.controls;
  }

  /**
   * formSave
   */
  public formSave() {
    if (this.settingsForm.valid) {
      this.setFormData();
      this.submitted = true;
      this.commonService.updateSettings(this.formData).subscribe(retData => {
        this.status = 'success';
        this.msg = 'You have successfully updated the ' + this.pageTitle;
      });
    } else if (this.settingsForm.invalid) {
      this.submitted = true;
      this.status = 'danger';
      this.msg = 'Please find the error(s) as below.';
    }
    window.scroll(0, 0);
  }

  fileProgress(fileInput: any) {
    this.fileData = <File>fileInput.target.files[0];
    this.settingsFormMedia.patchValue({
      path: this.fileData,
    })
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
   * setFormData
   */
  public setFormData() {
    this.formData.append('who_we_are', this.settingsForm.value.who_we_are);
    this.formData.append('our_mission', this.settingsForm.value.our_mission);
  }

  /**
   * setFormDataMedia
   */
  public setFormDataMedia() {


  }

  /**
   * formSaveMedia
   */
  public formSaveMedia() {
    this.submittedMedia = true;
    if (this.settingsFormMedia.valid) {
      if (this.settingsFormMedia.value.type == 'youtube') {
        this.commonService.addAboutUsImageYouTube(this.settingsFormMedia.value).subscribe(resData => {
          this.status = 'success';
          this.msg = 'You have successfully updated the ' + this.pageTitle;
          window.scroll(0, 0);
        });
      } else {
        console.log(this.settingsFormMedia.value);
        const formDataImage = new FormData();
        formDataImage.append('page', this.settingsFormMedia.value.page);
        formDataImage.append('type', this.settingsFormMedia.value.type);
        formDataImage.append('path', this.settingsFormMedia.value.path);
        console.log(formDataImage);
      }

    } else if (this.settingsForm.invalid) {
      this.status = 'danger';
      this.msg = 'Please find the error(s) as below.';
    }

  }

  /**
   * showHide
   */
  public showHide(type) {
    this.image_youtube = type;
    this.previewUrl = '';
    this.settingsFormMedia.patchValue({
      path: '',
      youtube: '',
    })
  }

  /**
   * listing
   */
  public listing() {
    let dataTablesParameters = [];
    this.commonService.getAboutUsImageYouTube(dataTablesParameters).subscribe(resp => {
      const newData: any = resp.data;
      this.listTables = newData.list;
      this.listCount = newData.recordsFiltered;
    });

  }

  ngOnDestroy() {
    if (this.mySubscription) {
      this.mySubscription.unsubscribe();
    }
  }

  /**
   * delete
   */
  public delete(id, is_for = '') {
    const data = {
      id: id,
      action: 'delete',
      action_val: 'deleted'
    }
    let msg = 'Are you sure to delete this?';
    if (is_for != '') {
      msg = 'Are you sure to delete this main image/youtube?';
    }
    let confirmStatus = confirm(msg);
    if (confirmStatus) {
      this.commonService.updateAboutUsImgYoutubeSettings(data).subscribe(resData => {
        this.status = 'success';
        this.msg = 'You have successfully deleted';
        this.listing();
        window.scroll(0, 0);
      })
    }

  }

  /**
   * urlSanitize
   */
  public urlSanitize(url) {
    return this.dom.bypassSecurityTrustResourceUrl(url)
  }

  /**
   * setMain
   */
  public setMain(type = '', id = 0) {
    const data = {
      id: id,
      action: 'update',
      action_val: type
    }
    let confirmStatus = confirm('Are you sure to change this main image/youtube?');
    if (confirmStatus) {
      this.commonService.updateAboutUsImgYoutubeSettings(data).subscribe(resData => {
        this.status = 'success';
        this.msg = 'You have successfully assigned';
        this.listing();
        window.scroll(0, 0);
      })
    }

  }


}


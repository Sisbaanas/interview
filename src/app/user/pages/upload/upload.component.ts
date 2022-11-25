import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {


  uploaded = false;
  imageLink = "";
  loading=false;
  width = 20;

  constructor() {
  }

  ngOnInit(): void {

    setInterval(() => { if (this.width < 100) this.width += 5 }, 100)

  }


  onFileChanged(event: any) {
    const files = event.target.files;

    if (files.length === 0)
      return;

    const image = files[0].type;
    if (image.match(/image\/*/) == null) {
      return;
    }

    if (files.length > 0) {
      let file: File = files[0];
      if (file.size > 500000) {
        this.openError("Maximum upload size of 0.1mb exceeded");
      }
      else {
        this.uploadImage(file);
      }
    }
  }


  onFileDragged(event: any) {

    const files = event;

    if (files.length === 0)
      return;

    if (files.length > 0) {
      let file: any = files[0];
      if (file.size > 500000) {
        this.openError("Maximum upload size of 0.1mb exceeded");
      }
      else {
        this.uploadImage(file.file);
      }
    }
  }

  uploadImage(file: any) {

  }

  openError(messageError: string) {

  }

  removeImage() {
    this.uploaded = false;
  }

}

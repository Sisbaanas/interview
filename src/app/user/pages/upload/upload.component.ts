import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from 'src/app/Services/UserService';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {


  uploaded = false;
  imageLink = "";
  loading = false;
  progress: number = 0;

  constructor(private userSerivce: UserService) {
  }

  ngOnInit(): void {

    //setInterval(() => { if (this.width < 100) this.width += 5 }, 100)

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
      this.uploadImage(file);
    }
  }


  onFileDragged(event: any) {

    const files = event;

    if (files.length === 0)
      return;

    if (files.length > 0) {
      let file: any = files[0];
      this.uploadImage(file.file);
    }
  }

  uploadImage(file: any) {
    this.loading = true
    this.userSerivce.uploadFile(file).subscribe((event: HttpEvent<any>) => {
      switch (event.type) {
        case HttpEventType.Sent:
          console.log('Request has been made!');
          break;
        case HttpEventType.ResponseHeader:
          console.log('Response header has been received!');
          break;
        case HttpEventType.UploadProgress:
          this.progress = Math.round(event.loaded / Number(event?.total) * 100);
          console.log(`Uploaded! ${this.progress}%`);
          break;
        case HttpEventType.Response:
          console.log('User successfully created!', event.body);
          setTimeout(() => {
            this.progress = 0;
          }, 1500);
      }
    });
  }

  removeImage() {
    this.uploaded = false;
  }

}

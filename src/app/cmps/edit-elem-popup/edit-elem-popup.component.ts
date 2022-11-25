import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/Services/UserService';

@Component({
  selector: 'app-edit-elem-popup',
  templateUrl: './edit-elem-popup.component.html',
  styleUrls: ['./edit-elem-popup.component.scss']
})
export class EditElemPopupComponent implements OnInit {

  Form = this.fb.group({
    name: ['', Validators.required],
    value: ['', Validators.required,],
    country: ['',],
    city: ['',],
  });

  @Input()
  id!: string;

  @Input()
  data?: any;

  @Output() response: EventEmitter<string> = new EventEmitter();

  constructor(private fb: FormBuilder,
    private userService: UserService) { }

  ngOnInit(): void {
    console.log(this.data);

    this.Form = this.fb.group({
      name: [this.data?.name, Validators.required],
      value: [this.data?.value, Validators.required,],
      country: [this.data?.country,],
      city: [this.data?.city,],
    });
  }

  closePopup(e: any) {
    if (e.target == e.currentTarget)
    this.response.emit("close")
  }

  save(e: any) {
    this.userService.updateElem(this.id, e.value).subscribe(
      (Response: any) => {
        this.response.emit("close")
      },
      (Error: any) => {
        console.log(Error);
      }
    )
  }

  cancel()
  {
    this.response.emit("close")
  }

}

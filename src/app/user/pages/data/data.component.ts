import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/Services/UserService';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {

  public headerCells = [
    {
      label: 'Label',
    },
    {
      label: 'Prix',
    },
    {
      label: 'Pays',
    },
    {
      label: 'Ville',
    },
    {
      label: 'Action',
    },
  ];

  table: any;
  pageSize = 5;
  page = 0;
  searchTerm = "";

  // public table = {
  //   totalElements: 49,
  //   totalPages: 7,
  //   pageNumber: 0,
  //   list: [
  //     {
  //       id: '1',
  //       columns: [
  //         {
  //           label: 'Offer 3/1 free',
  //           style: 'label-bold',
  //           position: 'center',
  //         },
  //         {
  //           label: 'Offer 3/1 free',
  //           style: 'label-bold',
  //           position: 'center',
  //         }
  //       ],
  //     },
  //     {
  //       id: '1',
  //       columns: [
  //         {
  //           label: 'Offer 3/1 free',
  //           style: 'label-bold',
  //           position: 'center',
  //         },
  //         {
  //           label: 'Offer 3/1 free',
  //           style: 'label-bold',
  //           position: 'center',
  //         }
  //       ],
  //     },
  //     {
  //       id: '1',
  //       columns: [
  //         {
  //           label: 'Offer 3/1 free',
  //           style: 'label-bold',
  //         },
  //         {
  //           label: '22/08/2022',
  //           style: 'label-normal',
  //         },
  //       ],
  //     },
  //   ],
  // };

  popupOpen = false;
  id!: string;
  data?: any;
  loading=false;
  constructor(private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.getTable();
  }

  getTable() {
    this.loading = true;
    this.userService.Page(this.pageSize, this.page, this.searchTerm).subscribe(
      (response: any) => {
        console.log(response);
        this.table = response;
        this.loading = false;
      },
      (error: any) => {
        console.log(error?.error?.messageError);
        this.loading = false;
      }
    );
  }

  deleteElem(e: any) {
    this.userService.deleteElem(e).subscribe(
      (response: any) => {
        this.page = 0;
        this.getTable();
      },
      (error: any) => {
        console.log(error?.error?.messageError);
      }
    );
  }

  handleResponse(e: any) {
    let splitted = e.split('/');

    switch (splitted[0]) {
      case 'page':
        this.page = splitted[1];
        this.getTable();
        break;
      case 'pageSize':
        this.pageSize = splitted[1];
        this.getTable();
        break;
      case 'searsh':
        this.searchTerm = splitted[1];
        this.page = 0;
        this.getTable();
        break;
      case 'edit':
        this.popupOpen = true;
        this.id = splitted[1];
        for (let i = 0; i < this.table?.list.length; i++) {
          if (this.table?.list[i].id == this.id)
            this.data = this.table?.list[i];

        }
        break;
      case 'delete':
        this.deleteElem(splitted[1])
        break;
      case 'close':
        this.popupOpen = false;
        this.getTable();
        break;
    }
  }



}

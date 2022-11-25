import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input()
  headerCells!: any[];

  @Input()
  placeholder!: string;

  @Input()
  reload!: String;

  @Input()
  table!: any;

  @Output() response: EventEmitter<string> = new EventEmitter();

  public pageSize: number = 5;
  public pageSizes = [5, 10, 25, 50, 100];
  public noneSelected = true;
  public showDropDownmenu = false;
  public checkAll?: boolean;
  public Allselected: boolean = false;

  public list: any[] = [];
  public selectedElements: any[] = [];
  public pages: string[] = [];
  public searchTerm: string = "";

  public myAngularxQrCode!: string;

  loading = false;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.ngOnInit();
  }

  ngOnInit(): void {
    this.getPages()
  }

  public getPages() {

    let currentPage = this.table?.pageNumber + 1;
    let pageCount = this.table?.totalPages;

    this.pages = [];

    let i = Number(currentPage);

    if (i != 1)
      i = i - 1;

    let j = i + 2;
    if (pageCount < (i + 4)) {
      while (i <= pageCount) {
        this.pages.push(String(i));
        i++;
      }
    }
    else {
      while (i < pageCount) {
        if (i <= j)
          this.pages.push(String(i));
        if (i == (j + 1))
          this.pages.push('...');
        i++;
      }
      this.pages.push(String(pageCount));
    }
  }

  public onPageSizeChange(event: any) {
    this.response.emit("pageSize/" + event.target.value)
  }

  changePage(value: any): void {
    this.response.emit("page/" + (value - 1))
  }

  onTermChange(event: any): void {
    this.response.emit("searsh/" + this.searchTerm)
  }

  previousPage() {
    if (Number(this.table?.pageNumber) > 1) {
      this.changePage(String(Number(this.table?.pageNumber) - 1))
    }
  }

  nextPage() {
    if (this.pages.includes(String(Number(this.table?.pageNumber) + 1))) {
      this.changePage(String(Number(this.table?.pageNumber) + 1))
    }
  }

  delete(element: any) {
    this.response.emit("delete/" + element);
  }

  edit(element: any) {
    this.response.emit("edit/" + element);
  }

}

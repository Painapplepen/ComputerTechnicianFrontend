import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {

  @Input() totalPages: number;
  @Input() currentPage: number;

  @Output() changePage: EventEmitter<number> = new EventEmitter<number>();

  get isFirstDisabled() {
    return this.currentPage === 0;
  }

  get isLastDisabled() {
    return this.currentPage === this.totalPages - 1;
  }

  goToFirstPage() {
    this.currentPage = 0;
    this.changePage.emit(this.currentPage);
  }

  goToPreviousPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.changePage.emit(this.currentPage);
    }
  }

  goToSecondPage() {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
      this.changePage.emit(this.currentPage);
    }
  }

  goToLastPage() {
    this.currentPage = this.totalPages - 1;
    this.changePage.emit(this.currentPage);
  }

}

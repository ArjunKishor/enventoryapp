import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeyToTitleCasePipe } from '../pipes/key-to-title-case.pipe';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, KeyToTitleCasePipe],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent<T> implements OnInit {
  @Input() data: any[] = [];
  @Input() columns: string[] = [];
  @Output() onRowTap = new EventEmitter<T>();

    constructor() {}

    ngOnInit(): void {}

    onRowTapHandler(row: T): void {
      this.onRowTap.emit(row);
    }
}

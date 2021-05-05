import {AfterViewInit, Component, Input, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {GetAllPhrasesRoot} from '../../../core/models/responsePhraseInferences/get-all-phrases-root';
import {GetAllPhrases} from '../../../core/models/responsePhraseInferences/get-all-phrases';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements AfterViewInit {
  displayedColumns: string[] = [ '_id', 'english', 'polish', 'date', 'isApprove'];
  displayTable = false;
  dataSource: MatTableDataSource<GetAllPhrases>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @Input() data: GetAllPhrases[];
  constructor() {
  }

  ngAfterViewInit() {

  }
  ngOnChanges(changes: SimpleChanges) {
   if (changes.hasOwnProperty('data')){
     if (this.data != undefined){
       this.dataSource = new MatTableDataSource(this.data);
       this.dataSource.paginator = this.paginator;
       this.dataSource.sort = this.sort;
       this.displayTable = true;
     }
   }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  declarations: [
    TableComponent
  ],
  exports: [
    TableComponent,
    MatFormFieldModule,
    MatInputModule
  ],
    imports: [
        CommonModule,
        MatPaginatorModule,
        MatTableModule,
        MatFormFieldModule,
        MatFormFieldModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatIconModule
    ]
})
export class SharedModule { }


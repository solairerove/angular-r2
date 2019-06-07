import {NgModule} from '@angular/core';
import {MatCardModule, MatListModule, MatPaginatorModule, MatTableModule} from '@angular/material';

@NgModule({
  exports: [
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class MaterialModule {

}

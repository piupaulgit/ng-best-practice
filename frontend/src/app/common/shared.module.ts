import { NgModule } from "@angular/core";
import { FiltersComponent } from "./components/filters/filters.component";
import { CommonModule } from "@angular/common";
import { DataTablesComponent } from "./components/data-tables/data-tables.component";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";

@NgModule({
  declarations: [FiltersComponent, DataTablesComponent],
  imports: [CommonModule, NgxDatatableModule],
  exports: [FiltersComponent, DataTablesComponent]
})
export class SharedModule {}

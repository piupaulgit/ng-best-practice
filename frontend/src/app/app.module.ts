import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DashboardModule } from "./modules/dashboard/dashboard.module";
import { ProjectsModule } from "./modules/projects/projects.module";
import { SidenavComponent } from './common/components/sidenav/sidenav.component';
import { HeaderComponent } from './common/components/header/header.component';
import { FiltersComponent } from './common/components/filters/filters.component';
import { DataTablesComponent } from './common/components/data-tables/data-tables.component';
import { TitleService } from './common/services/title.service';

@NgModule({
  declarations: [AppComponent, SidenavComponent, HeaderComponent, FiltersComponent, DataTablesComponent],
  imports: [BrowserModule, AppRoutingModule, DashboardModule, ProjectsModule, HttpClientModule],
  providers: [TitleService],
  bootstrap: [AppComponent]
})
export class AppModule {}

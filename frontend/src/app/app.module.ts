import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DashboardModule } from "./modules/dashboard/dashboard.module";
import { ProjectsModule } from "./modules/projects/projects.module";
import { SidenavComponent } from "./common/components/sidenav/sidenav.component";
import { HeaderComponent } from "./common/components/header/header.component";
import { HttpClientModule } from "@angular/common/http";
import { CommonService } from "./common/services/common.service";
import { SharedModule } from "./common/shared.module";

@NgModule({
  declarations: [AppComponent, SidenavComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    ProjectsModule,
    HttpClientModule,
    SharedModule
  ],
  exports: [SharedModule],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule {}

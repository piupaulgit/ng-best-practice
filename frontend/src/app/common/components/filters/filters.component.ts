import { Component, OnInit, Input } from "@angular/core";
import { CommonService } from "../../services/common.service";

@Component({
  selector: "app-filters",
  templateUrl: "./filters.component.html",
  styleUrls: ["./filters.component.scss"]
})
export class FiltersComponent implements OnInit {
  filters = [];
  private _moduleName: string;
  constructor(private commonService: CommonService) {}

  @Input()
  set moduleName(name: string) {
    this._moduleName = name;
  }

  get moduleName(): string {
    return this._moduleName;
  }

  ngOnInit() {
    this.commonService
      .getFilters(this._moduleName)
      .subscribe(data => (this.filters = data));
  }
}

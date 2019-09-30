import { Component, OnInit, Input } from "@angular/core";
import { CommonService } from "../../services/common.service";

@Component({
  selector: "app-data-tables",
  templateUrl: "./data-tables.component.html",
  styleUrls: ["./data-tables.component.scss"]
})
export class DataTablesComponent implements OnInit {
  rows: [];
  columns = [];
  tableeLoaded = false;

  constructor(private commonService: CommonService) {}
  private _moduleName: string;
  tableData;

  @Input()
  set moduleName(name: string) {
    this._moduleName = name;
  }

  get moduleName(): string {
    return this._moduleName;
  }

  ngOnInit() {
    this.commonService.getTableData(this._moduleName).subscribe(data => {
      this.rows = data.data;
      let getRows = Object.keys(data.data[0]);
      getRows.forEach(item => {
        this.columns.push({
          name: item
        });
      });
      console.log(this.columns);
      this.tableeLoaded = true;
    });
  }
}

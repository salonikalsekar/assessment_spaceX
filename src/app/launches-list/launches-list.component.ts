import { Component, OnInit, ViewChild } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatTableDataSource, MatSort, MatPaginator } from "@angular/material";
import { LaunchesService } from "../services/launches.service";

export interface LaunchModel {
  flight_number: number;
  launch_year: number;
  rocket: object;
  details: string;
  links: object;
}

@Component({
  selector: "app-launches-list",
  templateUrl: "./launches-list.component.html",
  styleUrls: ["./launches-list.component.css"]
})
export class LaunchesListComponent implements OnInit {
  isLoadingResults = true;

  displayedColumns = ["flight_number", "launch_year", "rocket", "details"];
  launchList = new MatTableDataSource<LaunchModel>();

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private http: HttpClient,
    private LaunchService: LaunchesService,
    private _snackBar: MatSnackBar
  ) {}

  // gather data as soon as the component is loaded
  ngOnInit() {
    this.isLoadingResults = true;

    this.LaunchService.getLaunches().subscribe(data => {
      this.launchList.data = data as LaunchModel[];
    });
  }

  // to display after data is loaded
  ngAfterViewInit(): void {
    this.launchList.sort = this.sort;
    this.launchList.paginator = this.paginator;
    this.isLoadingResults = false;
  }

  displayPresskit(row: any) {
    if (row && row.links && row.links.presskit) {
      window.location = row.links.presskit;
    } else {
      this.alert();
    }
  }

  alert() {
    this._snackBar.open("No presskit present", "OK", {
      duration: 2000
    });
  }

  applyFilter(filterValue: string) {
    this.launchList.filter = filterValue.trim().toLowerCase();

    if (this.launchList.paginator) {
      this.launchList.paginator.firstPage();
    }
  }
}

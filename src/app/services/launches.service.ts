import { Injectable, Inject } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';

// used a service to reuse api calls, that is in case the same api are to be used by other components as well

@Injectable()

export class LaunchesService {
    constructor(private http: HttpClient) {
    }

// gets launch data from the api provided
    getLaunches(){
      return this.http.get('https://api.spacexdata.com/v3/launches')
      .pipe(map(data => data ));
    }
}

import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';

import {Observable ,of } from 'rxjs';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeaders(): Observable<Leader[]>{
    
    return of(LEADERS).pipe(delay(2000));
  }


  getFeaturedLeader(): Observable<Leader>{
   
    return of(LEADERS.filter((leader)=>leader.featured)[0]).pipe(delay(2000));
  }
  /*.......previously, it was as follows .......................
   getLeaders(): Promise<Leader[]>{
    
    return new Promise(resolve => {
      //sinulate server latency with 2 second delay
      setTimeout(()=>resolve(LEADERS),2000);
    });
  }


  getFeaturedLeader(): Promise<Leader>{
   
    return new Promise(resolve => {
      //sinulate server latency with 2 second delay
      setTimeout(()=>resolve(LEADERS.filter((leader)=>leader.featured)[0]),2000);
    });
  }*/
}

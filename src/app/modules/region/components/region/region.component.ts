import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';

import { Region } from '../../../../shared/models/region';
import { RegionService } from '../../../../shared/services/region.service';

import { Repository } from '../../../../shared/models/repository.model';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss']
})
export class RegionComponent implements OnInit {
  typeSub: Subscription;
  pageSub: Subscription;
  items: Region[];
  regionType: string;
  pageNum: number;
  listStart: number;
  errorMessage: string;
  settingsCollapsed: boolean = false;
  rowsPerPage: number = 10;

  constructor(
    private regionService: RegionService,
    private route: ActivatedRoute,
    private repo: Repository
  ) { }

  ngOnInit() {
      this.items = this.repo.getRegions();
      /*
      this.typeSub = this.route
        .data
        .subscribe(data => {
          this.regionType = (data as any).regionType;
        });

      this.pageSub = this.route.params.subscribe(params => {
        this.pageNum = params['page'] ? +params['page'] : 1;
        this.regionService.get()
          .subscribe( regions => {
            this.items = regions;
          })
      });
      */    
      /*
      this._hackerNewsAPIService.fetchFeed(this.feedType, this.pageNum)
        .subscribe(
          items => this.items = items,
          error => this.errorMessage = 'Could not load ' + this.feedType + ' stories.',
          () => {
            this.listStart = ((this.pageNum - 1) * 30) + 1;
            window.scrollTo(0, 0);
          }
        );
      */  
  }

  toggleSettings() {
    this.settingsCollapsed = !this.settingsCollapsed;
  }

  settingsChanged(value) {
    let v = value;
    this.rowsPerPage = value.rowsPerPage;
  }

  deleteRegion(id) {
    this.repo.deleteRegion(id);  
  }

  getUsersInfoString(region: Region) : string {
    let names = region.users.map(u => u.username);
    if (names.length > 0) {
      return names.join(', ');
    } 
    else return ""   
  }

}

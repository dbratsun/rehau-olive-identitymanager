import { Component, OnInit } from '@angular/core';
import { SubNavComponent } from "../sub-nav/sub-nav.component";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  activeItem: number = 0;

  headerLinks: any[] = [
    { group: 'dashboard', link: ['/', 'dashboard'], icon: 'home', label: 'Dashboard' },
    { group: 'users', link: ['/', 'users'], icon: 'users', label: 'Users & Groups' },
    { group: 'organization', link: ['/', 'organization'], icon: 'organization', label: 'Organization' },
    { group: 'configuration', link: ['/', 'configuration'], icon: 'cog', label: 'Configuration' },
  ];

  subLinks: any[] = [
    { group: 'dashboard', link: ['dashboard/main'], label: 'Main'},
    { group: 'dashboard', link: ['dashboard/productivity'], label: 'Productivity'},
    { group: 'users', link: ['users/users'], label: 'Users'},
    { group: 'users', link: ['users/usergroups'], label: 'User Groups'},
    { group: 'users', link: ['users/roles'], label: 'Roles'},
    { group: 'users', link: ['users/monitoring'], label: 'Monitoring'},
    { group: 'organization', link: ['organization/division'], label: 'Division'},
    { group: 'organization', link: ['organization/region'], label: 'Region'},
    { group: 'configuration', link: ['configuration/settings'], label: 'Settings'},
    { group: 'configuration', link: ['configuration/customfields'], label: 'Custom Fields'},
  ];

  getSubItems() {
    let _group = this.headerLinks[this.activeItem].group;
    let filtered = this.subLinks.filter(a => a.group === _group);
    return filtered;
  }

  toggleActive(item) {
    this.activeItem = this.headerLinks.findIndex(value => value.group === item.group);
  }

  ngOnInit() {
  }
}

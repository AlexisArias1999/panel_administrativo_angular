import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { navbarData } from './nav-data';
import { style, transition, trigger, animate, keyframes } from '@angular/animations';
import { INavbarData, fadeInOut } from './helper';
import { Router } from '@angular/router';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css',
  animations: [
    // trigger('fadeInOut', [
    //   transition(':enter', [
    //     style({ opacity: 0 }),
    //     animate('350ms',
    //       style({ opacity: 1 }))
    //   ]),
    //   transition(':leave', [
    //     style({ opacity: 1 }),
    //     animate('350ms',
    //       style({ opacity: 0 }))
    //   ])
    // ]),
    fadeInOut,
    trigger('rotate', [
      transition(':enter', [
        animate('1000ms',
          keyframes([
            style({ transform: 'rotate(0deg)', offset: '0' }),
            style({ transform: 'rotate(1turn)', offset: '1' })
          ]))
      ])
    ])
  ]
})
export class SidenavComponent implements OnInit {

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth <= 768) {
      this.collapsed = false;
      this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
    }
  }

  constructor(public router: Router) {

  }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }

  @Output()
  onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  screenWidth = 0;

  collapsed = false;
  navData = navbarData;
  multiple: boolean = false;

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
  }

  closeSidenav(): void {
    this.collapsed = false;
    this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
  }

  handleClick(item: INavbarData): void {
    this.shrinkItems(item);
    item.expanded = !item.expanded;
  }

  getActiveClass(data: INavbarData): string {
    return this.router.url.includes(data.routeLink) ? 'active' : '';
  }

  shrinkItems(item: INavbarData): void {
    if (!this.multiple) {
      for (let modelItem of this.navData) {
        if (item !== modelItem && modelItem.expanded) {
          modelItem.expanded = false;
        }
      }
    }
  }
}
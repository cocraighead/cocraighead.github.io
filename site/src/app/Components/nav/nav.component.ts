import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private router: Router) { }

  @Input() data:any
  @Input() currentPage:number | undefined
  @Output() pageChange = new EventEmitter<number>();
  mobileNav = window.screen.width < 700
  navHidden = this.mobileNav

  ngOnInit(): void {

  }

  iconClicked(i:number): void{
    this.currentPage = i
    if(this.mobileNav){
      this.navHidden = true
    }
    this.pageChange.emit(i);
  }

  
  showNav(): void{
    this.navHidden = false
  }
}

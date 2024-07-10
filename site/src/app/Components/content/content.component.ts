import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(private router: Router) {}

  @Input() currentPage:any

  @Input() data:any
  currentPageData:any = {}
  
  ngOnInit(): void {
    
  }

  ngOnChanges()	: void {
    this.currentPageData = this.data && this.data.pages[this.currentPage]
    this.currentPageData.titleArray = this.currentPageData.title.split('');
  }


  

}

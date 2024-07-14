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

  screenWidth:number = window.screen.width
  screenWidthCssClass:string = ''
  
  ngOnInit(): void {
    if(this.screenWidth < 500){
      this.screenWidthCssClass = 'size-500'
    }else if(this.screenWidth < 700){
      this.screenWidthCssClass = 'size-700'
    }else if(this.screenWidth < 1000){
      this.screenWidthCssClass = 'size-1000'
    }else if(this.screenWidth < 1200){
      this.screenWidthCssClass = 'size-1200'
    }else if(this.screenWidth < 1400){
      this.screenWidthCssClass = 'size-1400'
    }
  }

  ngOnChanges()	: void {
    this.currentPageData = this.data && this.data.pages[this.currentPage]
    this.currentPageData.titleArray = this.currentPageData.title.split('');
  }


  

}

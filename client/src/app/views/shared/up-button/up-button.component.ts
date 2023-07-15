import { Component, OnInit, HostListener } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-up-button',
  templateUrl: './up-button.component.html',
  styleUrls: ['./up-button.component.scss']
})
export class UpButtonComponent implements OnInit {
  isButtonVisible: boolean = false;

  constructor(private viewportScroller: ViewportScroller) { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    const verticalOffset = this.viewportScroller.getScrollPosition()[1];
    this.isButtonVisible = verticalOffset > window.innerHeight * 0.5;
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}

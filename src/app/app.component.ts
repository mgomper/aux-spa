import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private innerWidth: number;
  status: boolean = false;
  state = 'none';

  constructor(){

  }

  onTopButtonClick(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  @HostListener("window:scroll", [])
  onScroll(): string {
    let carouselElement = document.getElementById('block2');
    let carouselRect = carouselElement.getBoundingClientRect();
    let carouselYPos = carouselRect.bottom;

    if (window.pageYOffset <= carouselYPos) {
      return this.state;
    }
  }

  clickEvent(){
    this.status = !this.status;
  }

}

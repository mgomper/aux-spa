import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private innerWidth: number;
  mobileWidth: boolean;
  status: boolean = false;
  state = 'none';

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

  constructor() {
    if(window.innerWidth < 999){
      this.mobileWidth = true;
    }else{
      this.mobileWidth = false;
    }
  }



  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    if (innerWidth < 999){
      this.mobileWidth = true;
    }
    else if (innerWidth > 999){
      this.mobileWidth = false;
    }
  }

}

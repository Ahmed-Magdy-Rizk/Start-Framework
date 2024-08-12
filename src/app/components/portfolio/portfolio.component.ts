import { Component } from '@angular/core';
import { log } from 'node:console';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  urls = [
    "../../../assets/house.png",
    "../../../assets/cake.png",
    "../../../assets/circus.png",
    "../../../assets/house.png",
    "../../../assets/cake.png",
    "../../../assets/circus.png",
  ]

  elemntIdNumber = 1;
  isClicked: boolean = true;

  toggleLightbox(event: MouseEvent) {
    this.isClicked = !this.isClicked;

    const target = event.currentTarget as HTMLElement;
    console.log(this.elemntIdNumber = Number(target.id))
    console.log(this.urls[this.elemntIdNumber])
  }
}

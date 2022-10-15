import { StoriesService } from './../../services/stories.service';
import { Component, OnInit } from '@angular/core';
declare var $: any  //I know it is not recommended to use JQuery in angular or React 
@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {
  stories: any = []
  constructor(private _StoriesService: StoriesService) { }

  getStories() {
    this._StoriesService.getStories().subscribe((data) => {
      this.stories = data

      setTimeout(() => { this.slider() }, 0); //that's a bug in this plugin and this is a solution 
    })
  }

  slider() { // to slide stories
    $(".owl-carousel").owlCarousel({
      items: 7,
      responsive: {
        0: {
          items: 4,
        },
        600: {
          items: 6,
        },
        1000: {
          items: 7,
        }
      }
    });
  }

  ngOnInit(): void { this.getStories() }
}

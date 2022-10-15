import { FeedsService } from './../../services/feeds.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  links = ['All', 'Following', 'Newest', 'Popular'] // this array for Dynamic Links
  feeds: any = []
  deepCopy: any = [] //this array is to save a copy from feeds array to reset feeds after filtration 
  selectedIndex: number = 0;

  constructor(private _FeedsService: FeedsService) { }

  getFeeds() {
    this._FeedsService.getFeeds().subscribe((data) => { this.feeds = this.deepCopy = data })
  }

  setIndex(index: number) { this.selectedIndex = index; } // to add active class

  sort(link: string) {
    this.feeds = this.deepCopy
    this.feeds = this.feeds.filter((feed: any) => { return feed[link] == true }) // for filtration
    if (this.feeds.length == 0) this.feeds = this.deepCopy // to reset feeds array with original saved values into deepCopy
  }

  ngOnInit(): void { this.getFeeds() }

}

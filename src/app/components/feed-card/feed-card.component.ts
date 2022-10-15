import { FeedsService } from './../../services/feeds.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-feed-card',
  templateUrl: './feed-card.component.html',
  styleUrls: ['./feed-card.component.css']
})
export class FeedCardComponent implements OnInit {
  @Input() item: any = ''
  constructor(private _FeedsService: FeedsService) { }

  likeEvent(id: string, isLike: boolean, likes: number) {
    this.item.isLike = !isLike
    if (this.item.isLike) {
      this.item.likes = likes + 1
    } else {
      this.item.likes = likes - 1
    }
    this._FeedsService.updateFeed(id, { isLike: this.item.isLike, likes: this.item.likes }).subscribe(data => { })
  }
  ngOnInit(): void {

  }

}

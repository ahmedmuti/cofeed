import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  Followers = [{ isFollow: false }, { isFollow: false }, { isFollow: false }]


  constructor() { }

  setIndex(index: number) {
    this.Followers[index].isFollow = !this.Followers[index].isFollow
    localStorage.setItem('Followers', JSON.stringify(this.Followers))
  }
  getFollowersFromLocalStrorage() {
    let followers = localStorage.getItem('Followers')
    if (followers != null) this.Followers = JSON.parse(followers)
  }
  ngOnInit(): void {
    this.getFollowersFromLocalStrorage()
  }

}

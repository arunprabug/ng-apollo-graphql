import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';

import { GET_FRIENDS } from './../graphql';

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.css']
})
export class FriendListComponent implements OnInit {

  user: any;
  company: any;
  apollo: Apollo;
  constructor(apollo: Apollo) {
    this.apollo = apollo;
  }

  ngOnInit() {
    this.friendsList = [];
    this.apollo.watchQuery({
      query: GET_FRIENDS
    }).valueChanges.subscribe((response) => {
      // 5
      if (response.data.user) {
        this.user = JSON.stringify(response.data.user);
      }
      if (response.data.company) {
        this.company = JSON.stringify(response.data.company);
      }
    });
  }

}

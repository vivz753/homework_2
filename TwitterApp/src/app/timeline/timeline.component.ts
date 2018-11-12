import { Component, OnInit } from '@angular/core';
import { TwitterService } from '../twitter.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css'],
  providers: [TwitterService]
})
export class TimelineComponent implements OnInit {

  listOfTweets: string[] = [];

  constructor(private twitter: TwitterService) { }

  ngOnInit() {
    this.twitter.home().subscribe(tweetResponse => {
      var timeLineTweets = tweetResponse.data;
      this.listOfTweets = timeLineTweets.map(tweetEntry => tweetEntry.full_text);
  
      console.log(this.listOfTweets);
    })
  }

}
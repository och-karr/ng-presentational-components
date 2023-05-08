import { Component } from '@angular/core';
import {CardViewModel} from "./components/card/card.view-model";
import {ReadMorePanelViewModel} from "./components/read-more-panel/read-more-panel.view-model";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'components-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'components';
  readonly data: CardViewModel = {
    title: 'Hello',
    description: 'I am a card'
  };

  rating = 3.5;

  myForm: FormGroup = new FormGroup({
    street: new FormControl(''),
    city: new FormControl(''),
    countryId: new FormControl('1'),
  });

  // readonly panel: ReadMorePanelViewModel = {
  //   mainText: 'This is the main text.',
  //   readMoreText: 'This is the read more text.',
  //   openLabel: 'Open',
  //   closedLabel: 'Close'
  // }

  onRatingClick(value: number) {
    console.log(value)
    this.rating = value;
  }
}

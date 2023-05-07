import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation
} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Component({
  selector: 'rating-view',
  styleUrls: ['./rating-view.component.scss'],
  templateUrl: './rating-view.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RatingViewComponent {
  @Input() max: number = 1;
  @Input() value: number = 0;
  @Output() clicked = new EventEmitter<number>();

  range(max: number) {
    return Array.from({length: max}, (v, i) => i);
  }

  onStarClick(value: number) {
    this.value = value;
    this.clicked.emit(value);
  }
}

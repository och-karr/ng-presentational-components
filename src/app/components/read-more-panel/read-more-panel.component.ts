import {ChangeDetectionStrategy, Component, Input, ViewEncapsulation} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Component({
  selector: 'read-more-panel',
  styleUrls: ['./read-more-panel.component.scss'],
  templateUrl: './read-more-panel.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReadMorePanelComponent {
  @Input() mainText!: string;
  @Input() readMoreText!: string;
  @Input() openLabel: string = 'Read more';
  @Input() closedLabel: string = 'Read less';

  constructor() {
    // console.log(this.isPanelOpen)
    // console.log(this.openLabel)
  }

  //I wersja

  // isPanelOpen?: boolean = false;
  // buttonLabel?: string = this.openLabel;
  //
  // togglePanel(): void {
  //   this.isPanelOpen = !this.isPanelOpen;
  //   this.buttonLabel = this.isPanelOpen ? this.closedLabel : this.openLabel;
  // }

  // II wesja

  // private _isPanelOpenSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  // public isPanelOpen$: Observable<boolean> = this._isPanelOpenSubject.asObservable();
  // buttonLabel(): string | undefined {
  //   return this._isPanelOpenSubject.value ? this.closedLabel : this.openLabel;
  // }
  //
  // togglePanel(): void {
  //   this._isPanelOpenSubject.next(!this._isPanelOpenSubject.value)
  // }

  // III wersja

  private _isPanelOpenSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isPanelOpen$: Observable<boolean> = this._isPanelOpenSubject.asObservable();

  private _buttonLabelSubject: BehaviorSubject<string> = new BehaviorSubject<string>(this.openLabel);
  public buttonLabel$: Observable<string> = this._buttonLabelSubject.asObservable();

  togglePanel(): void {
    this._isPanelOpenSubject.next(!this._isPanelOpenSubject.value)
    this._isPanelOpenSubject.value ? this._buttonLabelSubject.next(this.openLabel) : this._buttonLabelSubject.next(this.closedLabel);
  }
}

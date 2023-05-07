import { ChangeDetectionStrategy, Component, ViewEncapsulation, ChangeDetectorRef, OnInit } from '@angular/core';

@Component({
  selector: 'header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.cdr.detach();
  }
}

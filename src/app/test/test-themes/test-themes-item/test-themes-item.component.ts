import {Component, HostListener, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-test-themes-item',
  templateUrl: './test-themes-item.component.html',
  styleUrls: ['./test-themes-item.component.css']
})
export class TestThemesItemComponent implements OnInit {
  @Input() itemName = "Рослини";
  public showItem = false;

  constructor() { }

  ngOnInit() {
  }

  public changeVisibility(): void {
    this.showItem = !this.showItem;
  }
}

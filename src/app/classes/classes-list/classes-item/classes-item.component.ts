import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-classes-item',
  templateUrl: './classes-item.component.html',
  styleUrls: ['./classes-item.component.css']
})
export class ClassesItemComponent implements OnInit {
  @Input() itemName;
  public showItem = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public openTest(): void {
    this.router.navigateByUrl('/tests');
  }
}

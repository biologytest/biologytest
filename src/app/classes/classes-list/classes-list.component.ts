import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classes-list',
  templateUrl: './classes-list.component.html',
  styleUrls: ['./classes-list.component.css']
})
export class ClassesListComponent implements OnInit {
  public names = ['Біологія 6 клас',
                  'Біологія 7 клас',
                  'Біологія 8 клас',
                  'Біологія 9 клас',
                  'Біологія 10 клас',
                  'Біологія 11 клас']
  constructor() { }

  ngOnInit() {
  }

}

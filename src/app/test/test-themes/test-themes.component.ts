import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-themes',
  templateUrl: './test-themes.component.html',
  styleUrls: ['./test-themes.component.css']
})
export class TestThemesComponent implements OnInit {
  private names = ['Рослини', 'Тварини', 'Людина', 'Загальна біологія']
  constructor() { }

  ngOnInit() {
  }
}

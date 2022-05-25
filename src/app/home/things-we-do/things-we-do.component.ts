import { Component, Input, OnInit } from '@angular/core';
import { ThingsWeDo } from 'src/app/models/home';

@Component({
  selector: 'app-things-we-do',
  templateUrl: './things-we-do.component.html',
  styleUrls: ['./things-we-do.component.scss']
})
export class ThingsWeDoComponent implements OnInit {
  @Input() thingsWeDoData = {} as ThingsWeDo;
  constructor() { }

  ngOnInit(): void {
  }

}

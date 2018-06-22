import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-resp-area',
  templateUrl: './resp-area.component.html',
  styleUrls: ['./resp-area.component.css']
})
export class RespAreaComponent implements OnInit {

    @Input() resp: string;

  constructor() { }

  ngOnInit() {
  }

}

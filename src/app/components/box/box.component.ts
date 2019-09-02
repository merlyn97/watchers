import { Component, OnInit, Input } from '@angular/core';
import { Patient } from '../../models/patients.interface';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {

  @Input() patient:Patient;

  constructor() { }

  ngOnInit() {
  }

}

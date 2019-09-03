import { Component, OnInit, Input } from '@angular/core';
import { Patient } from '../../models/patients.interface';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css']
})
export class ImgComponent implements OnInit {
  @Input() patient: string;
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Patient } from '../../models/patients.interface';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() patient: Patient;
  
  lat = 51.678418;
  lng = 7.809007;

  constructor(public activeModal: NgbActiveModal) {}
  ngOnInit() {
  }
}

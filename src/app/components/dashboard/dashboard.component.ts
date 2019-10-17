import { Component, OnInit } from '@angular/core';
import { PatientsService } from '../../services/patients.service';
import { Patient } from '../../models/patients.interface';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  arrPatients: Patient[];
  constructor(private _patientsService: PatientsService, private modalService: NgbModal) { }


  ngOnInit() {
    this._patientsService.getPatients().subscribe(result => {
      this.arrPatients = result;
      console.log(result);
    },
      err => {
        console.log(err);
      });
  }

  open(patient: Patient) {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.patient = patient;
  }

}

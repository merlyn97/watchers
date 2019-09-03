import { Injectable } from '@angular/core';
import { Patient } from '../models/patients.interface';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PatientsService {
url:string="www.pito.com";
   patients: Patient[] =[
     {id: 1, name: "Merlyn", telefono: "2721295406", picture: "../../assets/selfie.PNG"},
     {id: 2, name: "damian", telefono: "2721295406", picture: "../../assets/selfie.PNG"},
     {id: 3, name: "cologua", telefono: "2721295406", picture: "../../assets/selfie.PNG"},
     {id: 4, name: "Mike", telefono: "2721295406", picture: "../../assets/selfie.PNG"},
     {id: 5, name: "Lucho", telefono: "2721295406", picture: "../../assets/selfie.PNG"},
     {id: 6, name: "Hugo", telefono: "2721295406", picture: "../../assets/selfie.PNG"},
     {id: 7, name: "Juls", telefono: "2721295406", picture: "../../assets/selfie.PNG"},
   ];

  constructor() { }

   getPatients(): Observable<Patient[]>{
      return Observable.create(observe =>{
        observe.next(this.patients);
      });
   }

   
}

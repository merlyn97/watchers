import { Injectable } from '@angular/core';
import { Patient } from '../models/patients.interface';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PatientsService {

   patients: Patient[] =[
     {id: 1, name: "Merlyn", telefono: "2721295406", picture: "../../assets/selfie.PNG"},
     {id: 2, name: "damian", telefono: "2721295406", picture: "../../assets/selfie.PNG"},
     {id: 3, name: "cologua", telefono: "2721295406", picture: "../../assets/selfie.PNG"},
     {id: 4, name: "Mike", telefono: "2721295406", picture: "../../assets/selfie.PNG"},
     {id: 5, name: "Pau", telefono: "2721295406", picture: "../../assets/selfie.PNG"},
     {id: 6, name: "Merlyn", telefono: "2721295406", picture: "../../assets/selfie.PNG"},
     {id: 7, name: "damian", telefono: "2721295406", picture: "../../assets/selfie.PNG"},
     {id: 8, name: "cologua", telefono: "2721295406", picture: "../../assets/selfie.PNG"},
     {id: 9, name: "Mike", telefono: "2721295406", picture: "../../assets/selfie.PNG"},
     {id: 10, name: "Pau", telefono: "2721295406", picture: "../../assets/selfie.PNG"},
     {id: 11, name: "Merlyn", telefono: "2721295406", picture: "../../assets/selfie.PNG"},
     {id: 12, name: "damian", telefono: "2721295406", picture: "../../assets/selfie.PNG"},
     {id: 13, name: "cologua", telefono: "2721295406", picture: "../../assets/selfie.PNG"},
     {id: 14, name: "Mike", telefono: "2721295406", picture: "../../assets/selfie.PNG"},
     {id: 15, name: "Pau", telefono: "2721295406", picture: "../../assets/selfie.PNG"},
     {id: 16, name: "Merlyn", telefono: "2721295406", picture: "../../assets/selfie.PNG"},
     {id: 17, name: "damian", telefono: "2721295406", picture: "../../assets/selfie.PNG"},
     {id: 18, name: "cologua", telefono: "2721295406", picture: "../../assets/selfie.PNG"},
     {id: 19, name: "Mike", telefono: "2721295406", picture: "../../assets/selfie.PNG"},
     {id: 20, name: "Pau", telefono: "2721295406", picture: "../../assets/selfie.PNG"}
     
   ];

  constructor() { }

   getPatients(): Observable<Patient[]>{
      return Observable.create(observe =>{
        observe.next(this.patients);
      });
   }
}

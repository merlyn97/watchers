import { Injectable } from '@angular/core';
import { Patient } from '../models/patients.interface';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PatientsService {
   patients: Patient[] =[
     {id: 1, name: "Merlyn", telefono: "2721295406", picture: "../../assets/selfie.PNG", latitud: 51.678418, longitud: 7.809007},
     {id: 2, name: "damian", telefono: "2721295406", picture: "../../assets/selfie.PNG", latitud: 41.678418, longitud: 20.809007},
     {id: 3, name: "cologua", telefono: "2721295406", picture: "../../assets/selfie.PNG", latitud: 60.678418, longitud: 30.809007},
     {id: 4, name: "Mike", telefono: "2721295406", picture: "../../assets/selfie.PNG", latitud: 21.678418, longitud: 40.809007},
     {id: 5, name: "Lucho", telefono: "2721295406", picture: "../../assets/selfie.PNG", latitud: 51.678418, longitud: 7.809007},
     {id: 6, name: "Hugo", telefono: "2721295406", picture: "../../assets/selfie.PNG", latitud: 50.678418, longitud: 111.809007},
     {id: 7, name: "Juls", telefono: "2721295406", picture: "../../assets/selfie.PNG", latitud: 51.678418, longitud: 7.809007},
     {id: 8, name: "Javi", telefono: "2711130397", picture: "../../assets/selfie.PNG", latitud: 21.678418, longitud: 111.809007}
   ];

  constructor() { }

   getPatients(): Observable<Patient[]>{
      return Observable.create(observe =>{
        observe.next(this.patients);
      });
   }

   
}

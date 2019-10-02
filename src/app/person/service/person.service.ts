import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Person } from '../model/person.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) { }

  getAllPerson(): Observable<Person[]> {
    return this.http.get<Person[]>(environment.host + 'persons');
  }

  savePerson(person: Person): Observable<Person> {
    return this.http.post<Person>(environment.host + 'persons', person);
  }
}

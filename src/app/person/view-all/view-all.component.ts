import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { PersonService } from '../service/person.service';
import { Person } from '../model/person.model';

@Pipe({
  name: 'filterBy'
})
export class FitlerPipe implements PipeTransform {
  transform(personList: Person[] = [], search: string): any {
    if (search) {
      return personList.filter(x => x.firstName.indexOf(search) > -1 || x.lastName.indexOf(search) > -1);
    }
    return personList;
  }
}

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.scss']
})
export class ViewAllComponent implements OnInit {

  personList: Person[] = [];
  search = null;

  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.personService.getAllPerson().subscribe(personList => {
      this.personList = personList;
    });
  }

}

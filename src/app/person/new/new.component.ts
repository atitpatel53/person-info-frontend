import { Component, OnInit } from '@angular/core';
import { Person } from '../model/person.model';
import { PersonService } from '../service/person.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {

  constructor(private router: Router, private personService: PersonService) { }

  ngOnInit() {
  }

  submit(person: Person): void {
    this.personService.savePerson(person).subscribe(res =>
      this.router.navigate(['person', 'all'])
    );
  }

}

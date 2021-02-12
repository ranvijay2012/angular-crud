import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const users = [
      { id: 11, name: 'Ranvijay Singh', email:'ranvijaysingh2012' },
      { id: 12, name: 'Shweta Singh', email:'shwetaysingh2012' }
    ];

    return {users};
  }

  // getUser(id): number {
  //   return users.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  // }

}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PartdataService {

  private componentListSource = new BehaviorSubject<Array<string>>([]);
  currentComponentList = this.componentListSource.asObservable();
  componentList: Array<string> = [];

  constructor() { }

}

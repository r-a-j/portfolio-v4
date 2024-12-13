import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {
  public getCurrentYear(): number {
    return new Date().getFullYear();
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { DateService } from '../../services/date.service'

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {
  @Input() public name!: string;
  public currentYear!: number;

  constructor(private dateService: DateService) {}

  ngOnInit(): void {
    this.currentYear = this.dateService.getCurrentYear();
  }
}

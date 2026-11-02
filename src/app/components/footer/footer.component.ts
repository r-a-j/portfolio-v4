import { Component, Input, OnInit, ChangeDetectionStrategy, inject } from '@angular/core';
import { DateService } from '../../services/date.service'

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {
  private dateService = inject(DateService);

  @Input() public name!: string;
  public currentYear!: number;

  public ngOnInit(): void {
    this.currentYear = this.dateService.getCurrentYear();
  }
}

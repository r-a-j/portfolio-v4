import { ChangeDetectionStrategy, Component, Input, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ABOUT_CONTENT } from '../../data/about-data';
import { DateService } from '../../services/date.service';
import { BrandMarkComponent } from '../brand-mark/brand-mark.component';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, BrandMarkComponent],
  templateUrl: './footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './footer.component.scss',
})
export class FooterComponent implements OnInit {
  private dateService = inject(DateService);

  @Input() public name = 'Raj Pawar';
  public currentYear!: number;
  public readonly pdfPath = ABOUT_CONTENT.pdfPath;

  public ngOnInit(): void {
    this.currentYear = this.dateService.getCurrentYear();
  }
}

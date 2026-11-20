import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/**
 * Minimal personal monogram mark for Raj Pawar:
 * Subtle optical calibration corner ticks framing an editorial serif "RP".
 */
@Component({
  selector: 'app-brand-mark',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <svg
      [attr.width]="size()"
      [attr.height]="size()"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      class="brand-svg"
    >
      <!-- Optical calibration corner ticks -->
      <path
        d="M3 10V4.5C3 3.67 3.67 3 4.5 3H10"
        stroke="var(--accent)"
        stroke-width="1.6"
        stroke-linecap="round"
      />
      <path
        d="M26 3H31.5C32.33 3 33 3.67 33 4.5V10"
        stroke="var(--border-strong)"
        stroke-width="1.4"
        stroke-linecap="round"
      />
      <path
        d="M33 26V31.5C33 32.33 32.33 33 31.5 33H26"
        stroke="var(--accent)"
        stroke-width="1.6"
        stroke-linecap="round"
      />
      <path
        d="M10 33H4.5C3.67 33 3 32.33 3 31.5V26"
        stroke="var(--border-strong)"
        stroke-width="1.4"
        stroke-linecap="round"
      />
      <!-- Editorial serif monogram -->
      <text
        x="18"
        y="23"
        text-anchor="middle"
        fill="var(--text-primary)"
        font-family="Newsreader, Georgia, serif"
        font-size="15.5"
        font-weight="600"
        letter-spacing="-0.6"
      >RP</text>
    </svg>
  `,
  styles: `
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      line-height: 0;
    }

    .brand-svg {
      display: block;
      transition: transform 0.2s ease;
    }
  `,
})
export class BrandMarkComponent {
  readonly size = input<number>(34);
}

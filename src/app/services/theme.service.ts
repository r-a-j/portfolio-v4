import { DOCUMENT } from '@angular/common';
import { Injectable, computed, inject, signal } from '@angular/core';

export type ThemeId =
  | 'charcoal-brass'
  | 'monochrome'
  | 'paper-ink'
  | 'charcoal-sage';

export type ThemeMode = 'dark' | 'light';

export interface ThemeOption {
  id: ThemeId;
  name: string;
  shortName: string;
  mode: ThemeMode;
  description: string;
  canvasColor: string;
  surfaceColor: string;
  accentColor: string;
}

/**
 * Single source of truth for the site's default theme.
 * Change this one constant (and the fallback in src/index.html) to lock a different default.
 */
export const DEFAULT_THEME_ID: ThemeId = 'charcoal-brass';
export const DEFAULT_LIGHT_THEME_ID: ThemeId = 'paper-ink';

const STORAGE_KEY = 'rp-theme';
const LAST_DARK_KEY = 'rp-last-dark-theme';

export const THEMES: ThemeOption[] = [
  {
    id: 'charcoal-brass',
    name: 'Charcoal & Brass',
    shortName: 'Brass',
    mode: 'dark',
    description: 'Warm charcoal with muted brass accent',
    canvasColor: '#111110',
    surfaceColor: '#181816',
    accentColor: '#d49a47',
  },
  {
    id: 'monochrome',
    name: 'Monochrome',
    shortName: 'Mono',
    mode: 'dark',
    description: 'Neutral obsidian and silver, zero color noise',
    canvasColor: '#0c0c0d',
    surfaceColor: '#131315',
    accentColor: '#e4e4e7',
  },
  {
    id: 'paper-ink',
    name: 'Paper & Ink',
    shortName: 'Paper',
    mode: 'light',
    description: 'Warm editorial paper with Prussian blue ink',
    canvasColor: '#f6f3ec',
    surfaceColor: '#ffffff',
    accentColor: '#1e4b7a',
  },
  {
    id: 'charcoal-sage',
    name: 'Charcoal & Sage',
    shortName: 'Sage',
    mode: 'dark',
    description: 'Graphite dark surface with calm sage accent',
    canvasColor: '#101211',
    surfaceColor: '#171a18',
    accentColor: '#5fa891',
  },
];

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly doc = inject(DOCUMENT);

  readonly themes = THEMES;
  readonly activeThemeId = signal<ThemeId>(this.readInitialTheme());

  readonly currentTheme = computed(
    () =>
      this.themes.find((t) => t.id === this.activeThemeId()) ?? this.themes[0],
  );

  readonly isLight = computed(() => this.currentTheme().mode === 'light');

  constructor() {
    this.applyToDom(this.activeThemeId());
  }

  setTheme(id: ThemeId): void {
    const valid = this.themes.find((t) => t.id === id);
    if (!valid) return;

    this.activeThemeId.set(id);
    this.applyToDom(id);

    try {
      localStorage.setItem(STORAGE_KEY, id);
      if (valid.mode === 'dark') {
        localStorage.setItem(LAST_DARK_KEY, id);
      }
    } catch {
      // Storage unavailable (private browsing); theme still updates in memory.
    }
  }

  toggleLightDark(): void {
    if (this.isLight()) {
      const lastDark = this.readLastDarkTheme();
      this.setTheme(lastDark);
    } else {
      this.setTheme(DEFAULT_LIGHT_THEME_ID);
    }
  }

  private readInitialTheme(): ThemeId {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as ThemeId | null;
      if (saved && this.themes.some((t) => t.id === saved)) {
        return saved;
      }
    } catch {
      // Ignore storage errors.
    }
    return DEFAULT_THEME_ID;
  }

  private readLastDarkTheme(): ThemeId {
    try {
      const saved = localStorage.getItem(LAST_DARK_KEY) as ThemeId | null;
      if (
        saved &&
        this.themes.some((t) => t.id === saved && t.mode === 'dark')
      ) {
        return saved;
      }
    } catch {
      // Ignore storage errors.
    }
    return DEFAULT_THEME_ID;
  }

  private applyToDom(id: ThemeId): void {
    const theme = this.themes.find((t) => t.id === id) ?? this.themes[0];
    const root = this.doc.documentElement;
    root.dataset['theme'] = theme.id;
    root.classList.toggle('dark', theme.mode === 'dark');
    root.classList.toggle('light', theme.mode === 'light');

    const metaTheme = this.doc.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
      metaTheme.setAttribute('content', theme.canvasColor);
    }
  }
}

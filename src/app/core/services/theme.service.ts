import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { LocalStorageService } from './localstorage.service';

@Injectable({
	providedIn: 'root'
})
export class ThemeService {
	private document = inject(DOCUMENT);
	private platformId = inject(PLATFORM_ID);

	constructor(private localStorageService: LocalStorageService) {
		this.loadSavedTheme();
	}

	switchTheme(theme: string) {
		if (isPlatformBrowser(this.platformId)) {
			let themeLink = this.document.getElementById('app-theme') as HTMLLinkElement;

			if (!themeLink) {
				themeLink = this.document.createElement('link');
				themeLink.rel = 'stylesheet';
				themeLink.id = 'app-theme';
				this.document.head.appendChild(themeLink);
			}

			themeLink.href = `assets/styles/themes/${theme}.css`;

			this.localStorageService.setItem('selectedTheme', theme);
		}
	}

	loadSavedTheme() {
		if (isPlatformBrowser(this.platformId)) {
			const savedTheme = this.localStorageService.getItem('selectedTheme') || 'aura-light-teal';
			this.switchTheme(savedTheme);
		}
	}
}

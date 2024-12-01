import { inject, Injectable } from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';

@Injectable({
	providedIn: 'root'
})
export class LanguageService {
	private translocoService = inject(TranslocoService);

	// Set the active language
	setActiveLang(lang: string): void {
		this.translocoService.setActiveLang(lang);
	}

	// Get the active language
	getActiveLang(): string {
		return this.translocoService.getActiveLang();
	}

	// Get the list of available languages
	getAvailableLangs(): string[] {
		return this.translocoService.getAvailableLangs() as string[];
	}
}

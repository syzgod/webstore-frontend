import { UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LanguageService } from '@core/services/language.service';
import { LocalStorageService } from '@core/services/localstorage.service';
import { ThemeService } from '@core/services/theme.service';
import { TranslocoModule } from '@jsverse/transloco';
import { ButtonModule } from 'primeng/button';

@Component({
	selector: 'app-layout-navigation',
	standalone: true,
	imports: [UpperCasePipe, TranslocoModule, ButtonModule],
	templateUrl: './layout-navigation.component.html',
	styleUrl: './layout-navigation.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutNavigationComponent {
	currentTheme = '';

	private languageService = inject(LanguageService);
	public themeService = inject(ThemeService);
	private localStorageService = inject(LocalStorageService);

	constructor() {
		this.currentTheme = this.localStorageService.getItem('selectedTheme') || 'aura-light-teal';
	}

	changeLanguage(event: Event): void {
		const target = event.target as HTMLSelectElement;
		const selectedLanguage = target.value;
		this.languageService.setActiveLang(selectedLanguage);
	}

	get currentLanguage(): string {
		return this.languageService.getActiveLang();
	}

	get availableLanguages(): string[] {
		return this.languageService.getAvailableLangs();
	}

	toggleTheme() {
		this.currentTheme = this.currentTheme === 'aura-light-teal' ? 'aura-dark-teal' : 'aura-light-teal';
		this.themeService.switchTheme(this.currentTheme);
		this.localStorageService.setItem('selectedTheme', this.currentTheme);
	}

	get icon() {
		return this.currentTheme === 'aura-light-teal' ? 'pi pi-moon' : 'pi pi-sun';
	}
}

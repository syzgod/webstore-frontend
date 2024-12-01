import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
	selector: 'app-layout-banner',
	standalone: true,
	imports: [TranslocoModule],
	templateUrl: './layout-banner.component.html',
	styleUrl: './layout-banner.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutBannerComponent {
	isBannerVisible = true;

	onClose(): void {
		this.isBannerVisible = false;
	}
}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LayoutBannerComponent } from './layout-banner/layout-banner.component';
import { LayoutComponent } from '../layout.component';
import { LayoutNavigationComponent } from './layout-navigation/layout-navigation.component';

@Component({
	selector: 'app-layout-navbar',
	standalone: true,
	imports: [LayoutBannerComponent, LayoutComponent, LayoutNavigationComponent],
	templateUrl: './layout-navbar.component.html',
	styleUrl: './layout-navbar.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutNavbarComponent {}

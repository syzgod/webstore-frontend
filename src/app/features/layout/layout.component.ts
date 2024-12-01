import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { AsyncPipe, NgClass } from '@angular/common';
import { LayoutNavbarComponent } from './layout-navbar/layout-navbar.component';

@Component({
	selector: 'app-layout',
	standalone: true,
	imports: [NgClass, AsyncPipe, LayoutNavbarComponent],
	templateUrl: './layout.component.html',
	styleUrl: './layout.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None
})
export class LayoutComponent {
	isAdminPage: boolean = false;
}

import { ChangeDetectionStrategy, Component, inject, OnInit, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarModule } from 'primeng/sidebar';
import { LayoutComponent } from '@features/layout/layout.component';
import { PrimeNGConfig } from 'primeng/api';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, SidebarModule, LayoutComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
	private readonly primengConfig = inject(PrimeNGConfig);

	title = 'webstore-frontend';

	ngOnInit(): void {
		this.primengConfig.ripple = true;
	}
}

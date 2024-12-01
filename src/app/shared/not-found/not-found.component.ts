import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
	selector: 'app-not-found',
	standalone: true,
	imports: [ButtonModule, RouterLink],
	templateUrl: './not-found.component.html',
	styleUrl: './not-found.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None
})
export class NotFoundComponent {}

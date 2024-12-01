import { Routes } from '@angular/router';
// import { authGuard } from '@core/guards/auth.guard';
// import { roleGuard } from '@core/guards/role.guard';
// import { UserRole } from '@core/store/user';

const LandingComponent = () => import('./features/landing/landing.component').then(m => m.LandingComponent);
//
// const CheckoutComponent = () => import('./features/checkout/checkout.component').then(m => m.CheckoutComponent);
//
// const ShopRoutes = () => import('./features/shop/shop.routes').then(m => m.routes);
//
// const AuthRoutes = () => import('./features/auth/auth.routes').then(m => m.routes);
//
// const AdminRoutes = () => import('./features/admin/admin.routes').then(m => m.routes);
//
// const ProfileComponent = () => import('./features/profile/profile.component').then(m => m.ProfileComponent);
//
// const BlogComponent = () => import('./features/blog/blog.component').then(m => m.BlogComponent);
// const BlogPostComponent = () => import('./features/blog/blog-post/blog-post.component').then(m => m.BlogPostComponent);
//
const NotFoundComponent = () => import('./shared/not-found/not-found.component').then(m => m.NotFoundComponent);

export const routes: Routes = [
	{
		path: '',
		redirectTo: 'landing',
		pathMatch: 'full'
	},
	{
		path: 'landing',
		loadComponent: LandingComponent
	},
	// {
	// 	path: 'checkout',
	// 	loadComponent: CheckoutComponent
	// },
	// {
	// 	path: 'shop',
	// 	loadChildren: ShopRoutes
	// },
	// {
	// 	path: 'auth',
	// 	loadChildren: AuthRoutes
	// },
	// {
	// 	path: 'admin',
	// 	loadChildren: AdminRoutes,
	// 	canActivate: [authGuard, roleGuard],
	// 	data: {
	// 		roles: [UserRole.ADMIN]
	// 	}
	// },
	// {
	// 	path: 'profile',
	// 	loadComponent: ProfileComponent
	// },
	// {
	// 	path: 'blog',
	// 	children: [
	// 		{
	// 			path: '',
	// 			loadComponent: BlogComponent
	// 		},
	// 		{
	// 			path: ':id',
	// 			loadComponent: BlogPostComponent
	// 		}
	// 	]
	// },
	{
		path: '**',
		loadComponent: NotFoundComponent
	}
];

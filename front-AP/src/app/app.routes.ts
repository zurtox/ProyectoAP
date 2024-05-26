import { Routes } from '@angular/router';
import { SelectedMoviePageComponent } from './shared/pages/selected/selected-movie-page.component';
import { SelectedSerieComponent } from './shared/pages/selected-serie/selected-serie.component';
import { CommentsComponent } from './shared/pages/comments/comments.component';
import { LoginPageComponent } from './access/pages/login-page/login-page.component';
import { ProfileComponent } from './shared/pages/profile/profile.component';
import { SignUpPageComponent } from './access/pages/sign-up-page/sign-up-page.component';
import { CartPageComponent } from './user/pages/cart/cart-page.component';
import { HistoryPageComponent } from './user/pages/history/history-page.component';
import { FavouritesPageComponent } from './user/pages/favourites/favourites-page.component';
import { LandingPageComponent } from './shared/pages/landing-page/landing-page.component';
import { SearchPageComponent } from './shared/pages/search-page/search-page.component';
import { AdminLandingPageComponent } from './admin/pages/admin-landing-page/admin-landing-page.component';
import { ActorsPageComponent } from './admin/pages/actors-page/actors-page.component';
import { StatisticsPageComponent } from './admin/pages/statistics/statistics-page.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginPageComponent
    },
    {
      path: 'landing',
      component: LandingPageComponent

    },
    {
        path: 'register',
        component: SignUpPageComponent
    },
    {
        path: 'comments',
        component: CommentsComponent
    },
    {
        path: 'selected-movie',
        component: SelectedMoviePageComponent
    },
    {
        path: 'selected-serie',
        component: SelectedSerieComponent
    },
    {
        path: 'profile',
        component: ProfileComponent
    },
    {
      path: 'cart',
      component: CartPageComponent
    },
    {
      path: 'history',
      component: HistoryPageComponent
    },
    {
      path: 'favorites',
      component: FavouritesPageComponent
    },
    {
      path: 'search',
      component: SearchPageComponent
    },
    {
      path: 'admin-landing',
      component: AdminLandingPageComponent
    },
    {
      path: 'actors',
      component: ActorsPageComponent
    },
    {
      path: 'statistics',
      component: StatisticsPageComponent
    }

];


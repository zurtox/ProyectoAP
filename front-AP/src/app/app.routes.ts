import { Routes } from '@angular/router';
import { SelectedMoviePageComponent } from './shared/pages/selected/selected-movie-page.component';
import { SelectedSerieComponent } from './shared/pages/selected-serie/selected-serie.component';
import { CommentsComponent } from './shared/pages/comments/comments.component';

export const routes: Routes = [
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
    }

];


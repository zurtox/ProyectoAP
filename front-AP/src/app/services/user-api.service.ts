import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../interfaces/loginResponse.interface';
import { Observable, catchError, of } from 'rxjs';
import { ContentResponse } from '../interfaces/contentResponse.interface';
import { FavoriteResponse } from '../interfaces/favoriteResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  baseURL: string = 'http://localhost:3001'

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<LoginResponse | undefined>{
    return this.http.post<LoginResponse>(`${this.baseURL}/login`, {email, password})
    .pipe(
      catchError(error => of(undefined))
    )
  }

  addFavorite(id: string): Observable<any>{
    return this.http.post<any>(`${this.baseURL}/favoriteMovies`, {content: id})
    .pipe(
      catchError(error => of(undefined))
    )
  }

  getAllFavorites(): Observable<FavoriteResponse | undefined>{
    return this.http.get<FavoriteResponse>(`${this.baseURL}/favoriteMovies`)
    .pipe(
      catchError(error => of(undefined))
    )
  }

}

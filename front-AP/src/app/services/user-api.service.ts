import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../interfaces/loginResponse.interface';
import { BehaviorSubject, Observable, catchError, of } from 'rxjs';
import { ContentResponse } from '../interfaces/contentResponse.interface';
import { FavoriteResponse } from '../interfaces/favoriteResponse.interface';
import { User, UserResponse } from '../interfaces/userResponse.interface';
import { CartResponse } from '../interfaces/cartResponse.interface';
import { UserToPost } from '../interfaces/userToPost.interface';
import { HistoryResponse } from '../interfaces/historyResponse.interface';

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

  addToCart(id: string): Observable<any>{
    return this.http.post<any>(`${this.baseURL}/cart`, {content: id})
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

  getUser(): Observable<UserResponse | undefined>{
    return this.http.get<UserResponse>(`${this.baseURL}/actualUser`)
    .pipe(
      catchError(error => of(undefined))
    )
  }

  getCartContent(): Observable<CartResponse | undefined>{
    return this.http.get<CartResponse>(`${this.baseURL}/allCart`)
    .pipe(
      catchError(error => of(undefined))
    )
  }

  addPurchase(): Observable<any>{
    return this.http.post<any>(`${this.baseURL}/purchases`, {paymentMethod: 3})
    .pipe(
      catchError(error => of(undefined))
    )
  }

  signUp(newUser: UserToPost): Observable<any> {
    return this.http.post<any>(`${this.baseURL}/signUp`, {
      email: newUser.email,
      password: newUser.password,
      firstName: newUser.firstName,
      firstLastname: newUser.firstLastName,
      secondLastname: newUser.secondLastName,
      secondName: newUser.secondName,
      personalId: newUser.personalId,
      birthDate: newUser.birthDate,
      phone: newUser.phone,
      photo: newUser.photo,
      username: newUser.username,
      nationality: newUser.nationality,
      comunity: newUser.comunity,
      gender: newUser.gender,
      admin: false
    });
  }


  getHistory3m(): Observable<HistoryResponse | undefined>{
    return this.http.get<HistoryResponse>(`${this.baseURL}/purchase/last3Months`)
    .pipe(
      catchError(error => of(undefined))
    )
  }

  getHistory6m(): Observable<HistoryResponse | undefined>{
    return this.http.get<HistoryResponse>(`${this.baseURL}/purchase/last6Months`)
    .pipe(
      catchError(error => of(undefined))
    )
  }


  getHistory1y() : Observable<HistoryResponse | undefined>{
    return this.http.get<HistoryResponse>(`${this.baseURL}/purchase/lastYear`)
    .pipe(
      catchError(error => of(undefined))
    )
  }

}

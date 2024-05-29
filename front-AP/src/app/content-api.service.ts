import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { CategoryResponse } from './interfaces/categoryResponse.interface';
import { ContentResponse } from './interfaces/contentResponse.interface';
import { UserToPost } from './interfaces/userToPost.interface';

@Injectable({
  providedIn: 'root'
})
export class ContentAPIService {

  baseURL: string = 'http://localhost:3001'

  constructor(private http: HttpClient) {}

  getAllCategories(): Observable<CategoryResponse | undefined>{
    return this.http.get<CategoryResponse>(`${this.baseURL}/getAllCategories`)
    .pipe(
      catchError(error => of(undefined))
    )
  }

  getAllContent(): Observable<ContentResponse | undefined>{
    return this.http.get<ContentResponse>(`${this.baseURL}/getAllContent`)
    .pipe(
      catchError(error => of(undefined))
    )
  }

  getContentByCategory(id: string): Observable<ContentResponse | undefined>{
    return this.http.get<ContentResponse>(`${this.baseURL}/getContentByCategory/${id}`)
    .pipe(
      catchError(error => of(undefined))
    )
  }

  getContentById(id: string): Observable<ContentResponse | undefined>{
    return this.http.get<ContentResponse>(`${this.baseURL}/getContentById/${id}`)
    .pipe(
      catchError(error => of(undefined))
    )
  }

  getAllMovies(): Observable<ContentResponse | undefined>{
    return this.http.get<ContentResponse>(`${this.baseURL}/movies`)
    .pipe(
      catchError(error => of(undefined))
    )
  }

  getAllSeries(): Observable<ContentResponse | undefined>{
    return this.http.get<ContentResponse>(`${this.baseURL}/series`)
    .pipe(
      catchError(error => of(undefined))
    )
  }

  getAllDocumentaries(): Observable<ContentResponse | undefined>{
    return this.http.get<ContentResponse>(`${this.baseURL}/documentals`)
    .pipe(
      catchError(error => of(undefined))
    )
  }

  uploadImage(formData: FormData): Observable<any> {
    return this.http.post<any>(`${this.baseURL}/photos`, formData);
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
}

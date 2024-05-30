import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { CategoryResponse } from '../interfaces/categoryResponse.interface';
import { ContentResponse } from '../interfaces/contentResponse.interface';
import { ContentByViewsResponse } from '../interfaces/contentByViewsResponse.interface';
import { PersonResponse } from '../interfaces/personResponse.interface';
import { PurchaseResponse } from '../interfaces/purchaseResponse.interface';
import { GenderResponse } from '../interfaces/genderResponse.interface';
import { CommunityResponse } from '../interfaces/communityResponse.interface';

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

  getCategoryById(id: string): Observable<CategoryResponse | undefined>{
    return this.http.get<CategoryResponse>(`${this.baseURL}/getCategoryById/${id}`)
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

  insertRecentlyViewed(id: string): Observable<any> {
    return this.http.post<any>(`${this.baseURL}/recentlyViewed`, {content: id});
  }

  getTopContentByViews(): Observable<ContentByViewsResponse | undefined>{
    return this.http.get<ContentByViewsResponse>(`${this.baseURL}/getTop250ContentByViews`)
    .pipe(
      catchError(error => of(undefined))
    )
  }

  getPurchaseContentById(id: string): Observable<PurchaseResponse | undefined>{
    return this.http.get<PurchaseResponse>(`${this.baseURL}/purchaseContents/${id}`)
    .pipe(
      catchError(error => of(undefined))
    )

  }

  getAllPersons(): Observable<PersonResponse | undefined>{
    return this.http.get<PersonResponse>(`${this.baseURL}/persons`)
    .pipe(
      catchError(error => of(undefined))
    )
  }

  getGenders(): Observable<GenderResponse | undefined>{
    return this.http.get<GenderResponse>(`${this.baseURL}/enums/genders`)
    .pipe(
      catchError(error => of(undefined))
    )
  }

  getCommunities(): Observable<CommunityResponse | undefined>{
    return this.http.get<CommunityResponse>(`${this.baseURL}/getAllCommunities`)
    .pipe(
      catchError(error => of(undefined))
    )
  }

  deletePerson(id: string): Observable<any>{
    return this.http.delete<any>(`${this.baseURL}/persons/${id}`)
    .pipe(
      catchError(error => of(undefined))
    )
  }

  deleteContent(id: string): Observable<any>{
    return this.http.delete<any>(`${this.baseURL}/deleteContent/${id}`)
    .pipe(
      catchError(error => of(undefined))
    )
  }

  
}

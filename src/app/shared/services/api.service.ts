import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  BalanceToken,
  Response,
  TransactionHistory,
  LoginResponse,
} from '../models/model';
import { environment } from 'src/environments/environment';

//Service request API
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly httpClient = inject(HttpClient);
  private readonly apiUrl = environment.apiUrl;
  login(username: string): Observable<LoginResponse> {
    return this.httpClient.post<LoginResponse>(
      `${environment.apiUrl}/ledger/login`,
      {
        username,
      }
    );
  }

  getBalanceToken(username: string): Observable<BalanceToken> {
    return this.httpClient.get<BalanceToken>(
      `${environment.apiUrl}/ledger/getBalance`,
      {
        params: {
          username,
        },
      }
    );
  }

  buyToken(
    username: string,
    totalToken: number,
    note: string,
    totalPrice: number
  ): Observable<Response> {
    return this.httpClient.post<Response>(
      `${environment.apiUrl}/transaction/buyToken`,
      {
        username,
        totalToken,
        note,
        totalPrice,
      }
    );
  }

  playGame(
    username: string,
    totalToken: number,
    gameName: string
  ): Observable<Response> {
    return this.httpClient.post<Response>(
      `${environment.apiUrl}/transaction/playGame`,
      {
        username,
        totalToken,
        gameName,
      }
    );
  }

  getTransactionHistory(username: string): Observable<TransactionHistory[]> {
    return this.httpClient.get<TransactionHistory[]>(
      `${environment.apiUrl}/transaction/getTransactions`,
      {
        params: {
          username,
        },
      }
    );
  }
}

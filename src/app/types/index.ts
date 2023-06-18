import { HttpErrorResponse } from '@angular/common/http';

export interface GetAllResponse {
  limit: number;
  skip: number;
  total: number;
}

export interface BadRequestResponse {
  message: string;
}

export interface SelectOption {
  label: string;
  value: number | string;
}

export interface HttpRequestState<T> {
  isLoading: boolean;
  value?: T;
  error?: HttpErrorResponse | Error;
}

import { Observable, catchError, map, of, startWith } from 'rxjs';
import { HttpRequestState } from '../types';

export function httpRequestStates<T>(
  source$: Observable<T>
): Observable<HttpRequestState<T>> {
  return source$.pipe(
    map((value) => ({ isLoading: false, value: value })),
    catchError((error) => of({ isLoading: false, error })),
    startWith({ isLoading: true })
  );
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TestService {

  private apiUrl = 'https://xpiuat.indiraivf.in/Magicxpi4.13/MgWebRequester.dll?appname=IFShis_pwa&prgname=HTTP&arguments=-Ahttp_pwa%23verify_clinic_by_qr_code&ClientId=pwa&ClientSecret=boGKpuDttM';

  constructor(private http: HttpClient) {}

  verifyClinicByQrCode(payload: { Code: string; CurrentDateTime: string }): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiUrl, payload, { headers });
  }
}

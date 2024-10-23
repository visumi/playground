import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { CardResponse } from '../models/test.model';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  //Trocar o valor do result para validar
  result: CardResponse = {
    "trace_id": "05caba22-f35b-48fe-bf40-310f50decef4",
    "data": {
      "cartoes": [
        {
          "numero": "4227216689203",
          "codigo_seguranca": "022",
          "limite": 11048,
          "validade": "20/34",
          "nome": "Sam Cruickshank",
          "tipo": "debito",
          "legado": false,
          "bandeira": "mastercard"
        },
        {
          "numero": "6520-6252-4011-4721-3029",
          "codigo_seguranca": "052",
          "limite": 4315,
          "validade": "21/46",
          "nome": "Gabriel Mitchell",
          "tipo": "ambos",
          "legado": true,
          "bandeira": "mastercard"
        },
        {
          "numero": "6011-6215-1826-1440-7649",
          "codigo_seguranca": "471",
          "limite": 24433,
          "validade": "12/40",
          "nome": "Lorenzo Pfannerstill",
          "tipo": "credito",
          "legado": true,
          "bandeira": "discover"
        },
        {
          "numero": "4343388179418",
          "codigo_seguranca": "142",
          "limite": 9372,
          "validade": "16/34",
          "nome": "Mr. Byron Grimes",
          "tipo": "debito",
          "legado": false,
          "bandeira": "american_express"
        },
        {
          "numero": "3579-2168-7929-1273",
          "codigo_seguranca": "735",
          "limite": 19765,
          "validade": "17/26",
          "nome": "Gordon Hodkiewicz DVM",
          "tipo": "credito",
          "legado": false,
          "bandeira": "american_express"
        },
        {
          "numero": "3798-515285-22096",
          "codigo_seguranca": "321",
          "limite": 16142,
          "validade": "09/25",
          "nome": "Jimmy Gleason",
          "tipo": "debito",
          "legado": true,
          "bandeira": "mastercard"
        },
        {
          "numero": "3052-000977-5603",
          "codigo_seguranca": "469",
          "limite": 12448,
          "validade": "16/38",
          "nome": "Herbert Zulauf",
          "tipo": "ambos",
          "legado": false,
          "bandeira": "mastercard"
        },
        {
          "numero": "4361051912071",
          "codigo_seguranca": "501",
          "limite": 24055,
          "validade": "07/43",
          "nome": "Jean Shanahan",
          "tipo": "credito",
          "legado": false,
          "bandeira": "mastercard"
        },
        {
          "numero": "3469-933517-97450",
          "codigo_seguranca": "803",
          "limite": 23800,
          "validade": "13/37",
          "nome": "Dr. Tami Dickinson",
          "tipo": "ambos",
          "legado": false,
          "bandeira": "visa"
        },
        {
          "numero": "6491-6209-6839-5879-6288",
          "codigo_seguranca": "455",
          "limite": 2052,
          "validade": "22/29",
          "nome": "Lorraine Spencer",
          "tipo": "debito",
          "legado": false,
          "bandeira": "discover"
        },
        {
          "numero": "6442-9529-5310-6585",
          "codigo_seguranca": "663",
          "limite": 27218,
          "validade": "04/49",
          "nome": "Fannie Osinski",
          "tipo": "debito",
          "legado": false,
          "bandeira": "discover"
        },
        {
          "numero": "2642-8140-1816-9197",
          "codigo_seguranca": "013",
          "limite": 8362,
          "validade": "17/50",
          "nome": "Ann Swift",
          "tipo": "credito",
          "legado": true,
          "bandeira": "visa"
        }
      ]
    }
  };

  constructor() { }

  getUserCardByDocument(document: string): Observable<CardResponse> {
    console.log(document);
    return of(this.result).pipe(delay(1000));
  }

}

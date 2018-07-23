import { Injectable } from '@angular/core';
import { Condominium } from '../beans';

@Injectable({
    providedIn: 'root'
})
export class SharedService {
    public condominio: Condominium;


    constructor() {
    }


}

import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Receita } from '../models/receita.model';

@Injectable({
    providedIn: 'root',
})
export class ReceitasService {
    private readonly url = 'assets/mock/receitas.json';
    private http = inject(HttpClient);

    // Método para buscar todas as receitas
    public buscarTodas(): Observable<Receita[]> {
        return this.http.get<Receita[]>(this.url);
    }
}

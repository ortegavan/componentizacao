import { Observable } from 'rxjs';
import { Coluna } from './coluna.model';

export type Tabela<T> = {
    colunas: Coluna[];
    dados: Observable<T[]>;
};

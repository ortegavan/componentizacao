import { Observable } from 'rxjs';
import { Coluna } from './coluna.model';
import { Acao } from './acao.model';

export type Tabela<T> = {
    colunas: Coluna[];
    acoes: Acao<T>[];
    dados: Observable<T[]>;
};

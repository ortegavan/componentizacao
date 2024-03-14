import { TipoColuna } from '../enums/tipo-coluna.enum';
import { TipoPipe } from '../enums/tipo-pipe.enum';

export type Coluna = {
    nome: string;
    titulo: string;
    tipo: TipoColuna;
    pipe: TipoPipe;
};

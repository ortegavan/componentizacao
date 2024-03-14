import { Pipe, PipeTransform } from '@angular/core';
import { TipoPipe } from '../enums/tipo-pipe.enum';
import { DatePipe } from '@angular/common';

@Pipe({
    name: 'pipeManager',
    standalone: true,
})
export class PipeManagerPipe implements PipeTransform {
    transform(dado: string, tipo: TipoPipe): string {
        switch (tipo) {
            case TipoPipe.data:
                const data = new Date(dado);
                const pipe = new DatePipe('pt-BR');
                return pipe.transform(data, 'dd/MM/yyyy') || '';
            default:
                return dado;
        }
    }
}

import { Component, Input, OnChanges } from '@angular/core';
import { Tabela } from '../../models/tabela.model';
import { MatTableModule } from '@angular/material/table';

@Component({
    selector: 'app-tabela',
    standalone: true,
    imports: [MatTableModule],
    templateUrl: './tabela.component.html',
    styleUrl: './tabela.component.css',
})
export class TabelaComponent implements OnChanges {
    @Input({ required: true }) origem!: Tabela<any>;
    protected colunas: string[] = [];

    public ngOnChanges(): void {
        this.colunas = this.origem.colunas.map((coluna) => coluna.nome);
    }
}

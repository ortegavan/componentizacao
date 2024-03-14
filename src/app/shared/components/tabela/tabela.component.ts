import { Component, Input, OnChanges } from '@angular/core';
import { Tabela } from '../../models/tabela.model';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { PipeManagerPipe } from '../../pipes/pipe-manager.pipe';

@Component({
    selector: 'app-tabela',
    standalone: true,
    templateUrl: './tabela.component.html',
    styleUrl: './tabela.component.css',
    imports: [
        MatTableModule,
        MatButtonModule,
        MatMenuModule,
        MatIconModule,
        PipeManagerPipe,
    ],
})
export class TabelaComponent implements OnChanges {
    @Input({ required: true }) origem!: Tabela<any>;
    protected colunas: string[] = [];

    public ngOnChanges(): void {
        this.colunas = this.origem.colunas.map((coluna) => coluna.nome);
    }
}

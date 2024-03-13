import { Component, OnInit, inject } from '@angular/core';
import { ReceitasService } from '../../services/receitas.service';
import { MatTableModule } from '@angular/material/table';
import { Tabela } from '../../../shared/models/tabela.model';
import { Receita } from '../../models/receita.model';
import { TabelaComponent } from '../../../shared/components/tabela/tabela.component';

@Component({
    selector: 'app-receitas',
    standalone: true,
    templateUrl: './receitas.component.html',
    styleUrl: './receitas.component.css',
    imports: [MatTableModule, TabelaComponent],
})
export class ReceitasComponent implements OnInit {
    private service = inject(ReceitasService);
    protected tabela = {} as Tabela<Receita>;

    public ngOnInit(): void {
        this.criarTabela();
    }

    private criarTabela(): void {
        this.tabela.dados = this.service.buscarTodas();
        this.tabela.colunas = [
            { titulo: 'Nome', nome: 'nome' },
            { titulo: 'Categoria', nome: 'categoria' },
            { titulo: 'Tempo de preparo', nome: 'tempoPreparo' },
            { titulo: 'Rendimento', nome: 'rendimento' },
            { titulo: 'Criado em', nome: 'dataCadastro' },
            { titulo: 'Ações', nome: 'acoes' },
        ];
    }
}

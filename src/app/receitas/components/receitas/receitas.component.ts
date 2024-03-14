import { Component, OnInit, inject } from '@angular/core';
import { ReceitasService } from '../../services/receitas.service';
import { MatTableModule } from '@angular/material/table';
import { Tabela } from '../../../shared/models/tabela.model';
import { Receita } from '../../models/receita.model';
import { TabelaComponent } from '../../../shared/components/tabela/tabela.component';
import { TipoColuna } from '../../../shared/enums/tipo-coluna.enum';
import { TipoPipe } from '../../../shared/enums/tipo-pipe.enum';

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
        this.tabela.acoes = [
            {
                titulo: 'Ver detalhes',
                icone: 'read_more',
                acao: this.verDetalhes.bind(this),
            },
            {
                titulo: 'Editar',
                icone: 'edit_note',
                acao: this.editar.bind(this),
            },
            {
                titulo: 'Excluir',
                icone: 'delete_sweep',
                acao: this.excluir.bind(this),
            },
        ];
        this.tabela.colunas = [
            {
                titulo: 'Nome',
                nome: 'nome',
                tipo: TipoColuna.conteudo,
                pipe: TipoPipe.texto,
            },
            {
                titulo: 'Categoria',
                nome: 'categoria',
                tipo: TipoColuna.conteudo,
                pipe: TipoPipe.texto,
            },
            {
                titulo: 'Tempo de preparo',
                nome: 'tempoPreparo',
                tipo: TipoColuna.conteudo,
                pipe: TipoPipe.texto,
            },
            {
                titulo: 'Rendimento',
                nome: 'rendimento',
                tipo: TipoColuna.conteudo,
                pipe: TipoPipe.texto,
            },
            {
                titulo: 'Criado em',
                nome: 'dataCadastro',
                tipo: TipoColuna.conteudo,
                pipe: TipoPipe.data,
            },
            {
                titulo: '',
                nome: 'acoes',
                tipo: TipoColuna.acao,
                pipe: TipoPipe.texto,
            },
        ];
    }

    public verDetalhes(receita: Receita): void {
        console.log('Ver detalhes');
    }

    public editar(receita: Receita): void {
        console.log('Editar');
    }

    public excluir(receita: Receita): void {
        console.log('Excluir');
    }
}

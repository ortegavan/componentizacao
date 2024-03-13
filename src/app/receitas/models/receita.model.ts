export type Receita = {
    id: number;
    nome: string;
    ingredientes: string;
    modoPreparo: string;
    tempoPreparo: string;
    rendimento: string;
    categoria: string;
    foto: string;
    favorito: boolean;
    dataCadastro: Date;
    dataAtualizacao: Date;
    usuarioId: number;
};

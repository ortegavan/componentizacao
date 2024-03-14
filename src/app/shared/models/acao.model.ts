export type Acao<T> = {
    titulo: string;
    icone: string;
    acao: (item: T) => void;
};

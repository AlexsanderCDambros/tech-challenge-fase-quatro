export interface ITransacao {
    id?: string;
		userId: string;
		descricao: string;
		tipo: string;
		metodo: string;
		valor: number;
		data: string;
}

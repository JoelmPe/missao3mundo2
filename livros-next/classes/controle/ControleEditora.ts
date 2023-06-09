import Editora from "../modelo/Editora";

const editoras : Array<Editora> = [{
    codEditora: 1,
    nome: "Novatec Editora"
},{
    codEditora: 2,
    nome: "Cengage Learning"
},{
    codEditora: 3,
    nome: " Alta Books"
}];

export default class ControleEditora {
    static getNomeEditora(codEditora: number) {
        throw new Error("Method not implemented.");
    }
    public getNomeEditora(codEditora: number) {
        const resultados = editoras.filter(editora => editora.codEditora == codEditora);
        if (resultados.length == 0) return "Editora não encontrada";
        return resultados[0].nome;
    }

    public getEditoras() {
        return editoras;
    }
}
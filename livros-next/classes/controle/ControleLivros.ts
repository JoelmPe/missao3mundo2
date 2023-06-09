import Livro from "../modelo/Livro";

const livros : Array<Livro> = [{
    codigo: 1,
    codEditora: 1,
    titulo: "Estruturas de Dados e Algoritmos com JavaScript",
    resumo: " começa abordando o básico sobre JavaScript e apresenta a ECMAScript 2017, antes de passar gradualmente para as estruturas de dados mais importantes, como arrays, filas, pilhas e listas ligadas. Você adquirirá um conhecimento profundo sobre como as tabelas hash e as estruturas de dados para conjuntos funcionam, assim como de que modo as árvores e os mapas hash podem ser usados para buscar arquivos em um disco rígido ou para representar um banco de dados. Este livro serve como um caminho para você mergulhar mais fundo no JavaScript. Você também terá uma melhor compreensão de como e por que os grafos – uma das estruturas de dados mais complexas que há – são amplamente usados em sistemas de navegação por GPS e em redes sociais.",
    autores: ["Loiane Groner"]
},{
    codigo: 2,
    codEditora: 2,
    titulo: "Algoritmos E Lógica Da Programação",
    resumo: "Com linguagem simples e didática – sem, no entanto, fugir da complexidade do assunto –, o livro procura tornar prática a lógica de programação, além de mostrar aos estudantes um caminho mais adequado na construção dos algoritmos. O desenvolvimento do raciocínio lógico e da abstração de procedimentos e dados são as maiores dificuldades para os estudantes dos cursos introdutórios. Nesse sentido, os autores resolvem os problemas propostos passo a passo, apresentando todos os conceitos envolvidos por meio de fluxogramas e em conjunto com pseudocódigos.",
    autores: ["Marco A. Furlan de Souza", "Marcelo Marques Gomes", "Marcio Vieira Soares", "Ricardo Concilio"]
},{
    codigo: 3,
    codEditora: 3,
    titulo: "Código limpo: Habilidades práticas do Agile Software",
    resumo: " Habilidades Práticas do Agile Software. Martin se reuniu com seus colegas do Mentor Object para destilar suas melhores e mais ágeis práticas de limpar códigos “dinamicamente” em um livro que introduzirá gradualmente dentro de você os valores da habilidade de um profissional de softwares e lhe tornar um programador melhor –mas só se você praticar",
    autores: ["Robert C"]
}];

export default class ControleLivro {
    incluir(livro: Livro) {
        livro.codigo = livros.length > 0
            ? livros.at(-1)!.codigo + 1
            : 1;
        livros.push(livro);
    }

    excluir(codigo: number) {
        const index = livros.findIndex(livro => livro.codigo == codigo);
        livros.splice(index, 1);
    }

    obterLivros() {
        return livros;
    }
}
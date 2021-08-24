# Plant Daddy's backend :seedling:

## Setup

- [Node.js](https://nodejs.org/en/)

- [Yarn](https://classic.yarnpkg.com/en/docs/install)

- [Docker e Docker Compose](https://www.notion.so/Docker-e-Docker-Compose-16771f2ceefe4a05a8c29df4ca49e97a)

Tendo isso instalado, basta rodar os comandos:

1. Instalar as dependências:
`yarn install`

1. Subir os containers docker (banco e api):
`docker-compose up`

1. Criar as tabelas do banco e populá-las:
`yarn typeorm migration:run && yarn seed:plants`

## Stack
- Node.js
- TypeScript
- Express
- TypeORM
- PostgreSQL

## Padrões de commit
Utilizando [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)

Padrão:
```
tipo: mensagem

Descrição detalhada (opcional)

Footer (opcional)
```

1. O `tipo` define a categoria daquele commit e seu preenchimento é obrigatório. Ele deve ser escrito em _kebab case_ e seus possíveis valores são:
   - `build`: Empacotamento do projeto
   - `chore`: Tarefas em geral
   - `ci`: Processo de integração contínua
   - `docs`: Documentação
   - `feat`: _Features_
   - `fix`: Correções
   - `perf`: Performance
   - `refactor`: Refatoração de código
   - `revert`: Desfazimento de outras tarefas
   - `style`: Visual
   - `test`: Testes

Exemplo:
```
feat: adiciona rota de listagem de plantas

Adiciona rota do express, serviço para manipular regras de negócio e repositório para fazer a query no banco

Resolve #32
```

No footer geralmente ficam referências a issues ou informações de algum breaking change

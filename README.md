# PROFFY
> Projeto desenvolvido durante a Next Level Week #2 da Rocketseat.

npm: 6.24.6
node: 12.18.3

## ReactJS
É uma biblioteca focada na construção de interfaces que engloba o HTML, CSS e JavaScript possibilitando a criação de single pages applications (SPAs) para melhor a experiência do usuário final. Nasceu para a criação de interfaces web porém hoje já abrange outras plataformas utilizando o React Native, ReactTV, ReactVR e muitas outras sub-bibliotecas que estão surgindo. No React tudo é componente, componente é uma função que retorna um HTML. O nome do componente sempre começa com letra maiúscula. Quando nos referimos ao HTML dentro do JS o nome é JSX que é o JavaScript com XML.

Aplicação responsiva e mobile first.

## NodeJS

Backend API REST, ao invés de retornar o html completo como o modelo MVC, retornará apenas os dados solicitados normalmente em json. E diferente do html que apenas os navegadores sabem interpretar, json todas as tecnologias são capazes. 
ts-node-dev verifica alterações no código e atualiza o servidor automaticamente --trnspile-only converte de ts para js sem verificar se há erros e o --ignore-watch node_modules ignorar os códigos de dentro da pasta node, --respawn serve para restart o servidor continuamente 

// Endereço da API é localhost:3333
// localhost:3333/users é a rota 
// recursos por sua vez é tudo aquilo que vêm após o "/", no caso assim o recurso é "users"

// Métodos HTTP são utilizados para fazer operações na api/backend, os mais utilizados são GET, POST, PUT e DELETE.
// GET é utilizado para buscar ou listar informações
// POST é utilizado para criar uma nova informação
// PUT é utilizado para atualizar uma informação
// DELETE é utilizado para excluir uma informação

// Corpo (Request Body) são os dados para criação ou atualização de uma informação
// Route Params são a identificação de qual recurso se quer atualizar ou deletar "/:id"
// Query Params são utilizados para paginação, filtros e ordenação

### Funcionalidades
#### Conexões
- Rota para listar o total de conexões realizadas;
- Rota para criar uma nova conexão;
#### Aulas
- Rota para criar uma aula;
- Rota para listar aulas;
  - Filtrar por matéria, dia da semana e horário;

### Banco de dados
knex sqlite3
npm run knen:migrate

// migrations controlam a versão do banco de dados
garantindo a integridade do cadastro no banco de dados com transação

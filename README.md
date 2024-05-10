# Giotrology

## Descrição

O "Giotrology" é um site interativo de astrologia, desenvolvido em React, Node.js e MongoDB. Os usuários podem solicitar leituras personalizadas de mapa astral e acessar artigos escritos pela astróloga responsável pelo site. Além disso, há uma funcionalidade de administração que permite gerenciar os artigos publicados.

## Estrutura de Arquivos

- **/pages**: Componentes que correspondem às rotas do aplicativo.
- **/components/shared**: Componentes compartilhados como Header e Footer.
- **/components/common**: Componentes comuns como botões e títulos.
- **/components/layout**: Componentes para layouts complexos como listas de filmes.
- **/api**: Funções para chamadas de API.

## Recursos e Funcionalidades

- **Leitura de Mapa Astral:** Usuários podem solicitar leituras de mapa astral personalizadas.
- **Gerenciamento de Artigos:** Capacidade da astróloga de publicar, editar e deletar artigos.
- **Consulta de Artigos:** Usuários podem ler artigos sobre astrologia.

## Tecnologias Utilizadas

- **React:** Utilizado para construir a interface do usuário no front-end.
- **Node.js:** Usado no back-end para lidar com a lógica do servidor.
- **MongoDB:** Banco de dados para armazenar informações sobre usuários e artigos.

## Instruções de Instalação

1. Clone o repositório: `https://github.com/FbianoG/Giotrology.git`
2. Instale as dependências: npm install
3. Inicie o aplicativo: npm run dev

## Gerenciamento de Estado
  
**React Context:** Utilizado para gerenciar o estado global de autenticação de usuários e status de sessão.
**useState e useEffect**: Para gerenciamento de estados locais e efeitos colaterais.

## Integração com API

**API interna:** Construída com Node.js, gerencia todas as interações com o banco de dados MongoDB, incluindo autenticação de usuários e administração de artigos.

## Tratamento de Erros

Erros são tratados no servidor e comunicados ao usuário final através de respostas de API estruturadas, com mensagens claras para facilitar a resolução de problemas e melhorar a experiência do usuário.

## Contribuições

Contribuições são bem-vindas! Para contribuir, por favor entre em contato com [fbiano.machado@gmail.com].

## Contato

Para mais informações, dúvidas ou sugestões, por favor entre em contato através de [fbiano.machado@gmail.com].

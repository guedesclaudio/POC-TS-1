<div align="center">
  <h1>WISHLIST</h1>
  <br>
  - Prova de conceito de uma aplicação back-end web para gerenciar uma lista de filmes favoritos
  <br>
  <br>
</div>
<br>
  
# Funcionalidades
- Crie o filme que deseja assistir
- Listagem de filmes criados
- Atualize o filme quando assistir, adicionando uma note e/ou um resumo
- Delete o filme quando quiser
- Listagem da quantidade filmes por plataforma

# Documentação
- POST: "/movies"

 ``` json
     {
      "title": "titulo do filme",
      "genre": "gênero do filme",
      "platform": "nome da plataforma",
      "status": "false ou true (se já tiver assistido true, se não false)",
      "note": "nota para o filme (opcional)",
      "abstr": "resumo do filme (opcional)" 
     }
 ```

 - GET: "/movies"

- PUT: "/movies/:idDoFilme"
 ``` json
     {
      "note": "nota para o filme (opcional)",
      "abstr": "resumo do filme (opcional)" 
     }
 ```
 - DELETE: "/movies/:idDoFilme"
 - GET: "/movies/filter-by-platform"


# Tecnologias utilizadas
- NODE.JS
- TYPESCRIPT
- EXPRESS
- CORS
- POSTGRES
- DOTENV
- GIT
- GITHUB
- VSCODE
- LINUX

# Como rodar
1. Clone esse repositório
2. Crie o banco de dados com o auxílio do dump.sql
3. Instale as dependências:
```bash
npm i
```
4. Configure o .env
5. Rode o projeto:
```bash
npx nodemon ./src/server.ts
```
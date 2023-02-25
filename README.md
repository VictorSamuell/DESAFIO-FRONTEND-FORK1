
<a href="https://www.linkedin.com/company/inoviacorp/"  rel="noopener noreferrer" target="_blank"> 
<img align="right" src="https://user-images.githubusercontent.com/58194653/221175217-9a4bc218-9fbd-4316-8883-f31dfff72905.png" alt="Inovia" width="210px"/>
</a>
<h1 style="display: inline-block;">Processo seletivo front-end </h1>

O objetivo desta etapa é que você desenvolvedor mostre o seu talento e criatividade, para que possamos avaliar seu conhecimento técnico  e a metodologia aplicada no desenvolvimento do teste. 
<h3 align="center"> Implemente um dos testes listados a seguir </h3>
<details>
<summary align="center"><h2> Desafio 1 - Saúde  </h2> </summary> 


 Um grupo de cientistas decidiu criar um sistema que permitisse aos usuários acessar informações sobre a saúde de pessoas em todo o Brasil. Eles criaram um banco de dados que armazenava informações como `nome, gênero, endereço, cidade, estado, idade, tipo sanguíneo, peso, altura, latitude e longitude`.

- O desafio é criar uma aplicação React que permita aos usuários visualizar e manipular esses dados. A aplicação deve permitir que os usuários pesquisem por nome, gênero, endereço, cidade, estado, idade, tipo sanguíneo, peso, altura, latitude e longitude. Os usuários também devem ser capazes de visualizar os dados em forma de tabelas e gráficos, bem como em um mapa. Além disso, a aplicação deve permitir que os usuários façam alterações nos dados, como adicionar, editar e excluir informações.

- A tabela deve conter além dos dados apresentados, o cálculo do índice de massa coporal (IMC) de cada usuário ` dividindo o peso (em kg) pela altura ao quadrado (em metros) `.
</details>

<details>
<summary align="center"><h2>Desafio 2 - Transporte </h2></summary>

 Uma transportadora decidiu criar um sistema que permitisse aos usuários acessar informações sobre os motoristas em todo o Brasil. Eles criaram um banco de dados que armazenava informações como `nome, gênero, endereço, cidade, estado, idade, veículo, ocupação, latitude e longitude`.

- O desafio é criar uma aplicação React que permita aos usuários visualizar e manipular esses dados. A aplicação deve permitir que os usuários pesquisem por nome, gênero, endereço, cidade, estado, idade, veículo, ocupação, latitude e longitude. Os usuários também devem ser capazes de visualizar os dados em forma de tabelas e gráficos, bem como em um mapa. Além disso, a aplicação deve permitir que os usuários façam alterações nos dados, como adicionar, editar e excluir informações.

- Visando ajudar as transportadoras a escolher em qual região atuar, a tela principal deve exibir um mapa mostrando os veículos predominante por região.
</details>


<details>
<summary align="center"><h2 align="center">Desafio 3 - Marketing </h2></summary>

 Uma empresa de marketing decidiu criar um sistema que permitisse aos profissionais acessar informações sobre os acessos de usuários em todo o Brasil. Eles criaram um banco de dados que armazenava informações como `nome, gênero, endereço, cidade, estado, idade, domínio, latitude e longitude e useragent browser`.

- O desafio é criar uma aplicação React que permita aos usuários visualizar e manipular esses dados. A aplicação deve permitir que os usuários pesquisem por nome, gênero, endereço, cidade, estado, idade, domínio, latitude e longitude e useragent browser. Os usuários também devem ser capazes de visualizar os dados em forma de tabelas e gráficos, bem como em um mapa. Além disso, a aplicação deve permitir que os usuários façam alterações nos dados, como adicionar, editar e excluir informações.

- Afim de ajudar os profissionais a direcionar o marketing por números de acessos, o site deve também conter um gráfico com os principais dispositivos utilizados, a idade e o gênero predominante por cada dispositivo.
</details>

# Como utilizar a api: 
As rotas devem utilizar a URL base `http://inovia.gbf3dqe5f0dydxhv.eastus.azurecontainer.io:3000/api` para realizar as seguintes operações: 

Ação  |  Metodo | Rota | Retorna | Body (JSON)
------------- | ------------- | ------------- | ------------- | -------------
Visualizar dados de todos itens | $\colorbox{blue}{GET}$ | /person | JSON: Todos os dados disponíveis. | Não é necessário
Visualizar dados de um item por ID |  $\colorbox{blue}{GET}$ | /api/person/`:id` | JSON: Todos os dados de um `id` específico. | Não é necessário
Deletar um item |  $\colorbox{red}{DELETE}$ | /api/person/`:id` | String: "person removed" | Não é necessário
Adicionar um item |  $\colorbox{green}{POST}$ | /api/person | String: "person created" | <details> <summary> Dados a serem adicionados em JSON </summary> {`gender`:String,`nameSet`:String,`title`:String,`givenName`:String,`middleInitial`:String,`surname`:String,`streetAddress`:String,`city`:String,`state`:String,`stateFull`:String,`username`:String,`birthday`:String,`browserUserAgent`:String,`kilograms`:String,`centimeters`:String,`latitude`:String,`longitude`:String,`bloodType`:String,`vehicle`:String,`domain`:String,`occupation`:String} </details>
Alterar dados de um item | $\colorbox{#703c16}{PUT}$ | /api/person/`:id` | String: "person uptated" |  <details> <summary>Dados a serem alterados em JSON: </summary> {`gender`:String,`nameSet`:String,`title`:String,`givenName`:String,`middleInitial`:String,`surname`:String,`streetAddress`:String,`city`:String,`state`:String,`stateFull`:String,`username`:String,`birthday`:String,`browserUserAgent`:String,`kilograms`:String,`centimeters`:String,`latitude`:String,`longitude`:String,`bloodType`:String,`vehicle`:String,`domain`:String,`occupation`:String} </details>

> **Warning**:
> Caso tenha problemas com Cors, utilize `'Access-Control-Allow-Origin': '*'` no header do request.

> **Note**:
> Um corpo da mensagem ( `body` ) deve ser enviado junto ao request para a api quando o metodo for post ou put. 
 <details> <summary align="center">Exemplo de  $\colorbox{#703c16}{PUT}$  </summary>
 
```
...
Url: `http://inovia.gbf3dqe5f0dydxhv.eastus.azurecontainer.io:3000/api/1101`,
Method : `PUT`,
// Todos os dados do body são opcionais, envia apenas o que deseja alterar
body: {
"streetAddress":"Rua Inovia 123",
"city":"Campinas",
"state":"SP",
"stateFull":"São Paulo",
"kilograms":"89.6",
}
...
```
</details>

# Requisitos

1. Criar uma aplicação React que permita aos usuários visualizar e manipular os dados armazenados utilizando a super api da Inovia;
2. Visualizar os dados em forma de tabelas e gráficos, bem como em um mapa. Além disso, a aplicação deve permitir que os usuários façam alterações nos dados, como adicionar, editar e excluir informações;
3. Desenvolver no minimo 1 tabela, 1 gráficos (ou mais) e 1 mapa com os dados apresentados.
4. Permitir que os usuários pesquise os dados por `nome, gênero, endereço, cidade, estado, idade, peso, altura ...`;
5. Fazer um vídeo demonstração de até 10 minutos;
6. Fazer um fork desse repositório e publicar no github em uma nova branch com o `NOME` do candidato. exemplo : Fork -> branch `JohnDoe`;
7. <b> O desafio deve ser concluído na a data indicada no email. <b>

### Seria diferencial:

1. Utilizar bibliotecas de gráficos interativos.
2. Utilizar Redux para manipular os dados.
3. Utilizar Material-UI para o design da aplicação.
4. Publicar o site online ( pode-se utilizar Vercel, Heroku, Netlify ou qualquer outro meio ) 

# o que pode ser utilizado:

## Para criação de gráficos e mapas interativos: 

 - Plotly.js (https://plotly.com/javascript/react/)
 - Chart.js  ( https://www.chartjs.org/docs/latest/) 
 - Leaflet.js (https://leafletjs.com/) 
 - E entre outras bibliotecas de gráficos **interativos**

## Bootstraps & Grids: 
 -  Material-UI (https://material-ui.com/)
 -  React-Bootstrap (https://react-bootstrap.github.io/) 
 -  Semantic UI React (https://react.semantic-ui.com/) 
 -  HalfMoon ( https://www.gethalfmoon.com)
 -  E entre outros 

## Para manipulação de dados: 
 -  Axios (https://github.com/axios/axios) 
 -  Fetch API (https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) 
 -  React-Redux (https://react-redux.js.org/)
 -  E entre outros

## Sugestões para quem deseja ir além do desafio inicial:

- Refresh automático: Atualizar as informações exibidas na aplicação de forma transparente ao usuário.

- Layout responsivo: Adaptar o layout da aplicação à diferentes tipos de resoluções e otimizar a experiência mobile.

- Testes: Desenvolver testes que sejam necessários para a aplicação.

- Documentação: Gerar uma documentação da aplicação, incluindo detalhes sobre as decisões tomadas, especificação dos componentes desenvolvidos, instruções de uso e outras informações relevantes.

# O que não pode ser utilizado:
 - Utilizar componentes ou códigos de terceiros que implementem algum dos requisitos.

<h1>
<a href="https://forms.gle/HfmaPXoGamikub3y7" target="_blank"> 
Envio do desafio
</a>
</h1>


-  Você precisará fazer o upload do seu vídeo no youtube e preencher um formulário com informações sobre a sua participação. Em seguida, você precisará enviar o formulário e esperar a aprovação do desafio.
<p align="center"  >
<a href="https://forms.gle/HfmaPXoGamikub3y7" rel="noopener noreferrer" target="_blank"> 

<img src="https://user-images.githubusercontent.com/58194653/221183738-639cfbbf-d654-4213-af7a-9b6fb99b6ea5.gif" alt="" width="300px"/>
Clique aqui para fazer o envio do desafio e do vídeo

</a>
</p>

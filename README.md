
<img align="right" src="https://user-images.githubusercontent.com/58194653/221175217-9a4bc218-9fbd-4316-8883-f31dfff72905.png" alt="Inovia" width="20%"/>
<h1 style="display: inline-block;">Processo seletivo Inovia </h1>

O objetivo desta etapa é que você desenvolvedor mostre o seu talento e criatividade, para que possamos avaliar seu conhecimento técnico  e a metodologia aplicada no desenvolvimento do teste. 
<h3 align="center"> Implemente um dos testes listados a seguir </h3>
<details>
<summary align="center"><h2> Desafio 1  </h2> </summary> 


 Um grupo de cientistas decidiu criar um sistema que permitisse aos usuários acessar informações sobre a saúde de pessoas em todo o Brasil. Eles criaram um banco de dados que armazenava informações como `nome, gênero, endereço, cidade, estado, idade, tipo sanguíneo, peso, altura, latitude e longitude`.

- O desafio é criar uma aplicação React que permita aos usuários visualizar e manipular esses dados. A aplicação deve permitir que os usuários pesquisem por nome, gênero, endereço, cidade, estado, idade, tipo sanguíneo, peso, altura, latitude e longitude. Os usuários também devem ser capazes de visualizar os dados em forma de tabelas e gráficos, bem como em um mapa. Além disso, a aplicação deve permitir que os usuários façam alterações nos dados, como adicionar, editar e excluir informações.

- A tabela deve conter além dos dados apresentados, o cálculo do índice de massa coporal (IMC) de cada usuário ` dividindo o peso (em kg) pela altura ao quadrado (em metros) `.
</details>

<details>
<summary align="center"><h2>Desafio 2</h2></summary>

 Uma empresa de transporte decidiu criar um sistema que permitisse aos usuários acessar informações sobre os motoristas em todo o Brasil. Eles criaram um banco de dados que armazenava informações como `nome, gênero, endereço, cidade, estado, idade, veículo, ocupação, latitude e longitude`.

- O desafio é criar uma aplicação React que permita aos usuários visualizar e manipular esses dados. A aplicação deve permitir que os usuários pesquisem por nome, gênero, endereço, cidade, estado, idade, veículo, ocupação, latitude e longitude. Os usuários também devem ser capazes de visualizar os dados em forma de tabelas e gráficos, bem como em um mapa. Além disso, a aplicação deve permitir que os usuários façam alterações nos dados, como adicionar, editar e excluir informações.

- Visando ajudar as empresas a escolher em qual região atuar, a tela principal deve exibir um mapa mostrando os veículos predominante por região.
</details>


<details>
<summary align="center"><h2 align="center">Desafio 3</h2></summary>
 Uma empresa de marketing decidiu criar um sistema que permitisse aos profissionais acessar informações sobre os acessos de usuários em todo o Brasil. Eles criaram um banco de dados que armazenava informações como `nome, gênero, endereço, cidade, estado, idade, domínio, latitude e longitude e useragent browser`.

- O desafio é criar uma aplicação React que permita aos usuários visualizar e manipular esses dados. A aplicação deve permitir que os usuários pesquisem por nome, gênero, endereço, cidade, estado, idade, domínio, latitude e longitude e useragent browser. Os usuários também devem ser capazes de visualizar os dados em forma de tabelas e gráficos, bem como em um mapa. Além disso, a aplicação deve permitir que os usuários façam alterações nos dados, como adicionar, editar e excluir informações.

- Afim de ajudar os profissionais a direcionar o marketing por números de acessos, o site deve também conter um gráfico com os principais dispositivos utilizados, a idade e o gênero predominante por cada dispositivo.
</details>

# Como utilizar a api: 
as rotas devem ter a URL base `http://xxxxxx` para realizar as seguintes operações: 
```
Visualizar dados: Utilize a rota GET /dados para retornar todos os dados.

Adicionar dados: Utilize a rota POST /dados para adicionar novos dados.

Alterar dados: Utilize a rota PUT /dados/id para alterar os dados existentes.

Remover dados: Utilize a rota DELETE /dados/id para remover os dados existentes.

Obs: As rotas irão retornar um status de sucesso da operação.
```
# Requisitos

1. Criar uma aplicação React que permita aos usuários visualizar e manipular os dados armazenados utilizando a api da Inovia;
2. Visualizar os dados em forma de tabelas e gráficos, bem como em um mapa. Além disso, a aplicação deve permitir que os usuários façam alterações nos dados, como adicionar, editar e excluir informações;
3. Desenvolver no minimo 2 gráficos com os dados apresentados.
4. Permitir que os usuários pesquise os dados por `nome, gênero, endereço, cidade, estado, idade, peso, altura ...`;
5. Fazer um vídeo demonstração de até 10 minutos;
6. Fazer um fork desse repositório e publicar no github em uma nova branch com o `NOME` do candidato. exemplo : Fork -> branch `JohnDoe`;
7. <b> O desafio deve ser concluído em até 10 dias. <b>

### Seria diferencial:

1. Utilizar bibliotecas de gráficos interativos.
2. Utilizar Redux para manipular os dados.
3. Utilizar Material-UI para o design da aplicação.
4. Publicar o site online ( pode-se utilizar Vercel, Heroku, Netlify ou qualquer outro meio ) 

# o que pode ser utilizado:

## Para criação de graficos e mapas interativos: 

 - Plotly.js (https://plotly.com/javascript/react/)
 - Chart.js  ( https://www.chartjs.org/docs/latest/) 
 - Leaflet.js (https://leafletjs.com/) 
 - E entre outras bibliotecas de graficos **interativos**

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
<a href="https://forms.gle/HfmaPXoGamikub3y7"> 
Envio do desafio
</a>
</h1>


-  Você precisará fazer o upload do seu vídeo no youtube e preencher um formulário com informações sobre a sua participação. Em seguida, você precisará enviar o formulário e esperar a aprovação do desafio.
<p align="center"  >
<a href="https://forms.gle/HfmaPXoGamikub3y7"> 

<img src="https://user-images.githubusercontent.com/58194653/221183738-639cfbbf-d654-4213-af7a-9b6fb99b6ea5.gif" alt="" width="35%"/>
Clique aqui para fazer o envio do desafio e do vídeo

</a>
</p>

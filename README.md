<h1 align="center"><img src="./public/images/logo-sjms-lateral.jpg"></h1>

<div align="center">
  <p>
    <strong>Vamos transformar o TRF3 em uma API?</strong>
  </p>

</div>

## Motivo
Acesso programático de informações é algo fundamental na comunicação  entre sistemas.
Uma API fornece um acesso a dados padronizados          que podem ser intercambiaveis entre os diversos sistemas da Terceira Região.
Dado a isso, este projeto experimental tem como objetivo centralizar e disponibilizar endpoints modernos com baixíssima latência.
Recursos disponíveis:
- Feriados
  - [x] Nacionais
  - [x] Legais baseados na Páscoa
  - [x] Recesso do Judiciário
  - [x] Estaduais (MS e SP)
    - [x] MS | Municipais, apenas para cidades onde há Subseção Judiciária
    - [x] SP | Municipais, apenas para cidades onde há Subseção Judiciária



### TO-DO
  - [ ] Criar BD para gerenciar os feriados (Sugestão __SQLite__)

Dado a isso, este projeto experimental tem como objetivo centralizar e disponibilizar endpoints modernos com baixíssima latência.

## RODAR LOCALMENTE

Certifique-se de estar na pasta raiz do projeto para executar:

1 - `Clonar este repositório`

2 - `npm install`

3 - `npm run dev - nextjs local`

## ENDPOINTS

### Feriados
`/api/feriados/v1/{ano}`

### Subseções
`/api/subsecoes/v1`

## LIVE VERSION
https://api-trf3-feriados.vercel.app/

## Autores
Este projeto foi inspirado  no projeto [BrasilAPI](https://github.com/BrasilAPI/BrasilAPI)

| Adaptado para uso na [Justiça Federal de MS](https://www.jfms.jus.br) por |  [<img src="https://github.com/mistermagson.png?size=115" width=115><br><sub>@mistermagson</sub>](https://github.com/mistermagson) |
| :---: |:----------------------------------------------------------------------------------------------------------------------------------:|

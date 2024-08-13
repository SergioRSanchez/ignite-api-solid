# App

- Conceito GymPass:
  - pessoa se cadastra;
  - faz uma assinatura mensal;
  - dá acesso a X número de vezes a academias cadastradas no app.


- Trabalharemos com:
  - Geolocalização (cálculo de distância envolvendo latitude e longitude);
  - Data (entrar na academia até 20 minutos depois do check-in)
  - RBAC (Role Based Authorization Control) conceito de determinar permissões que o usuário tem baseado em seu cargo
  - CI (Continuous Integration) (ENTRADA): rotinas para integração de código contínuo, em projetos reais há um grande fluxo de códigos chegando de diferentes desenvolvedores, portanto é necessário ter alguns fluxos que executam e validam se esses códigos estão chegando da maneira esperada
  - CD (Continuous Deployment/Delivery) (SAÍDA): quando aprovarmos uma pull request, automaticamente fazer o deploy do projeto


# RFs (Requisitos funcionais) => funcionalidades da aplicação, o que será possível o usuário fazer em nossa aplicação

- [x] Deve ser possível se cadastrar;
- [x] Deve ser possível se autenticar;
- [x] Deve ser possível obter o perfil de um usuário logado;
- [x] Deve ser possível obter um número de check-ins realizados pelo usuário logado;
- [x] Deve ser possível o usuário obter seu histórico de check-ins;
- [x] Deve ser possível o usuário buscar academias próximas (até 10km);
- [x] Deve ser possível o usuário buscar academias pelo nome;
- [x] Deve ser possível o usuário realizar check-in em uma academia;
- [x] Deve ser possível validar o check-in de um usuário;
- [x] Deve ser possível cadastrar uma academia;


# RNs (Regras de negócio) => caminhos que cada requisito pode tomar

- [x] O usuário não deve poder se cadastrar com um email duplicado;
- [x] O usuário não pode fazer 2 check-ins no mesmo dia;
- [x] O usuário não pode fazer check-ins se não estiver perto (100m) da academia;
- [x] O check-in só pode ser validado até 20 minutos após criado;
- [x] O check-in só pode ser validado por administradores;
- [x] A academia só pode ser cadastrada por administradores;


# RNFs (Requisitos não funcionais) => não partem do cliente, ele não terá controle a esses requisitos, porém são essenciais para rodar a aplicação e uma boa experiência do usuário

- [x] A senha do usuário precisa estar criptografada;
- [x] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL;
- [x] Todas listas de dados precisam estar paginadas com 20 itens por página;
- [x] O usuário deve ser identificado por um JWT (JSON Web Token);

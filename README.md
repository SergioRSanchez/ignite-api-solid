# App

- Conceito GymPass:
  - pessoa se cadastra;
  - faz uma assinatura mensal;
  - dá acesso a X número de vezes a academias cadastradas no app.


- Trabalharemos com:
  - Geolocalização (cálculo de distância envolvendo latitude e longitude)
  - Data (entrar na academia até 20 minutos depois do check-in)


# RFs (Requisitos funcionais) => funcionalidades da aplicação, o que será possível o usuário fazer em nossa aplicação

- [x] Deve ser possível se cadastrar;
- [ ] Deve ser possível se autenticar;
- [ ] Deve ser possível obter o perfil de um usuário logado;
- [ ] Deve ser possível obter um número de check-ins realizados pelo usuário logado;
- [ ] Deve ser possível o usuário obter seu histórico de check-ins;
- [ ] Deve ser possível o usuário buscar academias próximas;
- [ ] Deve ser possível o usuário buscar academias pelo nome;
- [ ] Deve ser possível o usuário realizar check-in em uma academia;
- [ ] Deve ser possível validar o check-in de um usuário;
- [ ] Deve ser possível cadastrar uma academia;


# RNs (Regras de negócio) => caminhos que cada requisito pode tomar

- [x] O usuário não deve poder se cadastrar com um email duplicado;
- [ ] O usuário não pode fazer 2 check-ins no mesmo dia;
- [ ] O usuário não pode fazer check-ins se não estiver perto (100m) da academia;
- [ ] O check-in só pode ser validado até 20 minutos após criado;
- [ ] O check-in só pode ser validado por administradores;
- [ ] A academia só pode ser cadastrada por administradores;


# RNFs (Requisitos não funcionais) => não partem do cliente, ele não terá controle a esses requisitos, porém são essenciais para rodar a aplicação e uma boa experiência do usuário

- [x] A senha do usuário precisa estar criptografada;
- [x] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL;
- [ ] Todas listas de dados precisam estar paginadas com 20 itens por página;
- [ ] O usuário deve ser identificado por um JWT (JSON Web Token);

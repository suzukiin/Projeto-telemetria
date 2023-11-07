# Documentação da Aplicação

## Descrição
Esta aplicação é um projeto para desenvolvimento de uma telemetria.

#### Explicação do `Fluxo`
- Primeiro é inicializado o serviço na porta 3000 e o broker `mqtt` na porta padrão 1883.

- Os dados recebidos no broker serão automaticamente armazenados no mongoDB, com o seguinte objeto:

    - `topic` : o tópico em que a mensagem foi enviada (String)
    - `message` : a mensagem que foi enviada ao tópico especificado (String)

- Em seguida os dados poderão ser consultados no endpoint

#### Endpoints
- **GET /last** : Retorna o último dado enviado para o Banco de Dados

- **GET /all** : Retorna todos os dados do Banco de Dados
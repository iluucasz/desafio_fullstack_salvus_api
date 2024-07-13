# Products Api

## Frameworks e libs usadas:
```json
{
    "@prisma/client": "^5.9.1",
    "bcrypt": "^5.1.1",
    "express": "^4.18.2",
    "express-async-errors": "^3.1.1",
    "helmet": "^7.1.0",
    "jsonwebtoken": "^9.0.2",
    "reflect-metadata": "^0.2.1",
    "tsyringe": "^4.8.0",
    "zod": "^3.22.4"
  },
```

## Como iniciar o servidor:

vincule seu banco de dados
```
crie o .env.develop e use o .env.example como modelo, alterando seus devidos valores
```

### instale o node no projeto
```javascript
npm install / npm i
```

### rode o prisma no projeto
```
npm run migrate:dev
```

### rodar o servidor:
```
npm run dev
```

### visualizar o banco de dados:
```
npm run studio:dev
```

# Documentação Completa e Testes de Rotas:

### Rota da documentação: GET /docs

## Rotas de Usuário

### Registrar usuário: POST /users

Padrão de Corpo:
```json
{
	"name": "john doe",
	"email": "john_doe@mail.com",
	"password": "12345678"
}
```

Padrão de Resposta (STATUS 201):
```json
{
	"id": 1,
	"name": "john doe",
	"email": "john_doe@mail.com"
}

```
Possíveis erros:

403 FORBIDDEN

```json
{
	"message": "E-mail already registered"
}
```

### Logar usuário: POST /users/login

Padrão de Corpo:
```json
{
	"email": "john_doe@mail.com",
	"password": "12345678"
}
```

Padrão de Resposta (STATUS 200):
```json
{
	"AcessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNzA4NTQ2MDQzfQ.pDcRf1yu1XmVaIrRLOBoa6O_8Ukl1lxX-6lkxwcJRtI",
	"user": {
		"id": 1,
		"name": "john doe",
		"email": "john_doe@mail.com"
	}
}
```

### Obter usuários(necessário autorização): GET /users
Forneça o token do usuário correspondente:
```json
{
  "headers": {
    "Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNzA4NTQ2MDQzfQ.pDcRf1yu1XmVaIrRLOBoa6O_8Ukl1lxX-6lkxwcJRtI"
  }
}
```

Padrão de Resposta (STATUS 200):
```json
{
	"id": 1,
	"name": "john doe",
	"email": "john_doe@mail.com"
}
```
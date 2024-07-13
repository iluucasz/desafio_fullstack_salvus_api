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

### vincule o seu banco de dados
```
crie um arquivo chamado .env.develop na raiz do projeto e use o .env.example como modelo, alterando seus devidos valores
```

### instale o node no projeto
```javascript
npm install
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

## Rota da documentação: GET /docs

## Rotas de Usuário

### Registrar usuário: POST /users/register

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
[
	{
		"id": 1,
		"name": "john doe",
		"email": "john_doe@mail.com"
	}
]
```


### Obter apenas um usuário(necessário autorização): GET /users/:id
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

## Rotas de produtos

### Criar produto(necessário autorização): POST /product
Forneça o token do usuário correspondente:

```json
{
  "headers": {
    "Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNzA4NTQ2MDQzfQ.pDcRf1yu1XmVaIrRLOBoa6O_8Ukl1lxX-6lkxwcJRtI"
  }
}
```

Padrão de Corpo:
```json
{
	"name": "Carne assada",
	"description": "Carne assada com arroz e feijão",
	"price": "22"
}
```

Padrão de Resposta (STATUS 201):
```json
{
	"message": {
		"id": 1,
		"name": "Carne assada",
		"description": "Carne assada com arroz e feijão",
		"price": "22",
		"createdAt": "2024-07-13T15:39:10.354Z",
		"updatedAt": "2024-07-13T15:39:10.354Z",
		"userId": 1
	}
}
```

### Procurar todos os produtos(necessário autorização): GET /product
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
	"message": [
		{
		"id": 1,
		"name": "Carne assada",
		"description": "Carne assada com arroz e feijão",
		"price": "22",
		"createdAt": "2024-07-13T15:39:10.354Z",
		"updatedAt": "2024-07-13T15:39:10.354Z",
		"userId": 1
	}
	]
}
```

### Procurar todos os produtos(necessário autorização): GET /product/:id
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
	"message":
		{
		"id": 1,
		"name": "Carne assada",
		"description": "Carne assada com arroz e feijão",
		"price": "22",
		"createdAt": "2024-07-13T15:39:10.354Z",
		"updatedAt": "2024-07-13T15:39:10.354Z",
		"userId": 1
	}
}
```


### Atualizar um produto(necessário autorização): PATCH /product/:id
Forneça o token do usuário correspondente:

```json
{
  "headers": {
    "Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNzA4NTQ2MDQzfQ.pDcRf1yu1XmVaIrRLOBoa6O_8Ukl1lxX-6lkxwcJRtI"
  }
}
```

Padrão de Corpo:
```json
{
	"name": "Peru",
	"description": "a",
	"price": "22"
}
```

Padrão de Resposta (STATUS 201):
```json
{
	"message": {
		"id": 1,
		"name": "Peru",
		"description": "a",
		"price": "22",
		"createdAt": "2024-07-13T18:48:41.441Z",
		"updatedAt": "2024-07-13T20:54:13.720Z",
		"userId": 1
	}
}
```


### Deletar um produto(necessário autorização): PATCH /product/:id
Forneça o token do usuário correspondente:

```json
{
  "headers": {
    "Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNzA4NTQ2MDQzfQ.pDcRf1yu1XmVaIrRLOBoa6O_8Ukl1lxX-6lkxwcJRtI"
  }
}
```

Padrão de Resposta (STATUS 204):
```json
No body returned for response
```

# 🛵 ANJOS EM DUAS RODAS DELIVERY

Sistema de delivery com Firebase.

## Projeto Firebase

Projeto:

anjos-flash

## Painéis

- LOJISTA
- MOTOBOY
- FRANQUEADO
- ADMIN

---

# 🔐 AUTENTICAÇÃO

Login por:

- E-mail
- Senha

Cadastro:

- Nome
- E-mail
- Senha
- Tipo de conta

Tipos públicos:

- LOJISTA
- MOTOBOY
- FRANQUEADO

ADMIN não pode ser criado pelo cadastro público.

---

# 💰 REGRA FINANCEIRA

Saldo inicial:

R$0,00

Somente ADMIN pode:

- Ajustar saldo
- Aprovar recarga
- Pagar motoboy

Usuário normal não possui botão de edição de saldo.

---

# 🏪 LOJISTA

O lojista vê:

Saldo atual

PIX:

22997450131

Recarga:

R$50,00

Quando o saldo for menor que R$8:

Criar Novo Pedido fica desabilitado.

Quando o saldo for igual ou maior que R$8:

Criar Novo Pedido fica disponível.

---

# 📦 PEDIDO

Ao criar:

Nome do cliente

Endereço de entrega

Valor do produto

É gerado automaticamente:

Código de 4 dígitos

Taxa:

R$8,00

A taxa é descontada do saldo do lojista.

Status inicial:

pendente

---

# 🛵 MOTOBOY

O motoboy visualiza pedidos:

pendente

Pode:

ACEITAR PEDIDO

Depois:

FINALIZAR ENTREGA

Para finalizar precisa informar:

Código de 4 dígitos.

---

# 👑 ADMIN

O ADMIN visualiza:

Todos usuários

Todos saldos

Todas transações pendentes

Todos pedidos

Lucro

O ADMIN possui:

Aprovar Recarga R$50

Ajustar Saldo

Pagar Motoboy

---

# 📊 LUCRO

Cálculo:

Lucro =
Recargas aprovadas
-
Pagamentos aos motoboys

---

# 📄 EXTRATO

O lojista possui:

Extrato dos últimos 90 dias.

---

# 🔥 CONFIGURAÇÃO FIREBASE

No Firebase Console:

Authentication

Sign-in method

Email/Password

Ativar.

Se a confirmação de e-mail estiver habilitada no projeto,
desative-a para permitir login imediatamente após cadastro.

---

# 🗄️ FIRESTORE

Criar banco Firestore.

Depois publicar:

firestore.rules

---

# 👑 CRIAR O PRIMEIRO ADMIN

Por segurança, não existe opção pública para criar ADMIN.

1. Crie sua conta normalmente como LOJISTA.

2. Abra o Firestore.

3. Localize:

profiles

4. Localize seu usuário.

5. Altere:

tipo

para:

ADMIN

6. Localize:

wallets

7. Altere o tipo da wallet para:

ADMIN

Depois faça logout e login novamente.

---

# 🌐 GITHUB PAGES

Coloque:

index.html

firestore.rules

README.md

no repositório.

Depois:

Settings

Pages

Deploy from branch

Selecione:

main

/root

Save

O GitHub fornecerá o endereço do aplicativo.

---

# ⚠️ PRODUÇÃO

Para uma operação comercial real,
a parte financeira deve ser movida para
Cloud Functions ou outro backend confiável.

O navegador nunca deve ser considerado uma
autoridade financeira.

O Firestore Rules deve continuar sendo usado
como camada de segurança.

---

# ANJOS EM DUAS RODAS

Delivery

Macaé/RJ

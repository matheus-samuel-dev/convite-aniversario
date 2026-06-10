# 🎉 Convite Aniversário Online

Sistema completo de confirmação de presença (RSVP) para aniversários e eventos, desenvolvido com HTML, CSS, JavaScript e Firebase.

---

## 📖 Sobre o Projeto

O Convite Aniversário Online é uma aplicação web moderna criada para facilitar a confirmação de presença em eventos.

O sistema permite que convidados confirmem presença, adicionem acompanhantes, visualizem informações do evento e recebam uma experiência interativa através de uma interface elegante e responsiva.

Além disso, o projeto conta com recursos avançados como integração com Firebase, painel administrativo, estatísticas em tempo real, exportação de convidados para Excel, QR Code para localização e compartilhamento via WhatsApp.

---

## ✨ Funcionalidades

### 🎫 Convite Digital

* Layout moderno e responsivo
* Informações do evento
* Nome do aniversariante personalizável
* Data e horário do evento
* Endereço completo
* Mapa integrado
* QR Code para localização

### ✅ Sistema RSVP

* Confirmação de presença
* Confirmação de ausência
* Formulário em etapas
* Validação dos campos
* Máscara automática para telefone

### 👥 Gestão de Acompanhantes

* Cadastro de até 5 acompanhantes
* Inclusão dinâmica de convidados
* Remoção de acompanhantes
* Validação de nomes

### 📊 Painel Administrativo

* Listagem de convidados
* Pesquisa por nome
* Pesquisa por telefone
* Filtro por status
* Controle de presença
* Atualização em tempo real

### 📈 Dashboard

* Total de convidados
* Total de confirmações
* Total de recusas
* Total de acompanhantes
* Taxa de comparecimento
* Gráficos estatísticos

### 🔥 Firebase

* Armazenamento em nuvem
* Banco de dados Firestore
* Atualizações em tempo real
* Hospedagem Firebase Hosting
* Segurança através de regras

### 📁 Exportação

* Exportar convidados para Excel (.xlsx)
* Exportar lista CSV
* Backup dos dados

### 📲 Compartilhamento

* Compartilhar convite via WhatsApp
* Compartilhar link do evento
* Compartilhamento nativo para dispositivos móveis

### ⏳ Contador Regressivo

* Dias restantes
* Horas restantes
* Minutos restantes
* Segundos restantes

### 🌙 Tema Escuro

* Dark Mode
* Light Mode
* Preferência salva automaticamente

### 🎊 Experiência do Usuário

* Animações suaves
* Efeito de confetes
* Transições modernas
* Feedback visual
* Interface intuitiva

### 📱 Responsividade

Compatível com:

* Desktop
* Notebook
* Tablet
* Android
* iPhone

### 🚀 PWA

* Instalável como aplicativo
* Funciona em celulares
* Ícone personalizado
* Experiência semelhante a app nativo

---

## 🛠️ Tecnologias Utilizadas

### Front-End

* HTML5
* CSS3
* JavaScript ES6+

### Banco de Dados

* Firebase Firestore

### Hospedagem

* Firebase Hosting
* GitHub Pages

### Bibliotecas

* Font Awesome
* SheetJS
* Firebase SDK
* Canvas Confetti

---

## 📂 Estrutura do Projeto

```text
CONVITE-ANIVERSARIO
│
├── assets
│   │
│   ├── images
│   │   ├── banner.jpg
│   │   ├── background.jpg
│   │   └── logo.png
│   │
│   ├── icons
│   │   ├── calendar.svg
│   │   ├── clock.svg
│   │   ├── location.svg
│   │   └── whatsapp.svg
│   │
│   └── audio
│       └── music.mp3
│
├── css
│   └── style.css
│
├── js
│   ├── script.js
│   ├── firebase.js
│   ├── countdown.js
│   ├── admin.js
│   ├── dashboard.js
│   └── theme.js
│
├── pages
│   ├── admin.html
│   └── dashboard.html
│
├── manifest.json
├── firebase.json
├── .gitignore
├── index.html
└── README.md
```

---

## 🚀 Como Executar Localmente

### 1. Clone o repositório

```bash
git clone https://github.com/seuusuario/convite-aniversario.git
```

### 2. Entre na pasta

```bash
cd convite-aniversario
```

### 3. Abra o projeto

Utilize o Live Server do VS Code ou simplesmente abra:

```text
index.html
```

---

## 🔥 Configuração do Firebase

### Criar Projeto

1. Acesse:

https://firebase.google.com

2. Clique em:

```text
Criar Projeto
```

3. Ative:

* Firestore Database
* Firebase Hosting

4. Copie suas credenciais.

---

### Exemplo de Configuração

```javascript
const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "SEU_PROJETO.firebaseapp.com",
  projectId: "SEU_PROJETO",
  storageBucket: "SEU_PROJETO.appspot.com",
  messagingSenderId: "000000000000",
  appId: "1:000000000:web:000000000"
};
```

---

## 📊 Recursos Administrativos

### Dashboard

* Total de convidados
* Total de confirmações
* Total de acompanhantes
* Gráficos de presença

### Pesquisa

* Nome
* Telefone
* Status

### Exportação

* Excel
* CSV

---

## 📱 Compartilhamento WhatsApp

O sistema gera automaticamente links de compartilhamento:

```text
https://wa.me/
```

permitindo o envio rápido do convite para familiares e amigos.

---

## 🎯 Objetivos do Projeto

Este projeto foi desenvolvido para demonstrar conhecimentos em:

* HTML5
* CSS3
* JavaScript
* Firebase
* Firestore
* Manipulação do DOM
* CRUD
* Responsividade
* Integração com APIs
* PWA
* UX/UI Design

---

## 🔮 Melhorias Futuras

* Login administrativo
* Convites por e-mail
* Sistema de check-in por QR Code
* Notificações Push
* Lista de presentes integrada
* Confirmação automática via WhatsApp
* Múltiplos eventos
* Área exclusiva para organizadores

---

## 📸 Screenshots

Adicione imagens do projeto na pasta:

```text
assets/images
```

Exemplo:

```markdown
![Tela Inicial](assets/images/home.png)

![Confirmação](assets/images/confirmacao.png)

![Dashboard](assets/images/dashboard.png)
```

---

## 👨‍💻 Autor

Matheus Samuel

### GitHub

https://github.com/matheus-samuel-dev

### LinkedIn

https://www.linkedin.com/in/matheus-samuel-dev/

---

## ⭐ Demonstração

Quando publicado:

```text
https://seuusuario.github.io/convite-aniversario
```

---

## 📄 Licença

Este projeto está disponível para fins de estudo, aprendizado e demonstração de portfólio.

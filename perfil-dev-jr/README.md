# Perfil Dev Jr

Aplicativo mobile desenvolvido em **React Native com Expo** para apresentar um perfil profissional de uma candidata a Desenvolvedora Mobile Júnior. O projeto foi pensado para ser simples, organizado e funcional, com foco em componentes básicos do React Native, boa organização de código e navegação por abas inferiores.

## Descrição

Este app simula uma apresentação profissional para a empresa fictícia **DevStart Mobile**. A experiência é dividida em três telas principais acessadas por uma barra de abas inferior: perfil, habilidades e projetos/contato.

O layout foi montado com `StyleSheet` e componentes nativos, sem uso de bibliotecas visuais prontas.

## Tecnologias utilizadas

- React Native
- Expo
- JavaScript
- Git
- GitHub

## Funcionalidades implementadas

- Navegação por abas inferiores com 3 telas
- Tela de perfil com nome, imagem, cargo e seção sobre mim
- Tela de habilidades com lista contendo mais de 5 itens
- Tela de projetos com pelo menos 2 projetos apresentados
- Área de contato com e-mail, GitHub, LinkedIn/portfólio, campo de mensagem e botão de envio
- Uso de `View`, `Text`, `Image`, `ScrollView`, `FlatList`, `TextInput`, `Button` e `StyleSheet`
- Organização do app em arquivos separados dentro da pasta `screens/`

## Telas

### Perfil

Apresenta a candidata com imagem, nome, cargo e uma seção "Sobre mim" com um resumo profissional. A tela foi construída para parecer um cartão de apresentação, com destaque para a foto e o texto principal.

### Habilidades

Exibe uma lista de competências técnicas e comportamentais. A lista foi feita com `FlatList` para manter o código organizado e demonstrar uso de componente de renderização de listas.

### Projetos/Contato

Mostra dois projetos de exemplo com nome, descrição e tecnologias utilizadas. A mesma tela também reúne os canais de contato e um pequeno formulário com campo de mensagem e botão "Enviar contato".

## Organização do código

O projeto foi organizado da seguinte forma:

- `App.js`: controla a estrutura principal do app e a navegação por abas
- `screens/PerfilScreen.js`: conteúdo da tela de perfil
- `screens/HabilidadesScreen.js`: conteúdo da tela de habilidades
- `screens/ProjetosScreen.js`: conteúdo da tela de projetos e contato
- `assets/`: pasta reservada para imagens e outros arquivos estáticos

Em vez de instalar uma biblioteca externa de navegação, foi criada uma barra de abas personalizada com `TouchableOpacity` e controle de estado. Essa escolha mantém o projeto leve e atende ao requisito de navegação inferior de forma clara.

## Decisões tomadas

- Usei uma paleta escura com contraste forte para dar aparência mais profissional ao app.
- Separei cada tela em um arquivo próprio para melhorar manutenção e leitura.
- Adotei listas e formulários simples para cobrir os componentes pedidos no teste.
- Criei uma navegação inferior manual para evitar dependências extras e manter o foco no React Native puro.
- Usei uma imagem remota no perfil para cumprir o requisito de exibição de imagem sem complicar a estrutura do projeto.

## Diferenciais

- Interface organizada com card visual em cada tela
- Barra de abas inferior com estado visual ativo
- Texto explicativo em cada área para deixar a apresentação mais profissional
- Formulário de contato com validação simples antes do envio

## Como executar o projeto

1. Instale as dependências:

	```bash
	npm install
	```

2. Inicie o Expo:

	```bash
	npx expo start
	```

3. Abra o projeto no Expo Go, no navegador ou em um emulador Android/iOS.

## Estrutura do projeto

```text
perfil-dev-jr/
├── App.js
├── index.js
├── app.json
├── screens/
│   ├── PerfilScreen.js
│   ├── HabilidadesScreen.js
│   └── ProjetosScreen.js
├── assets/
└── README.md
```

## Autor

Victor Boehm

# Avaliação Prática — Teste Técnico Dev Jr Mobile

---

**ATENÇÃO:**

Antes de iniciar o teste, faça um **fork** deste repositório para a sua conta do GitHub. Realize todo o desenvolvimento no seu repositório forkado. Ao finalizar, envie o **link do seu repositório** (com as alterações realizadas) como entrega.

---

## React Native com Expo + TabBar + GitHub

---

## Problema

A empresa fictícia **DevStart Mobile** está contratando um(a) **Desenvolvedor(a) Mobile Júnior**.

Durante o processo seletivo, a empresa deseja avaliar se o candidato consegue criar um aplicativo mobile simples, organizado e funcional usando **React Native com Expo**.

Além da construção da interface, a empresa também quer verificar se o candidato sabe:

- Criar um projeto com Expo;
- Utilizar componentes básicos do React Native;
- Trabalhar com navegação por abas inferiores;
- Organizar telas em arquivos separados;
- Aplicar estilos com `StyleSheet`;
- Utilizar imagens;
- Criar campos de entrada com `TextInput`;
- Utilizar botões com `Button`;
- Trabalhar com listas simples;
- Versionar o projeto no GitHub;
- Criar um `README.md`;
- Explicar o próprio código em uma entrevista técnica.

---

## Solução

Você deverá desenvolver um aplicativo mobile chamado:

```bash
perfil-dev-jr
```

O aplicativo deverá simular um **perfil profissional de um candidato a uma vaga de Desenvolvedor Mobile Júnior**.

A aplicação deverá possuir navegação por abas inferiores, conhecida como **TabBar** ou **Bottom Tabs**, permitindo que o usuário acesse diferentes telas do aplicativo.

---

## Conteúdos das aulas que serão cobrados

A avaliação será baseada nos conteúdos trabalhados nas aulas de **React Native com Expo**, incluindo:

- Criação de projeto com Expo;
- Estrutura básica de um projeto React Native;
- Uso de componentes básicos;
- Criação de telas;
- Navegação com TabBar / Bottom Tabs;
- Organização de arquivos em pastas;
- Uso de imagens;
- Uso de `ScrollView`;
- Uso de `FlatList`;
- Uso de `TextInput`;
- Uso de `Button`;
- Estilização com `StyleSheet`;
- Git e GitHub;
- Commits com mensagens claras;
- Criação de README.

---

## Criação do projeto

O projeto deverá ser criado com o comando:

```bash
npx create-expo-app@latest perfil-dev-jr --template blank
```

Depois, acesse a pasta do projeto:

```bash
cd perfil-dev-jr
```

---

## Instalação da navegação

Caso esteja usando React Navigation, instale as dependências necessárias:

```bash
npm install @react-navigation/native
npm install @react-navigation/bottom-tabs
npx expo install react-native-screens react-native-safe-area-context
```

Se for utilizar ícones na TabBar, instale também:

```bash
npx expo install @expo/vector-icons
```

---

## Estrutura sugerida do projeto

Organize o projeto de forma parecida com o exemplo abaixo:

```text
perfil-dev-jr/
│
├── App.js
├── screens/
│   ├── PerfilScreen.js
│   ├── HabilidadesScreen.js
│   └── ProjetosScreen.js
│
├── assets/
│   └── imagem-perfil.png
│
└── README.md
```

---

# Requisitos do aplicativo

O aplicativo deverá possuir **pelo menos 3 telas**, acessadas por meio da **TabBar**.

---

## 1. Tela Perfil

A tela de perfil deve apresentar as principais informações do candidato.

Ela deve conter:

- Nome do candidato;
- Imagem ou foto de perfil;
- Cargo desejado;
- Seção **Sobre mim**.

Exemplo de informações:

```text
Nome: Ana Souza
Cargo: Desenvolvedora Mobile Júnior

Sobre mim:
Sou estudante do curso Técnico em Desenvolvimento de Sistemas e estou aprendendo React Native com Expo. Tenho interesse em desenvolvimento mobile, criação de interfaces e boas práticas de programação.
```

---

## 2. Tela Habilidades

A tela de habilidades deve apresentar uma lista com pelo menos **5 habilidades** do candidato.

Exemplos de habilidades:

```text
React Native
Expo
JavaScript
Git e GitHub
Lógica de Programação
HTML e CSS
Trabalho em equipe
Comunicação
```

A lista pode ser feita com:

- `Text`;
- `ScrollView`;
- `FlatList`.

O uso de `FlatList` será considerado um diferencial.

---

## 3. Tela Projetos/Contato

A tela de projetos e contato deve apresentar pelo menos **2 projetos** do candidato.

Cada projeto deve conter:

- Nome do projeto;
- Descrição curta;
- Tecnologias utilizadas.

Exemplo:

```text
Projeto: Tela de Login
Descrição: Interface simples de login criada durante as aulas.
Tecnologias: React Native, Expo e StyleSheet.
```

Outro exemplo:

```text
Projeto: Lista de Habilidades
Descrição: Aplicativo com uma lista simples usando FlatList.
Tecnologias: React Native, Expo e JavaScript.
```

A mesma tela também deve conter uma área de contato com:

- E-mail;
- GitHub;
- LinkedIn ou portfólio;
- Um campo `TextInput` para digitar uma mensagem;
- Um botão `Button` com o texto **Enviar contato**.

Atenção: o botão **não precisa enviar a mensagem de verdade**. Ele pode apenas existir visualmente na tela.

---

# Requisitos técnicos obrigatórios

O projeto deverá utilizar:

- React Native com Expo;
- JavaScript;
- `View`;
- `Text`;
- `Image`;
- `ScrollView` ou `FlatList`;
- `TextInput`;
- `Button`;
- `StyleSheet`;
- TabBar / Bottom Tabs;
- Pelo menos 3 telas;
- Pelo menos uma imagem;
- Organização em pastas;
- Código indentado;
- Layout organizado;
- Projeto funcionando no Expo Go, navegador ou emulador.

---

# Requisitos de navegação

O aplicativo deverá possuir navegação inferior por abas, com pelo menos 3 opções.

Exemplo de abas:

```text
Perfil
Habilidades
Projetos
```

Ou:

```text
Início
Skills
Contato
```

Cada aba deve abrir uma tela diferente.

---

# Requisitos de interface

A interface deve ser pensada para uso em smartphone.

O aplicativo deve apresentar:

- Boa leitura dos textos;
- Espaçamento adequado;
- Cores combinando;
- Títulos destacados;
- Seções bem separadas;
- Layout organizado;
- Aparência de portfólio profissional;
- Navegação fácil de entender.

Não é permitido usar bibliotecas visuais prontas, como:

```text
NativeBase
React Native Paper
Tamagui
UI Kitten
```

A estilização deve ser feita pelo próprio aluno usando `StyleSheet`.

---

# O que não será cobrado

Nesta avaliação, **não será necessário** usar:

- Banco de dados;
- Login real;
- Autenticação;
- API;
- AsyncStorage;
- Drawer;
- Integração com backend;
- Cadastro real;
- Envio real de formulário.

---

# Regras de Git e GitHub

O projeto deverá ser versionado com Git e enviado para o GitHub.

## O repositório deve conter:

- Nome do repositório:

```text
perfil-dev-jr
```

- Código completo do projeto;
- Arquivo `README.md`;
- Pelo menos **3 commits** com mensagens claras;
- Link do repositório entregue ao professor.

---

## Exemplos de boas mensagens de commit

```bash
git commit -m "Cria projeto com Expo"
```

```bash
git commit -m "Adiciona navegação com TabBar"
```

```bash
git commit -m "Cria telas de perfil habilidades e projetos"
```

```bash
git commit -m "Finaliza estilos e README"
```

---

## Exemplos de mensagens ruins de commit

```text
teste
aaa
coisas
final
arrumei
atividade
```

---

# README obrigatório do aluno


O repositório do aluno deverá conter um arquivo `README.md` com as seguintes informações e uma explicação detalhada de tudo o que foi feito no projeto. Descreva as telas, funcionalidades, decisões tomadas, organização do código e qualquer diferencial implementado. Seja claro e completo na explicação.

```markdown
# Perfil Dev Jr

## Descrição
Aplicativo criado em React Native com Expo para apresentar um perfil profissional de candidato a Desenvolvedor Mobile Júnior.

## Tecnologias utilizadas
- React Native
- Expo
- JavaScript
- React Navigation
- Git
- GitHub

## Funcionalidades
- Exibe dados do candidato
- Apresenta uma tela de perfil
- Lista habilidades
- Mostra projetos
- Exibe informações de contato
- Possui navegação por abas inferiores

## Como executar o projeto

1. Clone o repositório:
git clone link-do-repositorio

2. Acesse a pasta:
cd perfil-dev-jr

3. Instale as dependências:
npm install

4. Execute o projeto:
npx expo start

## Autor
Nome do aluno
```

---

# Recomendações

Durante o desenvolvimento:

- Use apenas estilos criados por você com `StyleSheet`;
- Organize a aplicação em telas separadas;
- Use nomes claros para arquivos, variáveis e estilos;
- Teste a navegação entre as abas;
- Teste o aplicativo antes de entregar;
- Não copie código sem entender;
- Faça commits durante o desenvolvimento;
- Capriche na aparência da tela;
- Cuide da experiência do usuário;
- Pense como se estivesse entregando um teste para uma vaga de Dev Jr.

---

# Entrega

## Como entregar

1. Faça um **fork** deste repositório para a sua conta do GitHub.
2. Realize todo o desenvolvimento no seu repositório forkado.
3. Ao finalizar, envie as seguintes informações:

```text
Nome:
Turma:
Link do seu repositório forkado no GitHub:
```

O link deve apontar para o seu repositório público com o código desenvolvido.

---

# Entrevista técnica simulada

Após a entrega, o aluno poderá ser chamado para uma entrevista técnica simulada.

Durante a entrevista, o aluno deverá explicar o próprio projeto e responder perguntas sobre os conteúdos vistos em aula.

---

## Perguntas possíveis da entrevista

### Sobre o projeto

1. Qual é o objetivo do seu aplicativo?
2. Quais telas existem no seu app?
3. Como você organizou os arquivos do projeto?
4. O que aparece na tela de Perfil?
5. O que aparece na tela de Habilidades?
6. O que aparece na tela de Projetos/Contato?
7. Qual foi sua maior dificuldade?
8. O que você melhoraria no projeto se tivesse mais tempo?

---

### Sobre React Native e Expo

9. Para que serve o React Native?
10. Para que serve o Expo?
11. Qual comando foi usado para criar o projeto?
12. Qual arquivo principal você editou no projeto?
13. Como você testou o aplicativo?

---

### Sobre componentes

14. Para que serve o componente `View`?
15. Para que serve o componente `Text`?
16. Para que serve o componente `Image`?
17. Para que serve o componente `TextInput`?
18. Para que serve o componente `Button`?
19. Para que serve o componente `ScrollView`?
20. Se você usou `FlatList`, para que ela serve?

---

### Sobre navegação

21. O que é uma TabBar?
22. Para que serve a navegação por abas?
23. Quantas telas seu aplicativo possui?
24. Como o usuário muda de uma tela para outra?
25. Qual biblioteca foi usada para criar a TabBar?

---

### Sobre StyleSheet

26. Para que serve o `StyleSheet`?
27. Como você alterou a cor de fundo da tela?
28. Como você mudou o tamanho dos textos?
29. Como você criou espaçamentos na tela?
30. Como você arredondou as bordas de algum elemento?

---

### Sobre Git e GitHub

31. Para que serve o Git?
32. Para que serve o GitHub?
33. O que é um commit?
34. Quantos commits você fez?
35. Por que mensagens claras de commit são importantes?
36. Qual comando envia o projeto para o GitHub?

---

### Sobre postura profissional

37. Você entende todo o código que entregou?
38. O que você faria se encontrasse um erro que não sabe resolver?
39. Como você explicaria seu aplicativo para uma pessoa que não entende programação?
40. Como você lidaria com uma crítica sobre seu código?

---

# Critérios de avaliação

| Critério de avaliação | Sim ✅ | Parcial ⚠️ | Não ❌ |
|---|---|---|---|
| Criou o projeto corretamente com Expo |  |  |  |
| Utilizou navegação com TabBar / Bottom Tabs |  |  |  |
| Criou pelo menos 3 telas diferentes |  |  |  |
| A TabBar permite acessar todas as telas |  |  |  |
| Criou tela de Perfil |  |  |  |
| Criou tela de Habilidades |  |  |  |
| Criou tela de Projetos/Contato |  |  |  |
| Utilizou `View` corretamente |  |  |  |
| Utilizou `Text` corretamente |  |  |  |
| Utilizou `Image` corretamente |  |  |  |
| Utilizou `TextInput` na área de contato |  |  |  |
| Utilizou `Button` na área de contato |  |  |  |
| Utilizou `ScrollView` ou `FlatList` corretamente |  |  |  |
| Utilizou `StyleSheet` para estilização |  |  |  |
| A tela de Perfil possui nome, imagem e cargo |  |  |  |
| A tela de Perfil possui seção Sobre mim |  |  |  |
| A tela de Habilidades possui pelo menos 5 habilidades |  |  |  |
| A tela de Projetos possui pelo menos 2 projetos |  |  |  |
| A área de contato possui informações do candidato |  |  |  |
| O layout está organizado e agradável |  |  |  |
| O app possui boa leitura no celular |  |  |  |
| O código está indentado e compreensível |  |  |  |
| Usou nomes claros para arquivos, variáveis e estilos |  |  |  |
| Organizou arquivos em pastas, como `screens` |  |  |  |
| Criou repositório no GitHub |  |  |  |
| Fez pelo menos 3 commits claros |  |  |  |
| Criou README.md corretamente |  |  |  |
| Entregou o link do repositório |  |  |  |
| Conseguiu explicar o próprio projeto |  |  |  |
| Demonstrou postura profissional na entrevista |  |  |  |

---

# Sugestão de pontuação

| Parte avaliada | Pontos |
|---|---:|
| Aplicativo funcionando | 1,5 |
| Navegação com TabBar e telas | 2,0 |
| Uso correto dos componentes básicos | 1,5 |
| Organização visual e layout | 1,0 |
| Uso correto do `StyleSheet` | 1,0 |
| GitHub, commits e README | 2,0 |
| Entrevista técnica | 1,0 |
| **Total** | **10,0** |

---

# Observação importante

Esta avaliação simula um teste técnico para uma vaga de **Desenvolvedor Mobile Júnior**.

Por isso, além do aplicativo funcionar, também serão avaliados:

- Organização;
- Clareza do código;
- Capricho visual;
- Uso correto do GitHub;
- Capacidade de explicar o projeto;
- Postura durante a entrevista técnica.

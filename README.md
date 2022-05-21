# NLW Return – Mission Impulse
##### Github: (https://github.com/dorensbach/nlw-return-mission-impulse)

>Acrescentar aqui uma imagem da aplicação pronta

Instalar a versão LTS mais recente do [Node.JS](https://nodejs.org)
>(Versão instalada (node -v): v16.15.0\
(Versão NPM instalada (npm -v): 8.5.5

## Web (React)
Criar um projeto:\
`npm create vite@latest`\
Project name: *web*\
Select a framework: *react*\
Select a variant: *react-ts*\
`cd web`\
Instalar as dependencias: `npm install`\
Para rodar o projeto: `npm run dev`\
Instalar o Tailwind CSS: `npm install -D tailwindcss postcss autoprefixer`\
Criar o tailwind.config.js e postcss.config.css: `npx tailwfile:./dev.dbindcss init -p`\
Instalar pacote de ícones phosphor-react: `npm install phosphor-react`\
Instalar Headless UI (acessibilidade): `npm install @headlessui/react`\
Instalar o tailwindcss/forms: `npm install -D @tailwindcss/forms`\
Instalar o tailwind-scrollbar: `npm install --save-dev tailwind-scrollbar`\
Instalar a biblioteca html2canvas: `npm install html2canvas`

## Server (Node.JS)
`npm init -y` Cria um package.json para o projeto. Usa-se quando o projeto será configurado do zero, provavelmente sem um framework\
Instala o typescript: `npm i typescript @types/node ts-node-dev -D`\
Cria o arquivo tsconfig.json: `npx tsc --init` (também pode ser `npx typescript --init`)\
`npx tsc`: Inicializa as(ou algumas) configurações que estão no tsconfig.json, como rootDir e outDir\
Biblioteca Express (usado para lidar rotas):`npm i express`\
Biblioteca de tipagem para o Express funcionar com typescript: `npm i -D @types/express`\
Instalar [Prisma ORM](https://www.prisma.io/) como dependência de desenvolvimento: `npm i prisma -D`\
Prisma para produção: `npm i @prisma/client`\
`npx prisma init`: Cria um diretório chamado prisma e o .env\
Rodar as alterações pro BD: `npx prisma migrate dev`\
`npx prisma studio`: Sobe uma aplicação para ver o banco na porta [5555](localhost:5555)\
Para rodar o projeto: `npm run dev`\
Para envio de emails, instalar biblioteca nodemailer: `npm install nodemailer`\
Tipagem para o nodemailer: `npm install @types/nodemailer -D`\
Serviço para envio de email: [Mailtrap](https://mailtrap.io/)\
Jest: Ferramenta de testes. `npm install jest -D`\
Inicialização da configuração do Jest: `npx jest --init`\
Para o Jest lidar com arquivo de configuração com extensão TS: `npm install ts-node -D`\
Compilador Javascript, muito mais rápido do que o babel: [SWC](https://swc.rs/) `npm i -D @swc/core @swc/jest`\
Tipagens do Jest: `npm i @types/jest -D`
Para rodar os testes: `npm run test`
Instalar Cors: `npm i cors`
Instalar tipagens do Cors: `npm i @types/cors -D`

***
#### Texto original da Rocketseat
Apagar textos descritivos e deixar apenas os títulos, links, datas e horários

### De 02 a 08 de maio vamos construir juntos uma aplicação completa e acelerar sua evolução para o próximo nível na programação.

## Cronograma:

* 02 mai/segunda 08:00h - [Stage 1 – A aplicação será revelada](https://nextlevelweek.com/episodios/impulse/aula-1/edicao/8)
* 03 mai/terça 08:00h - [Stage 2 – Aceleração máxima](https://nextlevelweek.com/episodios/impulse/aula-2/edicao/8)
* 04 mai/quarta 08:00h - [Stage 3 – Novas Habilidades](https://nextlevelweek.com/episodios/impulse/aula-3/edicao/8)
* 05 mai/quinta 08:00h - [Stage 4 – Um novo território](https://nextlevelweek.com/episodios/impulse/aula-4/edicao/8)
* 06 mai/sexta 08:00h - [Stage 5 - A descoberta](https://nextlevelweek.com/episodios/origin/aula-5/edicao/8)

## Stage 4 – Um novo território


>Nessa aula você vai entender como acelerar o processo de aprendizado. Além disso, descobriremos um novo território: o Mobile. E quem vai estar junto contigo nessa aula codando a parte mobile da nossa aplicação, é o Rodrigo Gonçalves, educator aqui na Rocketseat e mestre em educação com ênfase em tecnologia.

## Stage 5 - A descoberta


>Existe um detalhe em específico que ainda não foi revelado. E ele é primordial pra você se tornar um destaque no mercado e finalmente ter acesso à sua primeira oportunidade ou uma boa vaga disponível que você almeja. Você está pronto(a) para saber o que te espera?

## Material complementar

Para preparar você para essa semana incrível de muito conteúdo e aprendizado, vamos começar configurando nosso ambiente de desenvolvimento com algumas ferramentas fundamentais para chegarmos no fim desse evento com nosso projeto finalizado. Nas aulas mencionamos algumas documentações, então vamos centralizar todas elas por aqui para facilitar!

[Figma do projeto](https://www.figma.com/community/file/1102912516166573468/Feedback-Widget)\
[Notion do projeto](https://efficient-sloth-d85.notion.site/Impulse-58f2daadb8e1433894420cbc57571087)

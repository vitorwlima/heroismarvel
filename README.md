# Heróis Marvel

Entre no site por aqui: heroismarvel.vercel.app

Abaixo há um preview da aplicação rodando em desktop e em mobile.

https://user-images.githubusercontent.com/82615423/117585686-1cfb5000-b0ea-11eb-91d7-6588f7c21007.mp4

https://user-images.githubusercontent.com/82615423/117586171-de1ac980-b0ec-11eb-876a-17a91ccfa55c.mp4

Antes desse projeto, nunca havia trabalhado com React nem com APIs. Durante os dias 06 e 07, fiz um curso de reactJS de 10 horas de duração, aplicando os conceitos no VScode enquanto aprendia. Após isso, comecei o projeto com o conhecimento que tinha e fui buscando solucionar os problemas à medida que apareciam.

No começo, tentei fazer a API funcionar. Demoraram horas pois nunca havia usado uma API que possui senha (api key) assim como a da Marvel. Após conseguir dar o fetch inicial e ver o objeto returnar no console, tive que pensar em como o usuário iria poder inserir o herói que quisesse. Pensei que a única solução seria o usuário digitar o nome do herói perfeitamente assim como aparece nos links, ou rodar algum processo de limpar a string para retornar uma string que pudesse ser usada no link diretamente. Depois de algum tempo lendo a documentação da api, descobri que tinha o parâmetro "nameStartsWith" e me deu um alívio pois soube que seria isso que eu usaria.

Após isso, fiquei com dúvida no CSS se realizava a estilização por styled components ou css normal ou css modules, foi os três que vi durante meu estudo inicial. Decidi fazer os módulos pois ficaria relativamente organizado e eu não estava confortável com os styled components, embora tenha os achado uma ideia muito interessante e que pretendo aplicar nos próximos projetos.

Por fim, o website chegou em um nível que achei aceitável, com todas as funcionalidades de busca funcionando e um design básico que cumpre seu propósito. Em uma versão futura, irei adicionar algumas comics dos personagens em sua tela ou em uma seção separada por um botão, assim como otimizações no código. Além disso, pretendo implementar o typescript (não aprendi pois não achei que valeria a pena nesse período de tempo).



## Available Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

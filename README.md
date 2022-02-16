# Weather App

**O que é Weather App?**

Weather App é um app multiplataforma, que te possibilita ver o clima da sua localização de uma maneira rápida e fácil


<div align="center">
  <img src="https://user-images.githubusercontent.com/41873554/154170181-a7205133-fc3b-4bfc-bab6-c943b6135dc5.png" width="300px"/>

  <img src="https://user-images.githubusercontent.com/41873554/154172021-f49206f0-8893-4ff3-938a-67f742d5678b.png" width="300px" height="650px" />
</div>



# Configurações
Siga as instruções para o download e setup do app

## Projeto
Execute o seguinte comando para clonar o projeto e entrar na pasta raiz do mesmo:
```
$ git clone https://github.com/Dougsrodrigues/weather-app.git && cd weather-app
```

Agora crie um arquivo com o nome **.env** na raiz do projeto React Native, seguindo o .env_example como exemplo.

Agora basta executar na raiz do projeto o seguinte comando:
```
$ yarn install
```
**OBS: Neste projeto utilizamos o yarn como gerenciador de depêndencias**

E em seguida navegue para pasta ./ios e execute:

```
$ pod install
```

Por fim execute:

```
$ yarn android
```

ou:

```
$ yarn ios
```

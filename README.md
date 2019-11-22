<p align="center">
  <img src="https://skylab.rocketseat.com.br/api/files/1564682281422.svg",>
</p>

---

<p align="center">
  <br />
  <img src="https://img.shields.io/github/issues/SkullDarth/bootcamp-gostack-challenge-05">
  <img src="https://img.shields.io/github/forks/SkullDarth/bootcamp-gostack-challenge-05">
  <img src="https://img.shields.io/badge/made%20by-SkullDarth-lightgrey">
  <img src="https://img.shields.io/github/stars/SkullDarth/bootcamp-gostack-challenge-05">
  <img src="https://img.shields.io/github/license/SkullDarth/bootcamp-gostack-challenge-05">

  <!-- Indice personalizado -->
  <p align="center">
      <a href="#about-the-challenge">About the challenge</a>
      <strong>|</strong>
      <a href="#resources-and-procedures">Resources and Procedures</a>
      <strong>|</strong>
      <a href="#running-for-first-time">Running for First Time</a>
      <strong>|</strong>
      <a href="#project-tree">Project Tree</a>
      <strong>|</strong>
      <a href="#project-in-function">Project in function</a>
      <strong>|</strong>
      <a href="#license">License</a>
      <br />
      <br />
      <p align="center"> <strong>GoStack - Challenge 5: First project with React</strong></p>
   </p>

</p>

  > "Success is not the result of a game, but the destiny of a journey." !

---
## **About the Challenge**
#### Create an application from scratch to list repository files present in github api using **Webpack**, **Babel**, **Webpack Dev Server** **Styled components** and **ReactJS**..
#### Objective: Create new application funcionalities in module 5 project.
---
# Resources and Procedures
---
## Technologies APIs and Libraries used to create this project

- [x] FlexBox
- [x] [Tree-cli][tree-cli]
- [x] Webpack
- [x] Babel
- [x] ReactJS
- [x] HTML
- [x] CSS
- [x] axios
- [x] prop-types
- [x] react-icons
- [x] styled-components
- [x] eslint
- [x] prettier
- [x] editorconfig

---
## Developed Features

- [x] Header
- [x] Issue List
- [x] Repository List
- [x] Pagination List
- [x] Filter Issues List (Open, Closed, All)
- [x] API git-hub connection
---
## Running for First Time
To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js v10.16][nodejs] or higher + [Yarn v1.13][yarn] or higher installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/SkullDarth/bootcamp-gostack-challenge-05.git

# Go into the repository
$ cd bootcamp-gostack-challenge-05

# Install dependencies
$ yarn install

# Run the Project
$ yarn start

```
---
## Project Tree
To create a tree files in project run commands present right below in respository folder:

```bash
$ yarn add tree-cli

$ yarn tree -l 4 -o out.txt --ignore node_modules, .gitignore

```

#### Result after run comand present in top:

```bash
├── LICENSE
├── README.md
├── package.json
├── public
|  ├── favicon.ico
|  ├── index.html
|  ├── logo192.png
|  ├── logo512.png
|  └── robots.txt
├── src
|  ├── App.js
|  ├── components
|  |  └── Container
|  |     └── styles.js
|  ├── index.js
|  ├── pages
|  |  ├── Main
|  |  |  ├── index.js
|  |  |  └── styles.js
|  |  └── Repository
|  |     ├── index.js
|  |     └── styles.js
|  ├── routes.js
|  ├── services
|  |  └── api.js
|  └── styles
|     └── global.js
└── yarn.lock

directory: 3101 file: 12204

ignored: directory (216)

```
---
## Project in function

![image][Challenge-05]
---
## License
This project is under the MIT license. See the [LICENSE](./LICENSE) for more information.

---

#### Made by Yan Oliveira [Get in touch!](https://www.linkedin.com/in/yan-brito/)

<!-- Hiperlinks structure to base -->
<!-- Just refer the link using this sintax: "[challenger 02][challenge02]" -->
[challenge02]: https://github.com/SkullDarth/bootcamp-gostack-challenge-02

[homePage]: #
[tree-cli]:https://github.com/MrRaindrop/tree-cli
[nodejs]: https://nodejs.org/
[yarn]: https://yarnpkg.com/

[Challenge-05]:https://user-images.githubusercontent.com/16024701/69390939-ec361980-0caf-11ea-9681-e775092af3fb.gif



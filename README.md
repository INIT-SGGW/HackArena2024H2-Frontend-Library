# HackArena 2024 Frontend

This repo is a library of components, styles and utilities used for creating frontend apps for HackArena.

Currently it is used in [HackArena 2024 Frontend](https://hackarena.pl) ([repo](https://github.com/INIT-SGGW/HackArena2024-frontend)) and [HackArena Admin Panel](https://admin.hackarena.pl) ([repo]())

## How to use

Intended usage of this library is to be included as a submodule in frontend app repositories.

### 1. Add library as a submodule

> **Note**
>
> By default, all files in react project need to be in `src` directory, so it is recommended to add library as a submodule in `src` directory of your project.

`git submodule add https://github.com/INIT-SGGW/HackArena2024H2-Frontend-Library.git`

### 2. Import index.css

Import `index.css` from library to index.css of your project. In order to keep styles consistent, it is recommended not to add any styles to index.css of your project.

```css
@import url("./path/to/library/index.css");
```

### 3. Import components, styles and utilities

```javascript
import { Button, Input, Container } from "./path/to/library";
```

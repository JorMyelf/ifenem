# IFENEM

## Instalação

Será necessário ter o [NodeJs](https://nodejs.org/pt-br/) ^(v16.18.0) instalado na sua máquina.

**comandos**:

```bash
git clone https://github.com/JorMyelf/ifenem.git
cd ifenem
npm install
```

## Para desenvolver

Estou usando [browserify](https://browserify.org/) para converter o código em javascript para o navegador, porque uso importação de módulos com o NodeJs e módulos públicados no [npm](https://www.npmjs.com/). Então, a cada alteração no código javascript ou nos arquivos json, é necessário rodar o comando `npm run build` para que o código seja convertido.

Se quiser saber mais sobre o browserify, [clique aqui](https://diogo.nu/blog/comecando-com-browserify).

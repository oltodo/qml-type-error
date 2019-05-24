## To reproduce

```shell
$ git clone https://github.com/oltodo/qml-type-error.git
```

```shell
$ yarn
```

```shell
$ yarn build
```

```shell
$ yarn start
```

You should see the below error in your terminal:

```
file:///path/to/qml-type-error/bundle.js:119: TypeError: Type error
Warning: Setting a new default format with a different version or profile after the global shared context is created may cause issues with context sharing.
QSGContext::initialize: depth buffer support missing, expect rendering errors
QSGContext::initialize: stencil buffer support missing, expect rendering errors
```
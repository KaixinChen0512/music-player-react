# react-music-player
music player build with React
### 如何运行
**克隆到本地**
```shell
git clone git@github.com:KaixinChen0512/music-player-react.git
```

**安装依赖**
```shell
npm i
```

**开发启动**
```shell
npm start
```

**编译产品**
```shell
npm run build
```

**运行各阶段例子**

修改`webpack.config.js`中`entry`

比如`Router`例子
```javascript
entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch',
    path.join(__dirname, 'app/router/index.js')
],
```

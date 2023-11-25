#### 标签
* view === div
* 所有文本必须用text标签包裹
* 默认容器 布局方式都是flex
* 样式没有继承
* 单位：
  * 不用加单位，只写数字
  * 可以用百分比： “50%”
  * 使用Dimensions.get('window').width/height获取屏幕宽高
* 变换
  * style={{transform: [{translateY: 200}, {scale:2}]}}
* 标签（可以理解为UI库）
  * TouchableOpacity 可以绑定点击事件的块级标签， 支持绑定点击事件（onPress）
    * `<TouchableOpacity activeOpacity={0.5} onPress={handleOnPress}></TouchableOpacity>`
  * Image
    * `<Image source={require("./images/1.png")} />`
    * uri 用于显示网络图片，此时必须加宽高，图片才能正常展示
* {'\t'} 设置缩进，相当于css的text-indent

#### 语法
* 插值 --> {abc}
* 循环
    ```
    const params = ['first', 'second', 'third'];
    // 方法一：
    <Text>{params}</Text> // 可以直接循环出子元素
    // 方法二：
    {arr.map(item => <View key={item}><Text>{item}</Text></View>)}
    ```

#### 1. 在react native官网跟着搭建环境相关步骤执行，创建项目。
* 在创建项目过程中，有关于权限的报错， [Insecure world writable dir /opt/homebrew/bin in PATH, mode 040777](https://www.zimuwu.cn/itarticle/shell/307.html)

* 在bilibili上找了相关视频，结合本地express项目开始搭建项目

* 添加路由[reactnavigation](https://reactnavigation.org/docs/params)
  * 这里按文档进行操作即可



问题：
  * react native 无法正常调用本地api
    * 查了很多资料，都说让把localhost改成ip地址即可，因为我用的是mac，所以运行了curl ipconfig查看个人ip，【112.*.*.*】,把请求域名改成这个后，接口显示502.
    * 偶然的在本地运行vue项目，运行成功后会显示两个地址，一个localhost:8888 和一个 192.168.*.*；当时就想会不会用192的地址是可以的，复制粘贴后，发现。果然，它成功了
  * 无法查看代码中的console信息
    * [在控制台中添加打印信息](https://blog.logrocket.com/reviewing-react-native-console-logs-best-practices/)
    
      ```
      const log = logger.createLogger();
      log.info(msg); // 正常打印信息
      log.
      ```
    
  * 瀑布流
    
    * renderScrollComponent:  Scrollview
    * Columns.map(col => VirtualizedList)
    

[参考地址](https://www.reactnative.express/exercises)
[React Native 打不开 "launchPackager.command",因为它来自身份不明的开发者](https://www.twle.cn/t/818)
[vscode设置eslint保存文件时自动修复eslint错误](https://blog.csdn.net/qq_41887214/article/details/111769188)
[react 函数式组件](http://www.manongjc.com/detail/53-dmuyqqeuzriplne.html)
[React Native 实现瀑布流列表页,分组+组内横向的列表页](https://www.jianshu.com/p/88a56de0191d)

[react-native如何实现瀑布流列表](https://blog.csdn.net/DuoguoDad/article/details/126281134)



#### [修改第三方npm包（记录修改recyclerlistview组件为瀑布流）](https://time.geekbang.org/column/article/509753?code=FAqHFVRUur%2FgAP-yJQWitk9ieF80imRky3PVsIs%2FX6A%3D)

* 将node_modules/npm包中的package.json中 main参数该为`src/index.ts`，这时react native会在编译时通过babel将.ts、.tsx文件编译为js文件再执行
* 改完后，需要重新跑一次`yarn start`,
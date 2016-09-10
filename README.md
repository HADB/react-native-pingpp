# react-native-pingpp

## 安装(iOS)

1. `npm install react-native-pingpp@https://github.com/HADB/react-native-pingpp.git --save`

2. `react-native link react-native-pingpp`

3. 在`TARGETS -> Build Phases -> Link Binary With Libraries`中添加必要的依赖项：
   ```
   CFNetwork.framework
   SystemConfiguration.framework
   Security.framework
   QuartzCore.framework
   CoreTelephony.framework
   libc++.tbd
   libz.tbd
   libsqlite3.0.tbd
   libstdc++.tbd
   CoreMotion.framework
   ```
4. 在`TARGETS -> Build Settings -> Framework Search Paths`中添加 `$(SRCROOT)/../node_modules/react-native-pingpp/ios/lib`，选择`recursive`

5. 在Project Navigator中右键Libraries，选择Add Files to [你的项目名称]，找到`node_modules/react-native-pingpp/ios/lib/Channels/AlipaySDK.framework`和`node_modules/react-native-pingpp/ios/lib/Channels/AlipaySDK.bundle`，并添加进来

6. 在`TARGETS -> Info -> URL Types`中添加 "URL Schemes"，如果使用微信，填入所注册的微信应用程序 id，如果不使用微信，则自定义，允许英文字母和数字，首字母必须是英文字母，建议起名稍复杂一些，尽量避免与其他程序冲突

7. 在`TARGETS -> Build Settings -> Other Linker Flags`中添加`-ObjC`

8. iOS 9以上版本如需使用支付宝和微信，许在Info.plist中添加以下代码：
   ```
   <key>LSApplicationQueriesSchemes</key>
   <array>
       <string>weixin</string>
       <string>wechat</string>
       <string>alipay</string>
       <string>mqq</string>
   </array>
   ```
9. 支付宝最新包可前往[https://doc.open.alipay.com/docs/doc.htm?spm=a219a.7629140.0.0.VRzxf4&treeId=193&articleId=104509&docType=1](https://doc.open.alipay.com/docs/doc.htm?spm=a219a.7629140.0.0.VRzxf4&treeId=193&articleId=104509&docType=1)下载，注意只能下载`SDK&DEMO`中的，`SDK`中的包有问题。
10. 其他未尽事宜，可参考：[https://github.com/PingPlusPlus/pingpp-ios](https://github.com/PingPlusPlus/pingpp-ios)

## 安装(Android)

1. TODO
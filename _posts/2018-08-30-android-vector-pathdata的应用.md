---
layout: post
title: Android-Vector-PathData的应用
date: 2018-08-30 17:45 +0800
categories:
  - Android
tags:
  - vector
---
{::comment}
这里显示的是摘要信息也是概要信息
{:/comment}

介绍了Vector中椭圆圆弧曲线命令的使用

<!-- more -->

{% include toc.html %}

<!-- 设置图片公共地址 -->
{% assign tempPath = site.baseImagePath %}
{% assign tempDate = page.date | date:"%Y%m" %}
{% assign tempDay = page.date | date:"%d" %}
{% assign imagePath = tempPath | append: tempDate | append: "/" | append: tempDay | append: "-" | append: page.tags[0] | append: "-" %}


## 概述
文章介绍了Vector中椭圆圆弧曲线命令的使用，关于其他命令的使用请参考[SVG 的 PathData 在 Android 中的使用](https://blog.csdn.net/zwlove5280/article/details/73196543)一文，感谢！

## 椭圆圆弧曲线命令
A/a 表示椭圆圆弧曲线命令，参数为（rx ry x-axis-rotation large-arc-flag sweep-flag x,y）,其中 rx 和 ry 表示椭圆长轴和短轴的半径，x-axis-rotation 表示绕当前坐标轴的x轴旋转的角度，large-arc-flag 如果为1表示取长弧，为0表示取短弧，sweep-flag 为1表示顺时针方向绘制的弧，为0表示逆时针方向绘制的弧，x,y 标志圆弧终点坐标。
以上解释有点晦涩难懂，概述中提及到的文章中对于该命令的表达也很概括，但是还是有点难懂，接下来我逐个字段解释下。
### rx ry
rx 和 ry 表示椭圆长轴和短轴的半径，这样的描述在此处是不准确的，`rx此处指的就是x轴方向的椭圆半径，ry此处指的就是y轴方向的椭圆半径`，例如：  
![]({{imagePath}}01.png)

源码:
```xml
<vector xmlns:android="http://schemas.android.com/apk/res/android"
        android:width="24dp"
        android:height="24dp"
        android:viewportWidth="50.0"
        android:viewportHeight="50.0">


    <path
            android:strokeWidth="1"
            android:strokeColor="#ff3344"
            android:pathData="M 20,20 A 5 10 0 1 1 30,20"/>

</vector>

```

> 从图中可以看出，5并不是长轴的半径，而是x轴方向的半径，10也不是短轴的半径，而是y轴方向的半径

### x-axis-rotation
x-axis-rotation 表示绕当前坐标轴的x轴旋转的角度，这个表述也有点难以理解，下面一张图就可以很好解释它是如何旋转的。      
![]({{imagePath}}02.png)

可以看出，按顺时针方向旋转，但**始终经过的始点(20,20)和终点(30,20)这两个点**，所以该字段的作用可以显而易见的看出。

### large-arc-flag 
如果为1表示取长弧，为0表示取短弧
这个意思还是很直白的，但是单独使用是没有意义的，需要结合sweep-flag参数

### sweep-flag
1表示顺时针方向绘制的弧，0表示逆时针方向绘制的弧  
经过始点(20,20)和终点(30,20),在 x-axis-rotation 为0，large-arc-flag 为1，即不旋转且取长边的情况下，可以绘制两个交叉的椭圆  
![]({{imagePath}}03.png)  

源码：
```
<vector xmlns:android="http://schemas.android.com/apk/res/android"
        android:width="24dp"
        android:height="24dp"
        android:viewportWidth="50.0"
        android:viewportHeight="50.0">


    <path
            android:strokeWidth="1"
            android:strokeColor="#ff3344"
            android:pathData="M 20,20 A 10 10 0 1 1 30,20"/>
    <path
            android:strokeWidth="1"
            android:strokeColor="#ffffff"
            android:pathData="M 20,20 A 10 10 0 1 0 30,20"/>
</vector>

```  

可以发现以上源码中的path只有 sweep-flag 状态相反，红色的是顺时针绘制弧，白色的是逆时针绘制弧，切记一点：`绘制的时候是从始点(20,20)到终点(30,20)来做逆时针还是顺时针的绘制`  

现在将large-arc-flag改为0，其他参数不变，看一下效果：  
![]({{imagePath}}04.png)  

源码：
```
<vector xmlns:android="http://schemas.android.com/apk/res/android"
        android:width="24dp"
        android:height="24dp"
        android:viewportWidth="50.0"
        android:viewportHeight="50.0">


    <path
            android:strokeWidth="1"
            android:strokeColor="#ff3344"
            android:pathData="M 20,20 A 10 10 0 0 1 30,20"/>
    <path
            android:strokeWidth="1"
            android:strokeColor="#ffffff"
            android:pathData="M 20,20 A 10 10 0 0 0 30,20"/>
</vector>

```

### x,y
x,y 标志圆弧终点坐标，就是椭圆经过的另一个点，示例中的(30,20)点

## clip-path命令
该命令只有两点需要注意：  
1. 绘制pathData时，需要最少绘制两个闭合路径，第一个路径（顺时针）为选取区域，即想要在哪个区域进行截取，第二个路径（逆时针）为截取区域，即为实际截取的区域
2. 第一个区域如果顺时针绘制，那么第二个截取区域需要逆时针绘制，否则无法截取  

![]({{imagePath}}05.png)

源码：  
```
<vector xmlns:android="http://schemas.android.com/apk/res/android"
        android:width="96dp"
        android:height="96dp"
        android:viewportWidth="96.0"
        android:viewportHeight="96.0">

    <clip-path android:pathData="M96,96 H0 V0 H96 z
    M72,72 V24H24v48z"/>

    <path
            android:fillColor="#ff3344"
            android:pathData="M 72,72 H0 V0 h72 V72z"/>
    <path
            android:fillColor="#ffffff"
            android:pathData="M 96,96 H24 V24 h72 V96z"/>

</vector>

```
## 兼容性
1. 如果版本低于21，在animated-vector的xml文件中会提示需要21版本的警告，这只是AS自身的link检查，可以直接忽略警告`tools:ignore="NewApi"`，在低于21版本的系统也是可以生效的，支持库已做了支持，参见：[AnimatedVectorDrawableCompat](https://android.jlelse.eu/animatedvectordrawablecompat-3d9568727c53)但是我在三星S3(4.1.2)手机上测试的时候偶尔会出现问题，如下图所示，不知何缘故：  
![]({{imagePath}}06.png)  


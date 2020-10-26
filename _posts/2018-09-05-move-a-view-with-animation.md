---
layout: post
title: "Move-a-View-with-Animation."
date: 2018-09-05 12:47 +0800
categories:
  - android
tags:
  - animation
  - path
---

{::comment}
这里显示的是摘要信息也是概要信息
{:/comment}

按照指定路径及插补器（Interpolator）以动画的形式移动一个视图

<!-- more -->

{% include toc.html %}

<!-- 设置图片公共地址 -->
{% assign tempPath = site.baseImagePath %}
{% assign tempDate = page.date | date:"%Y%m" %}
{% assign tempDay = page.date | date:"%d" %}
{% assign imagePath = tempPath | append: tempDate | append: "/" | append: tempDay | append: "-" | append: page.tags[0] | append: "-" %}

## 路径插补器（PathInterpolator）  
PathInterpolator的作用是当一个视图沿着指定路径移动时，按照PathInterpolator指定的插补器进行移动，如@interpolator/fast_out_slow_in.xml这样的Interpolator，前一段路径加速移出，后一段路径减速停止。  
可以通过两种方式创建PathInterpolator：  
### 1. 使用贝赛尔曲线创建  
* java代码创建：  
```java
Interpolator pathInterpolator = PathInterpolatorCompat.create(0.4f,0f,1f,1f);
 ObjectAnimator animator = ObjectAnimator.ofFloat(view, View.TRANSLATION_X, 200);
 animator.setInterpolator(pathInterpolator);
 animator.setDuration(5000);
 animator.start();
```
* xml代码创建：  
在anim资源文件夹中创建path.xml文件  

```xml
<pathInterpolator xmlns:android="http://schemas.android.com/apk/res/android"
    android:controlX1="0.4"
    android:controlY1="0"
    android:controlX2="1"
    android:controlY2="1"/>
```  
代码中调用：  
```java
 PathInterpolator pathInterpolator = new PathInterpolator(this, R.anim.path);
 ObjectAnimator animator = ObjectAnimator.ofFloat(binding.get().giftBag, View.TRANSLATION_X, 200);
 animator.setInterpolator(pathInterpolator);
 animator.setDuration(5000);
 animator.start();
```  

以上实现的效果是使view视图沿着当前x轴正方向移动100像素，以pathInterpolator作为插值器。  


### 2. 使用Path对象创建  
在创建PahtInterpolator时要求开始和结束的点必须在(0,0)和(1,1)点上，否则会报以下异常：  
> The Path must start at (0,0) and end at (1,1)  

```java
 if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
            Path path = new Path();
            path.quadTo(0.4f, 0, 1, 1);
            Interpolator pathInterpolator = PathInterpolatorCompat.create(path);
            ObjectAnimator animator = ObjectAnimator.ofFloat(binding.get().giftBag, View.TRANSLATION_X, 200);
            animator.setInterpolator(pathInterpolator);
            animator.setDuration(5000);
            animator.start();
        }
```
以上实现的效果同使用贝赛尔曲线创建的效果相同。  
附以上二阶贝赛尔曲线示例，可以看出随着时间推移，速度越来越快：  
![]({{imagePath}}01.png)  

## 自定义视图移动路径  
ObjectAnimator包含一个可设置路径的构造方法，使视图可以安装设定的路径移动。  
```java
 if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
            Path path = new Path();
            path.quadTo(50, 70, 100, 0);
            ObjectAnimator animator = ObjectAnimator.ofFloat(view, View.TRANSLATION_X, View.TRANSLATION_Y, path);
            Path pathInterpolator = new Path();
            pathInterpolator.quadTo(0.4f, 0, 1, 1);
            Interpolator interpolator = PathInterpolatorCompat.create(pathInterpolator);
            animator.setInterpolator(interpolator);
            animator.setDuration(5000);
            animator.start();
        }
```
说明：以上同时指定了视图移动的路径及Interpolator，效果如下（忽略图中的摇摆动画）：  
![]({{imagePath}}02.gif)  

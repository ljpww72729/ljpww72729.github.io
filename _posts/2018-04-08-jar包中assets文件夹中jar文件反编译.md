---
layout: post
title: jar包中assets文件夹中jar文件反编译
date: 2018-04-08 14:52 +0800
categories: tools
tags: jar
---

第三方jar包中的assets文件夹中包含jar文件，如何获取assets中的jar文件并反编译查看源码逻辑

<!-- more -->

{% include toc.html %}

{% assign tempPath = site.baseImagePath %}
{% assign tempDate = page.date | date:"%Y%m" %}
{% assign tempDay = page.date | date:"%d" %}
{% assign imagePath = tempPath | append: tempDate | append: "/" | append: tempDay | append: "-" | append: page.tags[0] | append: "-" %}

#### 获取assets文件夹中的jar文件
##### 解压jar文件
jar文件是将相关文件打包压缩并使用jar作为后缀命名，因此想要获取assets文件夹中的jar文件，需要将jar文件直接用压缩解压软件解压，从而获取assets文件夹中的jar文件。解压后的目录如下图所示：
![]({{ imagePath }}01.png)

##### 解压assets文件夹中的jar文件
同样，将assets文件夹中的jar文件解压，获取classes.dex文件，解压后如下图所示：
![]({{ imagePath }}02.png)

##### 反编译classes.dex文件
使用dex2jar将classes文件反编译成jar文件，然后使用Java Decompiler软件读取jar文件。

---
layout: post
title: memcached问题汇总
date: 2018-04-24 18:14 +0800
categories:
  - tutorials
tags:
  - memcached
---

{::comment}
这里显示的是摘要信息也是概要信息
{:/comment}

Jekyll kramdown 语法示例

<!-- more -->

{% include toc.html %}

<!-- 设置图片公共地址 -->
{% assign tempPath = site.baseImagePath %}
{% assign tempDate = page.date | date:"%Y%m" %}
{% assign tempDay = page.date | date:"%d" %}
{% assign imagePath = tempPath | append: tempDate | append: "/" | append: tempDay | append: "-" | append: page.tags[0] | append: "-" %}

## 安装
安装参考：  
[高性能缓存库Memcached 基础教程](https://blog.csdn.net/luanlouis/article/details/42425105)  
[官方安装指南](https://github.com/memcached/memcached/wiki/Install)  

### 安装问题及解决办法：
#### 1. memcached no acceptable C compiler found in $PATH
安装gcc:

> yum install gcc

参考：https://stackoverflow.com/questions/22067913/when-installing-memcached-i-receive-configure-error-no-acceptable-c-compiler

#### 2. can’t run as root without the -u switch
在执行 `memcached -d -p 11211 -m 256` 时会报以上错误。
说明：如果没有带 -u root 的话就会报：
can’t run as root without the -u switch
解决：带-u root就行！

> memcached -u root -d -p 11211 -m 256

参考：https://blog.csdn.net/e_wsq/article/details/20082307  

#### 3. telnet: command not found  
安装telnet:
>  yum list telnet*              列出telnet相关的安装包  
>  yum install telnet-server           安装telnet服务  
>  yum install telnet.*            安装telnet客户端  

## 参数说明
### stats
stats 是statistics单词的拼写，即统计的意思。该指令攻击当前memcached服务的各种指标。这些指标跟memcached 的性能和工作状况紧密相关。  
摘自：https://blog.csdn.net/luanlouis/article/details/42425105
![]({{imagePath}}01.png)
可通过本机远程获取该stats状态，使用如下命令：  
> echo stats \| nc 192.168.1.123 11211


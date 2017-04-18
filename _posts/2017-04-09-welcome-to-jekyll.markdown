---
layout: post
title:  "博客语法示例"
date:   2017-04-09 17:32:27 +0800
categories:
  - tutorials
tags:
 - jekyll
---

{::comment}
这里显示的是摘要信息也是概要信息
{:/comment}

Jekyll kramdown 语法示例

<!-- more -->


## Content
{:.no_toc}

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## 示例
### 显示图片：  
```
[![显示图片](/assets/blog/images/201704/logo.jpg "image description")*My caption*][personal blog]
```
[![显示图片](/assets/blog/images/201704/logo.jpg "image description")*My caption*][personal blog]

### 显示视频：  
```
<figure class="video_container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/7V-fIGMDsmE" frameborder="0" allowfullscreen></iframe>
</figure>
```
<figure class="video_container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/7V-fIGMDsmE" frameborder="0" allowfullscreen></iframe>
</figure>

### 显示本地视频：  
```
<figure class="video_container">
  <video controls="true" allowfullscreen="true" poster="/assets/blog/images/201704/logo.jpg">
    <source src="/assets/blog/images/201704/movie.mp4" type="video/mp4">
  </video>
</figure>
```
<figure class="video_container">
  <video controls="true" allowfullscreen="true" poster="/assets/blog/images/201704/logo.jpg">
    <source src="/assets/blog/images/201704/movie.mp4" type="video/mp4">
  </video>
</figure>

### 显示表格：  
```
| Default aligned | Left aligned | Center aligned  | Right aligned  |
|-----------------|:-------------|:---------------:|---------------:|
| First body part | Second cell  | Third cell      | fourth cell    |
| Second line     | foo          | **strong**      | baz            |
| Third line      | quux         | baz             | bar            |
|-----------------+--------------+-----------------+----------------|
| Second body     |              |                 |                |
| 2nd line        |              |                 |                |
|-----------------+--------------+-----------------+----------------|
| Third body      |              |                 | Foo            |
```

| Default aligned | Left aligned | Center aligned  | Right aligned  |
|-----------------|:-------------|:---------------:|---------------:|
| First body part | Second cell  | Third cell      | fourth cell    |
| Second line     | foo          | **strong**      | baz            |
| Third line      | quux         | baz             | bar            |
|-----------------+--------------+-----------------+----------------|
| Second body     |              |                 |                |
| 2nd line        |              |                 |                |
|-----------------+--------------+-----------------+----------------|
| Third body      |              |                 | Foo            |

### 显示blockquote  
```
> This is a blockquote.
>     On multiple lines.
That may be lazy.
>
> This is the second paragraph.

----

> This is a paragraph.
>
> > A nested blockquote.
>
> ### Headers work
> {:.no_toc}
>
> * lists too
>
> and all other block-level **elements**.
>
> Even code blocks:
>
>      def hello
>        puts "Hello world!"
>      end
> {: .language-ruby}
```

> This is a blockquote.
>     On multiple lines.
That may be lazy.
>
> This is the second paragraph.

----

> This is a paragraph.
>
> > A nested blockquote.
>
> ### Headers work
> {:.no_toc}
>
> * lists too
>
> and all other block-level **elements**.
>
> Even code blocks:
>
>      def hello
>        puts "Hello world!"
>      end
> {: .language-ruby}

### 显示一个Note
**Note:** a note is something that needs to be mentioned but is apart from the context.

### 添加注释：  
```
This is a paragraph
{::comment}
This is a comment which is completely ignored.
{:/comment}
... paragraph continues here.
```
This is a paragraph
{::comment}
This is a comment which is completely ignored.
{:/comment}
... paragraph continues here.

### 代码片段显示行号（好不和谐）
{% highlight ruby linenos %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}

### emoji表情
参考网址：[emoji表情](https://www.webpagefx.com/tools/emoji-cheat-sheet/)


[personal blog]: http://ljpww72729.github.com

I give this plugin two :+1:!  :smirk:

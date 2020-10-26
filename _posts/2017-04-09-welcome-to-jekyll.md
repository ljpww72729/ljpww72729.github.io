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

{% include toc.html %}

<!-- 设置图片公共地址 -->
{% assign tempPath = site.baseImagePath %}
{% assign tempDate = page.date | date:"%Y%m" %}
{% assign tempDay = page.date | date:"%d" %}
{% assign imagePath = tempPath | append: tempDate | append: "/" | append: tempDay | append: "-" | append: page.tags[0] | append: "-" %}

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

### 代码片段显示行号
{% highlight ruby linenos %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}

```ruby
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.

```
可通过在_config.yml中配置是否显示行号，如下：
```yml
# kramdown配置说明参见：https://kramdown.gettalong.org/options.html
kramdown:
  # 显示行号参见：https://github.com/jekyll/jekyll/issues/4619#issuecomment-191267346
  # 及https://kramdown.gettalong.org/syntax_highlighter/rouge.html
  syntax_highlighter: rouge
  # Rouge Highlighter in Kramdown › http://kramdown.gettalong.org/syntax_highlighter/rouge.html
  # span, block element options fall back to global
  syntax_highlighter_opts:
    # Rouge Options › https://github.com/jneen/rouge#full-options
    css_class: 'highlight'
    #line_numbers: true # bad idea, spans don't need linenos and would inherit this option
    span:
      line_numbers: false
    block:
      line_numbers: true
      start_line: 1
```

### emoji表情
参考网址：[emoji表情](https://www.webpagefx.com/tools/emoji-cheat-sheet/)

[personal blog]: https://ljpww72729.github.com

I give this plugin two :+1:!  :smirk:

### 参考文章
[代码高亮的几种选择](https://blog.csdn.net/qiujuer/article/details/50419279)
> 不过我只使用了默认的语法高亮


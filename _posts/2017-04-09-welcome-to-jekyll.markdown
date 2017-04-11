---
layout: post
title:  "Welcome to Jekyll!"
date:   2017-04-09 17:32:27 +0800
categories:
  - tutorials
tags:
 - jekyll
 - test
---

{::comment}
这里显示的是摘要信息也是概要信息
{:/comment}

You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run `jekyll serve`, which launches a web server and auto-regenerates your site when a file is updated.

To add new posts, simply add a file in the `_posts` directory that follows the convention `YYYY-MM-DD-name-of-post.ext` and includes the necessary front matter. Take a look at the source for this post to get an idea about how it works.

<!-- more -->

显示图片：  
[![显示图片](/assets/blog/images/201704/logo.jpg "image description")*My caption*][personal blog]

## Content
{:.no_toc}

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## 标题1
### 标题1.1
#### 标题1.1.1

显示视频：  
<figure class="video_container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/7V-fIGMDsmE" frameborder="0" allowfullscreen></iframe>
</figure>

显示本地视频：  
<figure class="video_container">
  <video controls="true" allowfullscreen="true" poster="/assets/blog/images/201704/logo.jpg">
    <source src="/assets/blog/images/201704/movie.mp4" type="video/mp4">
  </video>
</figure>

显示表格：  

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

This is a regular paragraph.

**Note:** a note is something that needs to be mentioned but is apart from the context.
{: .note}


注释：  
This is a paragraph
{::comment}
This is a comment which is
completely ignored.
{:/comment}
... paragraph continues here.

My danger paragraph.
{: .alert .alert-danger}

Jekyll also offers powerful support for code snippets:

{% highlight ruby %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}

Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].

[jekyll-docs]: https://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/
[personal blog]: http://ljpww72729.github.com

I give this plugin two :+1:!  :smirk:

 1. 创建blog
在terminal中执行以下命令：
创建一个草稿blog
> bundle exec jekyll draft Android-Vector-PathData的应用
或者创建一个blog
> bundle exec jekyll post Android-Vector-PathData的应用

2. 编写blog
3. 编译运行查看blog
先清除生成的缓存页面
> bundle exec jekyll clean

编译并启动服务，也可以直接起服务
> bundle exec jekyll build
> bundle exec jekyll server

build 可简化为b
server 可简化为s

> 如果想编译查看草稿中的文件需要按照以下命令启动：
查看drafts中的博客（server命令也要加上--drafts，否则drafts文件会被删除）：
bundle exec jekyll clean 
bundle exec jekyll build --drafts
bundle exec jekyll server --drafts

4. 如何将draft移动到post中，从而发布文章
> bundle exec jekyll publish _drafts/Android-Vector-PathData的应用

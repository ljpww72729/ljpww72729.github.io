---
layout: post
title: "databinding 使用问题总结"
categories:
  - android
tags:
  - databinding
---

对 Databinding 使用过程中发现的问题的总结。

<!-- more -->

{% include toc.html %}

#### 提示  

##### 使用资源表达式  
可以将dimen相加，如下所示：  
```xmln
android:padding=”@{@dim/textPadding + @dim/headerPadding}
```
> 可以多次相加，但是在styles中使用无效。
参考：[Express Yourself]

##### NullPointerException
data binding表达式在求值时会检查空指针异常，如果为null，并不会提示NullPointerException，而是设置为null。如下所示：
```xml
android:text="@{user.firstName ?? user.userName}"
```
结果：text值为`null`。  
然而，如果求值表达式是在java代码中，则会产生NullPointerException，如下所示：
```xml
android:text=”@{com.example.StringUtils.capitalize(user.firstName)}”
```
StringUtils为：
```java
public static String capitalize(String str) {
    return Character.toUpperCase(str.charAt(0)) + str.substring(1);
}
```
结果：产生NullPointerException。
> 可通过以下方式引入StringUtils
> ```xml
> <data>
>    <variable
>        name="user"
>        type="com.example.myapp.model.User"/>
>    <import
>        type="com.example.StringUtils"/>
> </data>
> ```

##### 绑定元素
关于绑定元素这部分可参考：[Let’s Flip This Thing]  
###### Two-way Bindings
使用databinding绑定视图后，对于视图中元素值的变化，尤其是EditText值的变化，需要variable对象中的值也随之变化，就需要采用`@={}`方式绑定元素值，如下所示：
```xml
<EditText
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:text="@={user.firstName}"/>
```

###### View Attributes
可以在表达式中获取视图的属性，就像是该属性是model的属性一样，如下所示：
```xml
<CheckBox
    android:id="@+id/showName"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"/>
<TextView
    android:text="@{user.firstName}"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:visibility="@{showName.checked ? View.VISIBLE : View.GONE}"
    />
```
> 需要使用id来获取相应组件的属性

###### View References
在lambda表达式中可以通过视图id来获取该视图的引用：
```xml
<EditText
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:id="@+id/firstName"
    android:text="@={user.firstName}" />
<CheckBox
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:onCheckedChanged="@{()->handler.checked(firstName)}" />
```

#### 注意事项
##### Included Layouts
采用include嵌套布局时，可以为include设置variable，从而在include布局中直接引用variable值，方法参见：
[Android Data Binding: Adding some variability](https://medium.com/google-developers/android-data-binding-adding-some-variability-1fe001b3abcc)中关于'Included Layouts'部分。其中有一点需要注意：
```xml
<?xml version="1.0" encoding="utf-8"?>
<layout xmlns:android="http://schemas.android.com/apk/res/android"
        xmlns:app="http://schemas.android.com/apk/res-auto">
    <data>
        <variable
                name="user"
                type="com.example.myapp.model.User"/>
    </data>
    <LinearLayout
            android:layout_width="match_parent"
            android:layout_height="match_parent"
            android:orientation="vertical">
        <ImageView
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:src="@{user.image}"/>
        <include
                layout="@layout/user_name"
                app:user="@{user}"/>
    </LinearLayout>
</layout>
```
include中`app:user=""`的user名称需要与include布局中的variable名称一致，同时使用`驼峰`命名法命名，不然会出现找不到set方法的错误。  
正确示例：  
```xml
app:userInfo="@{user}"
```
错误示例：  
```xml
app:user_info="@{user}"
```
[Express Yourself]:https://medium.com/google-developers/android-data-binding-express-yourself-c931d1f90dfe
[Let’s Flip This Thing]:https://medium.com/google-developers/android-data-binding-lets-flip-this-thing-dc17792d6c24

# 一些关于css的新技术和技巧

## 1. flex 布局

## 学习参考:

1. [flex的基本内容](https://www.cnblogs.com/hellocd/p/10443237.html)
2. [flex-grow flex-shrink flex-basis的区别](https://www.cnblogs.com/ghfjj/p/6529733.html)



## 2.移动端rem、vw适配

```scss
/*
* rem适配
* 设计稿750px
* 量宽：375px;
* 1rem = 14px;
* 求设计稿中50px-> x rem;
* ===: 50 / (750/375) / 14 rem;
*/
$device-width:750;
$css-width:375;
$html-size:14;
@function px2rem($fn){
    @return #{$fn / ($device-width / $css-width) / $html-size}rem
}
```

```scss
/*
* vw适配
* 设计稿750px
* ? px    1vw
* ————  = ————
* 750px   100vw
*/
$device-width:750;
@function px2rem($fn){
    @return #{$fn / $device-width * 100}vw;
}
```


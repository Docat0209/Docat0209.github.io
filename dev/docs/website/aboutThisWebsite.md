---
title: 如何著手製作個人部落格並架到Github上
date: 2021-10-02
categories:
- 個人部落格
tags:
- Website
---

[Github Source code](https://github.com/Docat0209/Docat0209.github.io/)


## 來由
看到學弟建了一個個人網頁

所以我也就跟著建了一個

這篇文章是由學弟的文章所做的延伸

修改裡面美中不足的地方

與我安裝過程中遇到的問題

以及我所新增的東西

## 介紹
vuepress是node.js為基礎的靜態網頁生成工具

可以將markdown文檔轉換為靜態網頁

通常用於技術文檔撰寫、個人部落格製作等等

vuepress的生態發展十分完善

在網路上有許多的theme和plugin可以使用

## 過程

vuepress官方文檔有提供完善的教學

必要的環境包刮: 
- 打包工具 – node.js
- 模組管理包 – yarn、npm擇一

### 基本環境建置

先根據vuepress官方建置基本的網頁

#### 創建專案
```sh
mkdir 專案名稱 && cd 專案名稱
```


#### 安裝模組管理包
官方推薦使用yarn管理專案

這裡面便直接使用yarn

```sh
yarn init
```

#### 安裝vuepress
```sh
yarn add -D vuepress
```

#### 創建文件資料夾
```sh
mkdir docs && echo '# 網站首頁' > docs/index.md
```
#### 編輯yarn設定檔
```json
{
  "name": "專案名稱",                      //手動改為專案名稱
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "devDependencies": {
    "vuepress": "^1.8.2"
  },
  "scripts": {                             //加入以下三行
    "docs:dev": "vuepress dev docs",       //
    "docs:build": "vuepress build docs"    //
  },                                       //
  "dependencies": {
    "vuepress-theme-reco": "^1.6.6"
  }
}

```
#### 創建vuepress設定資料夾
```sh
cd docs && mkdir .vuepress
```
#### 創建vuepress設定檔
```sh
touch config.js
```
```js
module.exports = {
    title: '網站標題',
    description: '網頁描述'
}
```
#### 測試執行
```sh
yarn docs:dev #剛剛加入的腳本
```
即可以得到基本的網頁模板

![](https://i.imgur.com/208xEym.png)

### 美化以及部落格設定

在原本的網頁基礎下
調整參數達到自己想要的部落格樣式

#### 安裝並使用

這次選用了一個叫做vuepress-reco的theme

安裝方法如下
```zh
yarn add vuepress-theme-reco
```
```js
module.exports = {
	theme: "reco",        //加入此行
	themeConfig: {        //部落格主題設定
		type: 'blog'      //設定模式為部落格
	}
}
```

安裝完後可以直接根據vuepress-reco的官方文檔進行建置

#### 製作主頁
直接使用剛剛的index.md來當作部落格的主頁

在首頁中要額外加入yaml的設定

```yaml
---
home: true
---
```
至此

我們得到了一個根據vuepress-reco所建立的首頁

效果如下
![](https://i.imgur.com/4pj6DdX.png)
![](https://i.imgur.com/48l4LRi.png)


#### 加入文章

至此

專案的結構如下

```
├── docs
│   ├── .vuepress 
│   │   └── config.js 
│   └── index.md
└── package.json
```

添加文章的方式也十分簡單

只需要在docs裡面直接加入md檔

如下
```
├── docs
│   ├── .vuepress 
│   │   └── config.js 
│   ├── 文章一
│   ├── 文章二
│   └── index.md
└── package.json
```
也可以在docs裡面用資料夾進行分類

如下
```
├── docs
│   ├── .vuepress 
│   │   └── config.js 
│   ├── 分類一
│   │   ├── 文章一
│   │   └── 文章二
│   ├── 分類二
│   │   ├── 文章三
│   │   └── 文章四
│   └── index.md
└── package.json
```

在每篇文章中也需要加入yaml設定
```yaml
---
title: 文章一
date: 2021-01-01
categories:
- 分類一
tags:
- 分類一
---
```

文章只要放在docs資料夾內就會直接顯示在首頁

如下

![](https://i.imgur.com/9yQx2Iv.png)

注意!! 檔案與資料夾命名必須使用英文 否則無法轉換成靜態網頁

#### 製作導覽列

vuepress-reco提供了方便的導覽列製作方法

只需要在config.js
```js
module.exports = {
  theme: 'reco',
  themeConfig: {
    nav: [
      { text: '連結', link: '連結', icon: 'icon' } //添加連結到導覽列
    ]
  }
}
```
#### 網頁icon設定
因為網頁的icon是整個網頁共用的

所以我們需要創建一個公用的資料夾來儲存他 

避免路徑出現問題

在 /docs/.vuepress/ 中加入 public 資料夾

並在裡面放入網頁的icon (favicon.ico)
```
├── docs
│   ├── .vuepress 
│   │   ├── public (加入此資料夾)
│   │   │   └── favicon.ico (網頁icon)
│   │   └── config.js 
│   ├── 分類一
│   │   ├── 文章一
│   │   └── 文章二
│   ├── 分類二
│   │   ├── 文章三
│   │   └── 文章四
│   └── index.md
└── package.json
```

加入後便可以在config.js中加入連結
```js
module.exports = {
    head: [                                              //在html的 head中加入連結
        ['link', { rel: 'icon', href: './favicon.ico' }]  //
    ]                                                    //
}
```
#### 首頁布局設定

跟官方網站長得一模一樣的首頁稍嫌單調

所以我們可以透過更改config.js

以及首頁中的yaml設定

來改變首頁的布局

因參數過多 

將在程式碼裡用註解解釋
```js
module.exports = {
    themeConfig: {
        mode: 'dark',                                 //網站進入後預設色彩模式
        modePicker: true, 							  //使否開啟色彩選擇器 (預設為true)
		logo: '/hero.jpg',							  //左上角logo
        author: 'URLoser404',                         //文章預設作者姓名
        authorAvatar: '/hero.jpg',					  //右下角介紹欄頭像
        blogConfig: {                                 //右下角介紹欄排版
            category: {                           //'分類'欄位設定            
                location: 2,           		  //欄位位置 (預設為2)      
                text: 'Category'              //欄位文字 (預設為'Category')
            },
            tag: {                                //'標籤'欄位設定          
                location: 3,                  //欄位位置 (預設為2)      
                text: 'Tag'                   //欄位文字 (預設為'Tag')
            }
        },
        friendLink: [                                  //右下角連結欄位設定 (可為複數)
            {                                         
                title: '連結名稱',                    
                desc: '連結描述',                     
                link: '連結'                          
            }
        ],
    }
}
```

#### 其他參數設定
```js
module.exports = {
    head: [
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]  //手機版網頁滑動優化
    ],
    themeConfig: {                     
        noFoundPageByTencent: false,   //關閉404頁面公益活動
        subSidebar: 'auto'			   //開啟每篇文章自動生成側邊欄
    }
}
```
### 打包為靜態網頁

整體都建置完成後

可以使用我們一開始在 package.json 裡面創建的腳本

```sh
yarn docs:build
```

來打包成靜態網頁

跑完後 可以看到.vuepress資料夾中生成了一個

名為 dist 的資料夾

裡面就是打包完成的靜態網頁

### 上傳至伺服器

很多人的家裡

並不方便架設伺服器

網路上也有很多伺服器出租的服務

也有很多的免費方案

因為這次要使用的只是靜態網站

便選用了github自帶的github io

> 使用前需安裝git

首先將路徑調至dist資料夾

並在github開啟新的repository

便可以直接推上github
```sh
git init
git remote add origin [repository git 網址]
git add .
git commit -m "上傳描述"
git push origin master
```

之後在repository裡的設定

將github page的路徑調至正確的位置

![](https://i.imgur.com/epnHtwW.png)


整個網頁即可成功上線

[成品](https://docat0209.github.io)

### 全自動.bat檔案建立

若要更新靜態網站是一件十分麻煩的事情

所以我寫了一個可以一鍵 轉換靜態網站/複製資料到正確路徑/上傳到Github 這三種功能

請確保資料結構如下

```
├── dev (請新增此資料夾 並把檔案丟入dev)
│   ├── docs
│   │   ├── .vuepress 
│   │   ├── public
│   │   └── config.js 
│   ├── index.md
│   └── package.json
├── docs (請新增此資料夾)
└── AutoUpdate.bat (請新增此檔案)
```

新增完 AutoUpdate.bat 之後請將裡面的內容修改成

```bat
@echo off
set /p var=PleaseEnterCommitMessage:
call cmd /c " cd/d .\dev &&yarn docs:build && cd/d .. &&XCOPY .\dev\docs\.vuepress\dist  .\docs  /e /d /y && git add -A && git commit -m"%var%"&& git push -u origin master"
```

## 參考

[Vuepress](https://vuepress.vuejs.org)

[Vuepress-reco](https://vuepress-theme-reco.recoluan.com)

[學弟的教學文章](https://urloser404.github.io/projects/BlogBuild.html#%E4%BE%86%E7%94%B1)

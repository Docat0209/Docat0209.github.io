---
title: Winform AllowDrop and file reading 
date: 2021-10-08
sidebar: auto
categories:
- C# Control Properties
tags:
- C#
- Properties
- File
---
## What is AllowDrop?

AllowDrop is a property of `control`; It can allow you to drag a file on that control view.

You can throw this property to design a program to drag your file and open it.

Here is an example:

![](https://i.imgur.com/kdPwEEf.png)

I set a Panel on the left and a RichTextBox on the right, then I created two events on Panel DragEnter and DragDrop, 

and I coding some code for them.

```CS
private void panel_DragEnter(object sender, DragEventArgs e)
{
    string FilePath = ((string[])e.Data.GetData(DataFormats.FileDrop)).First(); //獲取文件路徑
    if (Path.HasExtension(FilePath)) //擋檔案不存在
    {
        if (Path.GetExtension(FilePath) == ".txt")  //擋錯誤副檔名
        {
            e.Effect = DragDropEffects.All;   //更改圖示
        }
    }
}

private void panel_DragDrop(object sender, DragEventArgs e)
{
    string FilePath = ((string[])e.Data.GetData(DataFormats.FileDrop)).First(); //獲取文件路徑
    if (Path.HasExtension(FilePath)) //擋檔案不存在
    {
        if (Path.GetExtension(FilePath) == ".txt") //擋錯誤副檔名
        {
            richTextBox.Text = File.ReadAllText(FilePath); //將讀取的資料存出與存入
        }
    }
}
```

Example for website:

```CS
        if (Path.GetExtension(FilePath) == ".png")
        {
            pictureBox1.Image = Image.FromFile(FilePath);
        }
```
---
sidebar_position: 2
---

# 封面

## 概述

搜索并返回歌曲/专辑封面及歌手头像

- 请求路径: `/cover`
- 请求方式: `GET`
- 请求参数:

  |参数  |说明  |备注     |
  |------|-----|---------|
  |title |标题  |歌曲标题|
  |album |专辑  |专辑名|
  |artist|作者  |作者|
  - 三者都传：获取歌曲封面
  - 不传歌曲标题：获取专辑封面
  - 只传歌手名：获取歌手图片
- 响应内容
  - 如果成功，服务器可能直接返回图片文件，`Content-Type: image/jpeg`（或者PNG等其他图片格式）。
  - 或者，Location标头重定向到图片文件

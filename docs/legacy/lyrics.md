---
sidebar_position: 1
---

# 歌词

## 概述

- 请求方式: `GET`
- 请求参数:

  |参数  |说明  |备注     |
  |------|-----|---------|
  |title |标题  |歌曲标题|
  |album |专辑  |专辑，可留空，[Unknown Album]视为空|
  |artist|作者  |可留空，支持多种分隔方式|
  |path  |路径  |可选，音乐文件本地路径，用于读取.lrc文件和歌曲元信息|

## 接口

### 单个歌词接口

- 请求路径: `/lyrics`
- 响应类型 (Content-Type): `text/html`

返回匹配吻合度最高的一个搜索结果，返回LRC格式文本。

### 批量搜索接口

- 请求路径: `/jsonapi`
- 响应类型 (Content-Type): `application/json`

返回多个匹配结果，按照吻合度排序后返回的JSON。

JSON格式

```json
[
    {
        "id": "<歌词唯一id，实际上为LRC歌词哈希>",
        "title": "<音乐标题>",
        "artist": "<歌手>",
        "lyrics": "<LRC歌词文本>"
    },
    ...
]
```

---
sidebar_position: 2
---

# 歌词API

提供音乐歌词文件（lrc格式）的搜索。

根目录：`/api/v1/lyrics`

## 单个歌词API

### 端点

1. HTTP 方法：`GET`
2. 路径：`single`
3. 参数：`?title=Title&album=Album&artist=Artist`  参数支持为空
4. 请求体：无

例：[https://api.lrc.cx/api/v1/lyrics/single?title=海阔天空&album=海阔天空&artist=Beyond](https://api.lrc.cx/api/v1/lyrics/single?title=海阔天空&album=海阔天空&artist=Beyond)

### 响应

响应LRC格式歌词文本

Content-Type: `text/html`

## 批量搜索API

### 端点

1. HTTP 方法：`GET`
2. 路径：`advance`
3. 参数：`?title=Title&album=Album&artist=Artist`  参数支持为空
4. 请求体：无

例：[https://api.lrc.cx/api/v1/lyrics/advance?title=海阔天空&album=海阔天空&artist=Beyond](https://api.lrc.cx/api/v1/lyrics/advance?title=海阔天空&album=海阔天空&artist=Beyond)

### 响应

响应包含歌词的JSON格式内容。

Content-Type: `application/json`

JSON格式：

```json
[
    {
        "id": "<歌词id，用于与其他歌词去重>",
        "title": "<标题，可能与查询的标题不一致>",
        "artist": "<歌手，可能与查询的歌手不一致>",
        "lyrics": "<歌词文件内容>"
    },
    ...
]
```

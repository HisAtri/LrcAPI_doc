---
sidebar_position: 4
---

# 封面API

提供封面图片的搜索。

根目录：`/api/v1/cover`

## 音乐封面

### 端点

1. HTTP 方法：`GET`
2. 路径：`music`
3. 参数：`?title=Title&album=Album&artist=Artist`  参数支持为空
4. 请求体：无

例：[https://api.lrc.cx/api/v1/cover/album?title=海阔天空&album=海阔天空&artist=Beyond](https://api.lrc.cx/api/v1/cover/album?title=海阔天空&album=海阔天空&artist=Beyond)

### 响应

1. 类型：`application/json`
2. 响应

```json
{
    "title": "title",
    "img": "cover_url",
}
```

## 专辑封面

### 端点

1. HTTP 方法：`GET`
2. 路径：`album`
3. 参数：`?album=Album&artist=Artist`  参数支持为空
4. 请求体：无

例：[https://api.lrc.cx/api/v1/cover/album?album=海阔天空&artist=Beyond](https://api.lrc.cx/api/v1/cover/album?album=海阔天空&artist=Beyond)

### 响应

1. 类型：`application/json`
2. 响应

```json
{
    "album": "album",
    "img": "cover_url",
}
```

## 歌手头像

### 端点

1. HTTP 方法：`GET`
2. 路径：`artist`
3. 参数：`?artist=Artist`  参数支持为空
4. 请求体：无

例：[https://api.lrc.cx/api/v1/cover/artist?artist=Beyond](https://api.lrc.cx/api/v1/cover/artist?artist=Beyond)

### 响应

1. 类型：`application/json`
2. 响应

```json
{
    "artist": "artist",
    "img": "avatar_url",
}
```

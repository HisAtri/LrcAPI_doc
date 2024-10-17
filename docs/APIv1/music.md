---
sidebar_position: 5
---

# 音乐搜索

一次性获取相对完整的音乐信息。

根目录：`/api/v1/music`

:::caution

此部分端点功能尚未实现，可能还将有所变动，请等待后续更新。

:::

## API详情

### 端点

1. HTTP 方法：`GET`
2. 路径：`detail`
3. 参数：`?title=Title&album=Album&artist=Artist`  参数支持为空
4. 请求体：无

例：[https://api.lrc.cx/api/v1/music/detail?title=海阔天空&album=海阔天空&artist=Beyond](https://api.lrc.cx/api/v1/music/detail?title=海阔天空&album=海阔天空&artist=Beyond)

### 响应

响应包含歌曲信息的JSON格式内容。

```json
{
    "title": "Title",
    "artists": [
        {
            "name": "Artist_1",
            "avatar": "Avatar_url",
        }
    ],
    "album": "Album_name",
    "cover": "Cover",
    "album_cover": "Album_cover",
    "lyrics": "Lyrics text"
}
```

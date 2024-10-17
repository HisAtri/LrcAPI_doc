---
sidebar_position: 3
---

# Tag编辑器

修改音乐文件Tag，支持`AAC`、`APEv2`、`AIFF`、`ASF`、`DSF`、`ID3`、`FLAC`、`VORBIS`、`WAVE`等标签格式的修改。此部分功能实现参考`Music-tag-web`项目。

支持写入`标题`、`艺术家`、`专辑`、`年份`、`封面图片`等标签信息。

## API详情

### 请求和响应

- 请求路径: `/tag`
- 请求方式: `GET`、`POST`、`PUT`(推荐)
- 请求权限：`rw`
- 请求体

  ```json
    {
        "tracktitle": "Track Title",
        "artist": "Artists",
        "album": "Albums",
        "year": "Album year",
        "lyrics": "Lyrics text"
    }
  ```

  说明：变量类型见以下要求；值为false代表删除，值为None代表保留。

  ```python
    supported_tags = {
        "tracktitle": {"allow": (str, bool, type(None)), "caption": "Track Title"},
        "artist": {"allow": (str, bool, type(None)), "caption": "Artists"},
        "album": {"allow": (str, bool, type(None)), "caption": "Albums"},
        "year": {"allow": (int, bool, type(None)), "caption": "Album year"},
        "lyrics": {"allow": (str, bool, type(None)), "caption": "Lyrics text"}
    }
  ```

- 响应

  |  状态码  | 含义 |
  |---------|------|
  |   200   |修改成功|
  |   404   |未找到文件|
  |   524   |传入JSON变量类型有误|
  |   500   |未知错误，具体内容参考响应文本|

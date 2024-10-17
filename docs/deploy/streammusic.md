---
sidebar_position: 5
---

# 在音流中使用API

假设你将服务部署在`http://example.com`，那么：

## 歌词接口

使用单一歌词接口会优先获取同名lrc歌词文件或音频文件内置歌词，如果本地有歌词文件，或音乐文件有较完善的元数据，请使用此接口以获得较好的响应速度和准确率。

```url title="单一歌词"
http://example.com/lyrics/
```

使用此接口会通过网络搜索对应的歌词，首次搜索将会耗费一定时间。更完善的Tag信息可以获得更好的搜索效果。

```url title="批量获取"
http://example.com/jsonapi/
```

## 歌词确认接口

需要歌词API版本`v1.5.1`以上，调用该接口会将传入的**标题、歌手、专辑、年份、歌词**写入歌曲元信息。有关支持的音频格式及更多信息请查看[Tag编辑器](/docs/legacy/tagEditor)。

:::warning

调用此接口会直接修改音频文件，导致文件哈希发生变化。如果有做种需求，请慎重使用此功能。

:::

```url
http://example.com/confirm/
```

## 封面接口

```url
http://example.com/cover/
```

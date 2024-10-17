---
sidebar_position: 1
---

# 快速开始

## 公开API

如果无法私有部署，可以先尝试使用公开API。注意：公开API通过酷狗等接口获取歌词，可能响应较慢且并不完全准确。

歌词API地址：`https://api.lrc.cx/lyrics`

封面API地址: `https://api.lrc.cx/cover`

## 二进制文件

上传至运行目录，`./lrcapi --port 8080 --auth 自定义一个鉴权key`

## Python源文件

拉取本项目；或者下载后上传至运行目录，解压tar.gz

安装依赖：`pip install -r requirements.txt`

启动服务：`python3 app.py --port 8080 --auth 自定义一个鉴权key`

## Docker部署方式

```bash
docker run -d -p 28883:28883 -v /home/user/music:/music hisatri/lrcapi:latest
```

或者，请指定一个Tag（推荐）

```bash
docker run -d -p 28883:28883 -v /home/user/music:/music hisatri/lrcapi:1.5.3
```

如果你正在使用Navidrome Docker，请将 `/home/user/music:/music` 中的 `/home/user/music` 修改为你在Navidrome中映射的主机路径；

换句话说，`-v` 参数与Navidrome保持一致即可。

如果你正在使用Navidrome，请将你的音乐文件目录映射到Docker内目录；例如如果你音乐存储的目录是`/www/path/music`，请将启动命令中的映射修改为 `/www/path/music:/www/path/music`

然后访问 `http://0.0.0.0:28883/lyrics` 或新版API `http://0.0.0.0:28883/jsonapi`

图片API地址为 `http://0.0.0.0:28883/cover`

注意：图片返回目前采用反向代理策略，可能存在一定的上下行流量消耗和延迟。

支持使用Nginx或Apache进行反向代理与SSL。

---
sidebar_position: 2
---

# Docker部署

:::warning[警告：请尽快更新版本]

LrcAPI目前已通过 Github CI/CD 自动构建Docker镜像，镜像地址（命名空间）已更新至`hisatri/lrcapi`。请通过[最新地址](https://hub.docker.com/r/hisatri/lrcapi)拉取镜像。

强烈建议使用新版LrcAPI(version>=1.5.3)，以避免潜在的安全漏洞。

:::

此项目的官方Docker镜像地址为 [https://hub.docker.com/r/hisatri/lrcapi](https://hub.docker.com/r/hisatri/lrcapi)

## 版本说明

`latest`版本是稳定版本，经过比较全面的case测试。`dev`版本是最新构建的版本，拥有最新的功能特性，但是case测试覆盖并不全面，可能存在意料之外的Bug。

## 操作方法

### 立即运行镜像

部署稳定版本（latest）：`docker run -d -p 28883:28883 -v /home/user/music:/music hisatri/lrcapi:latest`

部署最新版本（Dev）：`docker run -d -p 28883:28883 -v /home/user/music:/music hisatri/lrcapi:dev`

指定一个版本运行：`docker run -d -p 28883:28883 -v /home/user/music:/music hisatri/lrcapi:1.5.2`

### 参数说明

- `-d` 以守护进程方式运行，一般无需修改
- `-p` 形式为`外部端口:内部端口`，其中Docker内部的端口默认为28883，无需修改，如果希望此服务在其他端口上启动，请修改。例如，在8080端口上启动服务：`-p 8080:28883`
- `-v` 此参数用于将宿主机的指定目录映射至Docker容器内的某一目录，正确设置此目录，可以使程序优先读取同目录下同名.lrc文件，及音频文件的元数据中的歌词。具体设置方式如下
  - 使用Docker方式部署音乐服务器（如Navidrome，emby），则保持与音乐服务器Docker容器的`-v`参数一致即可。
  - 直接在本地启动音乐服务器，则将本地音乐文件夹完整路径原样映射到Docker内即可。例如，如果你的音乐存储在 /media/music ，则使用参数`-v /media/music:/media/music`。有多少个目录就设置多少个`-v`参数。
- `-e` 环境变量。

## 自行构建镜像

现在，您也可以通过项目文件夹下的`Dockerfile`文件自行构建镜像。首先，您需要将项目文件夹下载到本地，然后在项目文件夹下执行以下命令：

```bash
docker build -t lyricapi .
docker run -d -p 28883:28883 -v /home/user/music:/music lrcapi
```

或者通过项目文件夹下的`build.sh`脚本构建镜像：

```bash
./build.sh
docker run -d -p 28883:28883 -v /home/user/music:/music lrcapi
```

此项目已在`linux/amd64`,`linux/arm64/v8`,`linux/arm/v7`,`linux/arm/v6`,`linux/386`架构下测试通过，如果您修改了程序，兼容性可能会受到影响。

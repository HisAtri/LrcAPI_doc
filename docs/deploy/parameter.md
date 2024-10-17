---
sidebar_position: 9
---

# 参数配置

## 使用启动参数

- `--port`: 服务器监听端口
- `--auth`: 鉴权秘钥，默认最高权限

例：`./lrcapi --port 8080 --auth password`

## 使用系统变量

此功能便于在Docker中使用，可通过Docker`-e`参数进行配置

- `API_AUTH`：鉴权秘钥，默认最高权限

## 使用配置文件

配置文件默认为运行目录下的`config/config.json`文件，会在启动时自动创建

目前支持的内容

```json
{
    "server": {
        "ip": "0.0.0.0",
        "port": 28883
    },
    "auth": {
        "SuperAdmin": "all",
        "Admin": "rwd",
        "guest": "r"
    }
}
```

- `server`字段

  服务器启动配置

  - `ip`: 服务器启动IP，默认监听所有ipv4网卡地址。
  - `port`: 服务监听的TCP端口，默认为`28883`。如需修改请使用未被占用的端口。
- `auth`字段

  服务器鉴权配置，可设置多个键值对。
  - `key`: 鉴权秘钥
  - `value`: 该秘钥对应的权限组，可以组合。
    - `r`: 读取
    - `w`: 写入
    - `d`: 删除
    - `all`: 完全控制

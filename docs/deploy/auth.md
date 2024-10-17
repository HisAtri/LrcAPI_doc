---
sidebar_position: 8
---

# 用户鉴权

## 介绍

这是一个可选的功能。

如果你为自己部署了一个LrcAPI服务，但是不希望其他人随意使用，那么你可以考虑通过鉴权的方式，限制陌生人的访问。

## 鉴权方式

LrcAPI目前支持通过Header字段方式（APP）和Cookie方式（Web）进行鉴权。

### Header字段鉴权

| 请求方式 | 位置 | 字段 | 类型 |
|---------|------|------|----|
| POST/GET | Request Header| Authorization | String |

客户端请求示例：

```Python
## Python3 ##

import requests

headers = {'Authorization': '{Your auth key}', }
response = requests.get("https://example.lrc.cx/api", headers=headers)
print(response.json())
```

### Cookie鉴权

使用Web访问时，可以使用鉴权秘钥登录以获取Cookie，

当访问某个需要特定权限的功能时，你将会被自动重定向到登录页面。

输入对应的秘钥后，服务器会向浏览器下发Cookie，此后即可依据此Cookie自动完成认证。

---
sidebar_position: 1
---

# 部署

## 从Github拉取源码

```bash title="http方式"
git clone https://github.com/HisAtri/LrcApi.git
```

```bash title="ssh方式"
git clone git@github.com:HisAtri/LrcApi.git
```

> 如果希望参与项目开发，建议fork项目到自己的仓库，然后再clone到本地。

## 创建虚拟环境并激活（推荐）

项目需要Python3.10以上版本，建议创建一个独立的虚拟环境如venv,virtualenv或conda进行部署。

```bash title="Linux下使用venv创建虚拟环境并激活"
cd LrcApi
python3 -m venv venv
source venv/bin/activate
```

## 安装依赖

> 部分架构安装依赖时可能需要gcc编译工具链，具体请参考系统文档。

```bash
pip install -r requirements.txt
```

## 启动程序

以Debug模式启动程序：

```bash
python app.py --debug
```

现在，这个项目已经以Debug模式在本地运行起来了。你可以在浏览器中输入`http://127.0.0.1:28883/`来访问。

:::warning

请勿将此Debug模式应用于生产环境中。

:::

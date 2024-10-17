---
sidebar_position: 3
---

# 从源码运行

## 系统要求

- [Python3.10](https://www.python.org/downloads/release/python-3100/)以上环境
- （推荐）Nginx或者Apache
- 部分架构（ARMv7/ARMv6）下，部分依赖库安装时可能需要gcc编译器。

## 操作步骤

- 通过GitHub页面，下载[最新release](https://github.com/HisAtri/LrcApi/releases/latest)的源代码，并解压
- 或者拉取main分支到本地（此方法拉取的是最新工程文件而非正式发布版，可能出现意外bug）
- 进入项目文件夹
- 安装依赖

  ```bash
  pip install -r requirements.txt
  ```

- 启动程序

  ```bash
  python3 app.py
  ```

## 说明

上述部署过程只是简单的示例，实际部署时推荐使用venv或anaconda隔离运行环境。

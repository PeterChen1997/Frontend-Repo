# Linux下的 GO 环境搭建

## 流程

### Ubuntu安装

```bash
sudo apt-get install python-software-properties
sudo add-apt-repository ppa:gophers/go
sudo apt-get update
sudo apt-get install golang-stable git-core mercurial
```

---

### 其他版本安装

#### 下载对应版本GO

https://golang.org/dl/

#### 安装

```bash
sudo tar -C /usr/local -xzf go1.10.linux-amd64.tar.gz
```

#### 配置路径

```bash
sudo vim $HOME/.profile

export PATH=$PATH:/usr/local/go/bin
```
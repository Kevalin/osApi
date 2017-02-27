# osApi
启动一个http服务，通过这个http可以获取到系统的一些信息。

## 使用方式
```bash
node api.js #默认启动8080端口，也可以在后面再指定一个端口
curl http://127.0.0.1:8080/hostname
```

## 参数说明
| path | 说明 |
| ---  | --- |
| /eol | 获取EOL |
| /arch | 获取cpu架构类型，例如x64、arm等等 |
| /cpus | 获取cpu信息 |
| /mem | 获取内存信息，包括总内存和剩余内存 |
| /homedir | 获取家目录，例如/home |
| /hostname | 获取主机名 |
| /loadavg | 获取系统负载情况 |
| /interface | 获取网络接口信息 |
| /platform | 获取系统类型，例如linux、sunos、win32等等 |
| /release | 获取操作系统版本 |
| /tmpdir | 获取临时目录 |
| /type | 获取操作系统类型，例如Linux、Darwin、Windows_NT |
| /uptime | 获取服务器已经运行多长时间 |
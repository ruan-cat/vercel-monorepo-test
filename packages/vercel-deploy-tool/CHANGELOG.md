# @ruan-cat/vercel-deploy-tool

## 0.3.0

### Minor Changes

- 增加了 --env-path 环境变量地址配置。使用命令行运行项目时，可以手动传递环境变量的值。传递命令行的值即可。

举例如下：

```bash
node --import=tsx ./tests/config.test.ts --env-path=.env.test
```

传递 --env-path 变量，并提供地址即可。

## 0.2.0

### Minor Changes

- 提供 vercelJsonPath 配置。允许用户上传自定义的 vercel.json 文件。

## 0.1.1

### Patch Changes

- Updated dependencies
  - @ruan-cat/utils@1.2.0

## 0.1.0

### Minor Changes

- 优化文件移动的算法，加快执行效率。

## 0.0.13

### Patch Changes

- Updated dependencies
  - @ruan-cat/utils@1.1.1

## 0.0.12

### Patch Changes

- Updated dependencies
  - @ruan-cat/utils@1.1.0

## 0.0.11

### Patch Changes

- 优化控制台输出。

## 0.0.10

### Patch Changes

- Updated dependencies
  - @ruan-cat/utils@1.0.5

## 0.0.9

### Patch Changes

- 提供包索引，提供 readme 文档。
- Updated dependencies
  - @ruan-cat/utils@1.0.4

## 0.0.8

### Patch Changes

- 修复输出命令为 undefined 的错误。

## 0.0.7

### Patch Changes

- 更新路径别名。
- Updated dependencies
  - @ruan-cat/utils@1.0.3

## 0.0.6

### Patch Changes

- pnpm dlx 子命令安装依赖。

## 0.0.5

### Patch Changes

- 补充子依赖包。

## 0.0.4

### Patch Changes

- 补全依赖。

## 0.0.3

### Patch Changes

- 修复缺少依赖的 bug。

## 0.0.2

### Patch Changes

- 初始化部署工具。
# @ruan-cat/generate-code-workspace

## 0.2.0

### Minor Changes

- 对匹配出来的全部包名，做字母排序。现在生成出来的工作区目录，会先经过一次排序。其中 root 根目录不参与排序。

## 0.1.0

### Minor Changes

- 读取工作区的 settings.json 文件，实现配置同步。将 `.vscode\settings.json` 的文件读取并整合到工作区 `.code-workspace` 文件内。

## 0.0.1

### Patch Changes

- 初始化项目。
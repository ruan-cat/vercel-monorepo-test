# 2025-2-22 会议纪要

主要讨论了该怎么做组件划分，以及其他要做的事情。

## 组件划分方案

根据阿伟学长的指导，我们前端项目的组件按照以下方式来划分组件：

### 表格组件

单纯的，简单的数据展示组件：

::: details 详情

![2025-02-22-17-37-29](https://gh-img-store.ruan-cat.com/01s-docs/2025-02-22-17-37-29.png)

:::

#### 操作栏自定义按钮

操作栏要求能够自定义内部的按钮位置和样式。

::: details 详情

![2025-02-22-17-38-59](https://gh-img-store.ruan-cat.com/01s-docs/2025-02-22-17-38-59.png)

:::

#### 操作栏自定义左右位置

操作栏的位置可以自定义。可以自定义排位到最前面。

::: details 详情

![2025-02-22-17-40-17](https://gh-img-store.ruan-cat.com/01s-docs/2025-02-22-17-40-17.png)

:::

#### 刷新时带有加载等待效果

在做接口请求时，表格组件应该有加载等待的转圈交互效果：

::: details 详情

![2025-02-22-17-54-19](https://gh-img-store.ruan-cat.com/01s-docs/2025-02-22-17-54-19.gif)

:::

#### 复选框数据传递

针对多选操作、批量修改、批量删除等功能，表格组件应该要将已选择的数据对外暴露出去。

#### 每行数据的双击交互

暂不考虑。本项目双击表格组件的行数据时，没有其他功能。

#### 单行点击事件

选中单行数据后，对外传递已经选择的表格数据。

### 表单组件（+搜索栏组件、+表格组件导航栏）

制作出通用的表单组件，能够满足大多数表单组件的使用，包括：

- 输入栏
- 下拉栏
- 日期栏

::: details 详情

![2025-02-22-17-42-18](https://gh-img-store.ruan-cat.com/01s-docs/2025-02-22-17-42-18.png)

:::

#### 派生的表格组件导航栏

导航栏要包括基础的查询和重置按钮。

要包括基础的展开与折叠功能，能够自由伸展。

::: details 详情

![2025-02-22-17-47-47](https://gh-img-store.ruan-cat.com/01s-docs/2025-02-22-17-47-47.gif)

:::

### 分页栏组件

位于表格下面的分页栏组件，用于实现翻页。

::: details 详情

![2025-02-22-17-50-52](https://gh-img-store.ruan-cat.com/01s-docs/2025-02-22-17-50-52.png)

:::

#### 主动刷新功能

点击最右侧的刷新按钮，可以根据现在的查询条件，重新加载表格数据。

::: details 详情

![2025-02-22-17-54-19](https://gh-img-store.ruan-cat.com/01s-docs/2025-02-22-17-54-19.gif)

:::

### 弹框组件

作为通用的弹框。

- 要能够传递弹框标题名称。
- 能够拖拽。
- 能够传递内部内容。
- 底部提供插槽，但是默认为确定和关闭按钮。

::: details 详情

![2025-02-22-17-55-43](https://gh-img-store.ruan-cat.com/01s-docs/2025-02-22-17-55-43.png)

:::

### 表格样式的表单组件

长得像表格的动态表单组件。

比如进货管理，其他出入库页面的新增按钮所示：

::: details 详情

![2025-02-22-18-02-00](https://gh-img-store.ruan-cat.com/01s-docs/2025-02-22-18-02-00.png)

:::

#### 可以动态新增减少表格行

点击新增按钮可以从最下面新增一行。

::: details 详情

![2025-02-22-18-06-01](https://gh-img-store.ruan-cat.com/01s-docs/2025-02-22-18-06-01.gif)

:::

也应该要能够减少指定行，和删除最后一行。该功能需要实现。本系统尚未展示出来。

### 导入 excel 数据组件

设计一个固定的按钮，点击就打开弹框，实现前端导入数据给后端。

::: details 详情

![2025-02-22-18-09-05](https://gh-img-store.ruan-cat.com/01s-docs/2025-02-22-18-09-05.png)

:::

### 首页

首页是单独的内容。可以单独开始开发。

::: details 详情

![2025-02-22-18-10-39](https://gh-img-store.ruan-cat.com/01s-docs/2025-02-22-18-10-39.png)

:::

### 登录页

对项目现有的登录页做美化

::: details 详情

![2025-02-22-18-11-22](https://gh-img-store.ruan-cat.com/01s-docs/2025-02-22-18-11-22.png)

:::

### 个人信息修改业务

个人信息部分的业务比较独立，可以单独划分出来，并分给单独的人完成。内容包括：

1. 修改密码弹框：

::: details 详情

![2025-02-22-17-35-31](https://gh-img-store.ruan-cat.com/01s-docs/2025-02-22-17-35-31.png)

:::

2. 个人信息查看弹框：

::: details 详情

![2025-02-22-17-35-51](https://gh-img-store.ruan-cat.com/01s-docs/2025-02-22-17-35-51.png)

:::

### 布局组件 layout

对项目现有的布局组件做修改，使其满足项目现有的样式。

### 标准报错提示页面。（404、403、500）

制作出报错页面，根据路由报错情况，显示出不同的报错信息。

### 特殊业务：仓位图

需要绘制出特定的表格块，模拟出仓库位置的图片效果。

::: details 详情

![2025-02-22-17-20-39](https://gh-img-store.ruan-cat.com/01s-docs/2025-02-22-17-20-39.png)

:::

### 多行可修改的表格型表单

如下图所示，在**按单拣货**业务内，多选表格行后，就可以修改对应表格行内的特定字段。实现多条数据共同修改的需求。

::: details 详情

![2025-02-22-17-28-56](https://s2.loli.net/2025/02/22/Jd45sLojSA78ZgE.png)

:::

## 任务安排策略

1. **不使用**公用业务组件的页面，这些页面和公共组件，同步进行开发。

## 其他工作通知

1. apifox 接口审核评议。
2. 由前端组长新建 apifox 项目。发布邀请链接，邀请全部人可以阅读。邀请其他各组组长，并赋予后端组长编辑权限。
3. 组长开始分工开发任务。
4. 重申云效平台的工作协同流程。组长用云效派工，组员确定工单。

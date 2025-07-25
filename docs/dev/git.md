---
sticky: 1
---
# Git 基本操作与提交规范

本文介绍 Git 的常用命令及团队协作时推荐的提交规范，帮助你高效管理代码版本。

![Git Logo](https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png)

更多细节见 [Git 官方文档](https://git-scm.com/doc)

## 常用命令

* 初始化仓库  
  `git init`

* 克隆仓库  
  `git clone <仓库地址>`

* 查看状态  
  `git status`

* 添加文件到暂存区  
  `git add <文件名>`  
  `git add .` （添加全部）

* 提交代码  
  `git commit -m "提交说明"`

* 查看提交历史  
  `git log`

* 查看分支  
  `git branch`

* 创建新分支  
  `git branch <分支名>`

* 切换分支  
  `git checkout <分支名>`

* 合并分支  
  `git merge <分支名>`

* 拉取远程更新  
  `git pull`

* 推送到远程仓库  
  `git push`

* 删除分支  
  `git branch -d <分支名>`

* 查看远程仓库  
  `git remote -v`

## 提交规范

良好的提交规范有助于团队协作和代码管理，推荐如下格式：

```
commit message = subject + ：+ 空格 + message 主体

例如：feat:：增加用户注册功能
```

### 常见的 subject 种类及含义

- **feat:** 新功能（feature）  
  用于提交新功能。  
  例如：feat: 增加用户注册功能

- **fix:** 修复 bug  
  用于提交 bug 修复。  
  例如：fix: 修复登录页面崩溃的问题

- **docs:** 文档变更  
  用于提交仅文档相关的修改。  
  例如：docs: 更新README文件

- **style:** 代码风格变动（不影响代码逻辑）  
  用于提交仅格式化、标点符号、空白等不影响代码运行的变更。  
  例如：style: 删除多余的空行

- **refactor:** 代码重构（既不是新增功能也不是修复bug的代码更改）  
  用于提交代码重构。  
  例如：refactor: 重构用户验证逻辑

- **perf:** 性能优化  
  用于提交提升性能的代码修改。  
  例如：perf: 优化图片加载速度

- **test:** 添加或修改测试  
  用于提交测试相关的内容。  
  例如：test: 增加用户模块的单元测试

- **chore:** 杂项（构建过程或辅助工具的变动）  
  用于提交构建过程、辅助工具等相关的内容修改。  
  例如：chore: 更新依赖库

- **build:** 构建系统或外部依赖项的变更  
  用于提交影响构建系统的更改。  
  例如：build: 升级webpack到版本5

- **ci:** 持续集成配置的变更  
  用于提交CI配置文件和脚本的修改。  
  例如：ci: 修改GitHub Actions配置文件

- **revert:** 回滚  
  用于提交回滚之前的提交。  
  例如：revert: 回滚feat: 增加用户注册功能

### 示例

```
feat: 增加用户注册功能

实现了基本的用户注册流程，包括表单验证和错误提示。
```

## 推荐资源

* [Git 官方文档](https://git-scm.com/doc)
* [Commitizen 提交规范工具](https://commitizen-tools.github.io/commitizen/)
* [Conventional Commits](https://www.conventionalcommits.org/zh-hans/v1.0.0/)

## 最后

如果你有更好的 Git 使用技巧或提交规范建议，欢迎交流分享！

优秀的团队协作从规范的代码管理开始。

---
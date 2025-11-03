# KAMFU Tech Website - Frontend

基于 Vue 3 + Vite 构建的公司官网前端项目

## 技术栈

- **框架**: Vue 3 (Composition API)
- **构建工具**: Vite
- **路由**: Vue Router 4
- **状态管理**: Pinia
- **样式**: Tailwind CSS
- **HTTP 客户端**: Axios
- **国际化**: Vue I18n

## 项目结构

```
frontend/
├── public/              # 静态资源
├── src/
│   ├── api/            # API 接口
│   │   ├── client.js   # Axios 配置
│   │   └── services.js # API 服务
│   ├── assets/         # 资源文件
│   │   └── styles/     # 样式文件
│   ├── components/     # 组件
│   │   ├── common/     # 通用组件
│   │   └── layout/     # 布局组件
│   ├── i18n/           # 国际化配置
│   │   ├── index.js    # i18n 配置
│   │   └── locales/    # 语言文件
│   ├── layouts/        # 页面布局
│   ├── pages/          # 页面组件
│   ├── router/         # 路由配置
│   ├── stores/         # Pinia 状态管理
│   ├── App.vue         # 根组件
│   └── main.js         # 入口文件
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

项目将在 http://localhost:3000 启动

### 构建生产版本

```bash
npm run build
```

### 预览生产构建

```bash
npm run preview
```

### 代码检查

```bash
npm run lint
```

## 主要功能

### 页面路由

- `/` - 首页
- `/services` - 服务页面
- `/case-studies` - 案例研究列表
- `/case-studies/:id` - 案例详情
- `/about` - 关于我们
- `/contact` - 联系我们

### 国际化

支持中文（zh-CN）和英文（en）双语切换

### 状态管理

使用 Pinia 管理应用状态：
- `app` - 全局应用状态
- `services` - 服务数据
- `caseStudies` - 案例数据

### API 集成

- 配置了 Axios 拦截器
- 统一的错误处理
- 支持开发环境代理

## 样式系统

### Tailwind CSS

项目使用 Tailwind CSS 作为主要样式框架

### 自定义类

- `.container-custom` - 自定义容器
- `.btn` - 按钮基础样式
- `.btn-primary` - 主要按钮
- `.btn-secondary` - 次要按钮
- `.btn-outline` - 边框按钮
- `.card` - 卡片样式
- `.heading-1/2/3` - 标题样式
- `.gradient-text` - 渐变文字

### 动画

- `.animate-fade-in` - 淡入动画
- `.animate-slide-up` - 上滑动画
- `.animate-scale-in` - 缩放动画

## 环境变量

在项目根目录创建 `.env.local` 文件：

```env
VITE_API_BASE_URL=http://localhost:8000
VITE_APP_TITLE=KAMFU Tech
```

## 浏览器支持

- Chrome (最新)
- Firefox (最新)
- Safari (最新)
- Edge (最新)

## 开发规范

### 组件命名

- 组件文件使用 PascalCase: `ServiceCard.vue`
- 组件名使用多单词: `AppHeader.vue`

### 代码风格

- 使用 Composition API
- 使用 `<script setup>` 语法
- 遵循 Vue 3 风格指南

### Git 提交

遵循约定式提交规范：

```
feat: 新功能
fix: 修复
docs: 文档
style: 格式
refactor: 重构
test: 测试
chore: 构建/工具
```

## 待办事项

- [ ] 完善 API 集成
- [ ] 添加单元测试
- [ ] 添加 E2E 测试
- [ ] 性能优化
- [ ] SEO 优化
- [ ] PWA 支持

## 联系方式

如有问题，请联系开发团队。


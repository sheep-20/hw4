# 楼层导航静态网页

这是一个用于展示同济大学嘉定校区楼层平面图的网页项目。当前支持 4 楼和 5 楼切换，可以通过点击房间热区、搜索关键词或下拉选择来查看房间信息、教师信息和现场照片。

## 如何运行

本项目不需要后端、数据库或构建工具，直接打开 `index.html` 即可使用。

推荐方式：

1. 双击打开 `index.html`
2. 或在浏览器中打开项目路径下的 `index.html`

如果浏览器对本地图片加载有限制，也可以在项目目录启动一个简单静态服务：

```powershell
python -m http.server 8000
```

然后访问：

```text
http://127.0.0.1:8000
```

## 页面功能

- 楼层切换：点击顶部的 `4楼`、`5楼` 按钮切换不同楼层。
- 搜索房间：在搜索框输入房间号、房间名称或教师姓名，点击“搜索”。
- 快速选择：通过下拉框选择具体房间，再点击“查看房间”。
- 点击热区：在平面图上点击浅色高亮区域，查看对应房间或设施详情。
- 信息弹窗：弹窗会展示房号、房间名称、教师信息和图片，点击教师名字可以跳转官网教师信息页面。

## 项目结构

```text
.
├── index.html        # 页面结构
├── style.css         # 页面样式、动画、响应式布局
├── script.js         # 楼层数据、热区坐标、搜索和弹窗逻辑
├── images/           # 4楼平面图和房间照片
└── images-5/         # 5楼平面图、房间照片和设施照片
```

## 数据维护

主要数据都在 `script.js` 中维护：

- `roomsPosition`：4 楼热区坐标。
- `roomInfo`：4 楼房间信息。
- `roomsPosition5`：5 楼热区坐标。
- `roomInfo5`：5 楼房间和设施信息。
- `teacherUrls`：教师主页链接。
- `floors`：楼层配置，包括底图路径、房间数据和热区数据。

## 添加或修改教师链接

在 `script.js` 中找到 `teacherUrls`：

```js
const teacherUrls = {
    '教师姓名': '#',
};
```

把 `#` 替换成真实主页地址即可。只要房间信息里的教师姓名和 `teacherUrls` 中的姓名完全一致，页面弹窗里就会自动变成可点击链接。

## 添加房间照片

1. 把图片放入对应楼层目录：
   - 4 楼：`images/`
   - 5 楼：`images-5/`
2. 在 `roomInfo` 或 `roomInfo5` 中配置 `photo` 字段：

```js
room520: {
    class: '520',
    roomname: '房间名称',
    teachers: ['暂无信息'],
    photo: 'images-5/room520.jpg'
}
```

## 调整热区位置

热区坐标在 `roomsPosition` 和 `roomsPosition5` 中。

5 楼主要使用 SVG 热区：

```js
room512: {
    points: [[978, 803], [1093, 728], [1197, 861], [1052, 953]]
}
```

或矩形热区：

```js
facility5Elevator: {
    rect: { x: 200, y: 900, width: 52, height: 60, rotation: 0 }
}
```

修改坐标后刷新页面即可查看效果。

## 图片命名约定

5 楼当前使用：

- 底图：`images-5/floorplan.jpg`
- 房间照片：`images-5/room505.jpg` 到 `images-5/room520.jpg`
- 楼梯照片：`images-5/DoorL.jpg`、`images-5/DoorR.jpg`
- 关闭连廊照片：`images-5/ClosedDoor1.jpg`、`images-5/ClosedDoor2.jpg`

## 注意事项

- 本项目是静态网页，不需要安装依赖。
- 修改 `script.js` 后建议运行语法检查：

```powershell
node --check script.js
```

- 如果新增图片后页面不显示，先检查文件名、大小写和路径是否完全一致。

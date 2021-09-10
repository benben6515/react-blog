### 這是一個用 React 做的簡易 SPA 部落格

- 功能：
  - 登入頁面：輸入帳號密碼後可以登入
  - 註冊頁面：可以開放使用者註冊
  - About 頁面：隨意顯示一些關於這個部落格的話
  - 文章列表頁面：可以看到所有文章，一頁只會顯示 5 筆，需要支援分頁功能，可以換頁
  - 單篇文章頁面：點進去文章以後可以看到文章完整內容
  - 發表文章頁面：可以輸入標題跟內文發文可以
- 其他細節
  - 可以切換主題，並存在 localStorage 裡
  - 404 頁面
  - loading 頁面
  - 支援手機版 RWD
  - 使用 `.env` 檔管理變數，如：每頁顯示幾篇文章、URL
- 使用技術
  - react
  - react-router-dom
  - @emotion

`pages/` 下都用一個頁面，就沒有在拆分 component 了

`styles/` 下放的都是純 CSS 的東西，還有共用的小東西，程式碼不多就沒有再拆分出來，統一放在 `GlobalStyle.js` 裡面

[Demo](https://benben6515.github.io/react-blog/)

部分截圖：

![](https://i.imgur.com/wRJRSkIl.png)
> 手機 RWD

![](https://i.imgur.com/AZS1NfQ.gif)
> Loading 頁面

![](https://i.imgur.com/9r4P1zi.gif)
> 動畫細節


---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

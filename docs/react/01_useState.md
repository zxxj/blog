> 先不深入原理, 先拿一个最简单的demo来说

## js普通函数
```tsx
function App() {
  const handleCount = () => {
    count++;
    console.log(count); // 点击按钮时 count变量会更新, 但是视图不会更新, 也就是他无法触发组件的更新
  };

  return (
    <>
      <button onClick={handleCount}>点击{count}</button>
    </>
  );
}

export default App;

```

## 使用useState
```tsx
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(count + 1); // 使用useState后,会同步更新视图, 可以触发组件的更新
  };

  return (
    <>
      <button onClick={handleCount}>点击{count}</button>
    </>
  );
}

export default App;

```
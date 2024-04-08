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


```html
<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<title>Horizontal Progress Bar with Border</title>
	<script src="https://cdn.bootcdn.net/ajax/libs/echarts/5.2.2/echarts.min.js"></script>
</head>

<body>
	<div id="main" style="width: 600px; height: 100px;"></div>
	<script>
		var myChart = echarts.init(document.getElementById('main'));

		var option = {
			xAxis: {
				show: false
			},
			yAxis: {
				type: 'category',
				show: false,
				data: ['Progress'],
				axisLabel: { show: false },
				splitLine: { show: false }
			},
			series: [
				{
					name: 'Progress 1',
					type: 'pictorialBar',
					symbol: 'rect',
					symbolSize: [5, 20],
					symbolMargin: 2, // 调整间隔大小
					symbolClip: true,
					symbolRepeat: 'fixed',
					symbolPosition: 'start',
					z: 2,
					data: [70],
					itemStyle: {
						color: 'green',
						borderColor: 'black',
						borderWidth: 1,
					}
				},
				{
					name: 'Progress 2',
					type: 'pictorialBar',
					symbol: 'rect',
					symbolSize: [5, 20],
					symbolMargin: 2, // 调整间隔大小
					symbolClip: true,
					symbolRepeat: 'fixed',
					symbolPosition: 'start',
					z: 3,
					data: [10],
					itemStyle: {
						color: 'red',
						borderColor: 'black',
						borderWidth: 1,
					}
				},

			]
		};

		myChart.setOption(option);
	</script>
</body>

</html>
```
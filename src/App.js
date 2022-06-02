import { Button } from 'antd-mobile'
import css from './app.module.scss'
import './app.scss'
function App() {
  return (
    <div className="App">
      {
        Array(50).fill(1).map((item, idx) => (<p className={css.p + ' p-fs'} key={idx}>一段自定义的css样式文字,第{idx}条</p>))
      }
      <Button type="primary">按钮</Button>
    </div>
  );
}

export default App;

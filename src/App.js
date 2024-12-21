import { testData,test } from '@common/data'
import base64 from 'base64-js'

import { Button, Typography} from '@material-ui/core'; // 根据需要解构具体的组件
import { DatePicker } from '@material-ui/pickers'; // 示例，根据需要解构
import { Add as AddIcon } from '@material-ui/icons'; // 示例，使用解构并重命名
import { Alert } from '@material-ui/lab'; // 示例

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRegularIconName } from '@fortawesome/free-regular-svg-icons'; // 替换为实际的图标名
import { faSolidIconName } from '@fortawesome/free-solid-svg-icons'; // 替换为实际的图标名

import moment from 'moment';
import { format, parseISO, subDays } from 'date-fns'; // 示例，根据需要解构

// 图表
// import * as echarts from 'echarts'; // 或者解构特定的函数
// import EchartsReact from 'echarts-for-react';

import axios from 'axios';
import classnames from 'classnames';
import { saveAs } from 'file-saver';
import IDB from 'idb'; // 注意：这个库可能需要特定的导入方式，查看文档
import mammoth from 'mammoth';
import MarkdownToJSX from 'markdown-to-jsx';
import PDFMerger from 'pdf-merger-js'; // 注意：这个库可能需要特定的导入方式，查看文档
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend'; // 如果需要触摸后端支持
import { Provider, useDispatch, useSelector } from 'react-redux'; // 根据需要解构
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import reportWebVitals from 'web-vitals'; // 通常用于在开发模式下报告性能
import XLSX from 'xlsx'; // 注意：这个库可能需要特定的导入方式，查看文档
import xml2js from 'xml2js';

function App() {
console.log(test(), base64, '11111')
  return (
    <div className="App">
      {testData.map((item) => <>{item.name}</>)}
    </div>
  );
}

export default App;

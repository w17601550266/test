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

// UI框架和组件
console.log('Button and Typography from @material-ui/core:', Button, Typography);
console.log('DatePicker from @material-ui/pickers:', DatePicker);
console.log('AddIcon (renamed from Add) from @material-ui/icons:', AddIcon);
console.log('Alert from @material-ui/lab:', Alert);

// FontAwesome图标
console.log('library from @fortawesome/fontawesome-svg-core:', library);
console.log('FontAwesomeIcon from @fortawesome/react-fontawesome:', FontAwesomeIcon);
// 注意：faRegularIconName 和 faSolidIconName 是具体的图标名，这里应该替换为实际的图标对象
// 但由于它们只是从库中导入的引用，直接输出可能不会有太多信息
console.log('faRegularIconName:', faRegularIconName); // 这可能只会输出一个对象引用
console.log('faSolidIconName:', faSolidIconName); // 同上

// 日期处理
console.log('moment library:', moment);
console.log('date-fns functions:', { format, parseISO, subDays });

// 其他库
console.log('axios library:', axios);
console.log('classnames library:', classnames);
console.log('saveAs function from file-saver:', saveAs);
console.log('IDB library:', IDB); // 注意：这个库可能需要特定的使用方式
console.log('mammoth library:', mammoth);
console.log('MarkdownToJSX library:', MarkdownToJSX);
console.log('PDFMerger library:', PDFMerger); // 注意：这个库可能需要特定的使用方式
console.log('DndProvider from react-dnd:', DndProvider);
console.log('HTML5Backend from react-dnd-html5-backend:', HTML5Backend);
console.log('TouchBackend from react-dnd-touch-backend:', TouchBackend);
console.log('React-Redux hooks and Provider:', { Provider, useDispatch, useSelector });
console.log('React Router components:', { Router: BrowserRouter, Route, Switch });
console.log('reportWebVitals function:', reportWebVitals);
console.log('XLSX library:', XLSX); 
console.log('xml2js library:', xml2js);
  return (
    <div className="App">
      {testData.map((item) => <>{item.name}</>)}
    </div>
  );
}

export default App;

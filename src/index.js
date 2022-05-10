import React from 'react'
import { createRoot } from 'react-dom/client'

import 'antd/dist/antd.less'

import 'moment/locale/zh-cn'

import App from './App'

createRoot(document.getElementById('root')).render(<App />)

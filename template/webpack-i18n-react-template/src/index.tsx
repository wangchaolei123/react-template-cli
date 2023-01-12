import React from 'react';
import { createRoot } from 'react-dom/client';
// import './rem';
import AppWrap from './App';
import '@/styles/common.less';

const root = document.getElementById('root');
if (root) {
  createRoot(root).render(<AppWrap />);
}

const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// 정적 파일 제공을 위한 경로 설정 (프로젝트 루트)
app.use(express.static(path.join(__dirname, '..')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'));
});

app.listen(PORT, () => {
  console.log('START SERVER');
});

// 文件路径 ./node-functions/api/hello.js
// 访问路径 example.com/api/hello
export default function onRequest(context) {
  return new Response('Hello from Node Functions!');
}
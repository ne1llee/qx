/* 
全民小说 unlock vip
QX : 
^https?:\/\/my.arstsgc.cn\/v2\/center\/index.api.* url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/aimeiju.js
Surge4：
http-response ^https?:\/\/mjapp.anlujia.com\/index\.php\/app\/ios\/(vod\/show|(user|vod|topic|type)\/index) requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/aimeiju.js
hostname = my.arstsgc.cn
*/
var body = $response.body;
var url = $request.url;
const user = "/v2/center/index.api"; //用户信息

if (url.indexOf(user) != -1){
  let obj = JSON.parse(body);
  obj.data.ad.ad_end_datetime = "2088-08-08 08:08:08";
  obj.data.ad.ad_tips = "VIP888";
  body = JSON.stringify(obj);
}
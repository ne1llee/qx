/* 
全民小说 unlock vip
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

$done({body});
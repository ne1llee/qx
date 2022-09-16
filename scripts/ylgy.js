var body = $response.body
var url = $request.url

if (body) {
  var obj = JSON.parse($response.body)
  obj.data.map_data =
    '{ "widthNum": 8, "heightNum": 10, "levelKey": 80001, "blockTypeData": { "1": 2, "4": 1, "13": 2 }, "levelData": { "1": [ { "id": "1-16-16", "type": 1, "rolNum": 16, "rowNum": 16, "layerNum": 1, "moldType": 1, "blockNode": null } ], "2": [ { "id": "1-16-16", "type": 1, "rolNum": 16, "rowNum": 16, "layerNum": 2, "moldType": 1, "blockNode": null } ], "3": [ { "id": "1-16-16", "type": 1, "rolNum": 16, "rowNum": 16, "layerNum": 3, "moldType": 1, "blockNode": null } ] } }'

  $done({ body: JSON.stringify(obj) })
} else {
  $done({})
}

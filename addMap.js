var inte = null
function addMap(){
    var map = new AMap.Map("container", {
        zoom:11,
        mapStyle:"amap://styles/whitesmoke",
        center:[110.4,19.85]
    });
    
    var option = {
        level:"city",
        extensions:"all",
    }
    
    var district = new AMap.DistrictSearch(option);
    district.search("海口", function(status, result){
        var bounds = result['districtList'][0]['boundaries'];
        var poline = new AMap.Polygon({
            path:bounds,
            strokeColor:"#0091ea",
            fillOpacity:0
        });
        map.add(poline);
    })
    
    var myChart = echarts.init(document.getElementById('main'));
        
    var itemStyle = {
        normal: {
            opacity: 0.3,
            color:  "#ffffff",
            borderWidth: 1,
            // borderColor: '#000000',
            }
    };
    var option = {
        series: [{
            backgroundColor:"",
            name: 'pie',
            type: 'pie',
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:15},
                {value:15},
                {value:15},
                {value:15},
                {value:15},
                {value:15},
                {value:15},
                {value:15},
                {value:15},
                {value:15},
                {value:15},
                {value:15},
                {value:15},
                {value:15},
                {value:15},
                {value:15},
                {value:15},
                {value:15},
                {value:15},
                {value:15},
                {value:15},
                {value:15},
                {value:15},
                {value:15},
            ],
            itemStyle: itemStyle,
            animation:false
        }]
    }     

    var index = 0
    var heatmap = new AMap.Heatmap()
    function getJson(){
        var j = parseInt(index/2)
        var i = j<10?String('0'+j):String(j)
        if(index > 0){
            if(j == 24){
                index = 0
                map.remove(heatmap)
                option['series'][0]['data'][23]['itemStyle'] = {
                        color:"#ffffff"
                    }
                return true
            }
            else{
                map.remove(heatmap)
            }
        }
        var filename = 'data520_time/' + i + " " + (index % 2 + 1) + '.json'
        $.getJSON(filename, function(data){
            heatmap = new AMap.Heatmap(map, {
                radius:5,
            })
            heatmap.setDataSet({
                data:data
            })

            document.getElementById("_amap_heatmap_div_").style['background-color'] = '#ffffff00'

            if(index <= 24){
                option['series'][0]['data'][index - 1]['itemStyle'] = {
                    color:"#0000ff"
                }
            }
            else{
                if(index < 48){
                    option['series'][0]['data'][index%24 - 1]['itemStyle'] = {
                        color:"#000000"
                    }
                }
                else{
                    option['series'][0]['data'][23]['itemStyle'] = {
                        color:"#000000"
                    }
                }
            }

            if(index > 1){
                if(index <= 25){
                    option['series'][0]['data'][index - 2]['itemStyle'] = {
                        color:"#ffffff"
                    }
                }
                else{
                    if(index < 48){
                        option['series'][0]['data'][index%24 - 2]['itemStyle'] = {
                            color:"#ffffff"
                        }
                    }
                    else{
                        option['series'][0]['data'][22]['itemStyle'] = {
                            color:"#ffffff"
                        }
                    }
                }
            }
            myChart.setOption(option);
        })
        index ++
    }
    inte = setInterval(getJson, 1500)
    //getJson()
}
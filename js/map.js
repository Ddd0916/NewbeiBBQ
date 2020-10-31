<script type="text/javascript">
      function init(){
        //位置
        var pinLocation = new google.maps.LatLng(23.563397,120.472856);
        //設定
        var ROADMAP ={
          center: pinLocation,
          mapTypeId:google.maps.MapTypeId.ROADMAP,
          zoom:15,
          panControl:false, //不可水平移動
          zoomControl:true, //有縮放鈕
          zoomControlOptions:{
            style:google.maps.ZoomControlStyle.SMALL,//小按鈕 可選LARGE
            position:google.maps.ControlPosition.TOP_RIGHT //放右上方
          },
          mapTypeControl:true, //可以切換街道和衛星
          mapTypeControlOptions:{
            style:google.maps.MapTypeControlStyle.DROPDOWN_MENU ,//下拉式選單
                              //可選：HORIZONTAL_BAR和DEFAULT
            position:google.maps.ControlPosition.TOP_LEFT //放左上方
          },
          scaleControl:true,//顯示地圖刻度
          scaleControlOptions:{
            position:google.maps.ControlPosition.TOP_CENTER //上方中間
          },
          streetViewControl:false, //不可拖拉小橘人到地圖
          overviewMapControl:false, //不顯示較大區域的縮圖
  
          styles:[
            {
              stylers:[
                {hue:'#00ff6f'}, //色相
                {saturation:-50} //飽和度
              ]
            },{
              featureType:'road',//我要設定道路
              elementType:'geometry',//幾何/線條的部分
              stylers:[
                {lightness:100},
                {visibility:'simplified'} //道路細節精簡
              ]
  
            },{
              featureType:'transit',//我要設定大眾運輸
              elementType:'geometry',//幾何/線條的部分
              stylers:[
                {hue:'#ff6600'},
                {saturation:+80} 
              ]
            },{
              featureType:'transit',//我要設定大眾運輸
              elementType:'labels',//標示的部分
              stylers:[
                {hue:'#ff0066'},
                {saturation:+80} 
              ]
            },{
              featureType:'poi',//搜尋點
              elementType:'labels',//標示的部分
              stylers:[
                {visibility: "off"}
              ]
            },{
              featureType:'poi.park',//搜尋點
              elementType:'labels',//標示的部分
              stylers:[
                {visibility: "on"}
              ]
            },{
              featureType:'water',//搜尋點
              elementType:'geometry',//幾何/線條的部分
              stylers:[
                {hue: "#c4f4f4"}
              ]
            },{
              featureType:'road',//道路
              elementType:'labels',//標示的部分
              stylers:[
                {visibility: "off"}
              ]
            }
          ]
        };
        //定位在畫面的哪裡，設定參考
        var venueMap = new google.maps.Map(document.getElementById('map'),ROADMAP);
        //定位點的標示
        var startPosition= new google.maps.Marker({
          position:pinLocation,
          map:venueMap,
          icon:'https://cdn3.iconfinder.com/data/icons/food-set-3/91/Food_C223-128.png'
        });
      };
    
   
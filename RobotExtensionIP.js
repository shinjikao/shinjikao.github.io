(function(ext) {
    ext._shutdown = function() {
        console.log('Shutting down...');
    };

    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };
    ext.SettingTargetIP = function(ip) {
        console.log("SettingTargetIP");
        return ip;
    }
    port=":8080";
    ext.Head_movement = function(ip, p1 ,p2, callback) {
        console.log("Head_movement");
        console.log(ip);
        console.log(p1);
        console.log(p2);
        $.ajax({
              //url:'http://'+ ip + '/'+ '?name=Head_movement' + '&p1=' + p1 + '&p2=' + p2,
              url: 'http://' + ip + port + '/?name=Head_movement' + '&p1=' + p1 + '&p2=' + p2,
              dataType: 'jsonp',
              crossDomain:true,
              success: function(data ) {
                console.log("success handler");
               
              },
              error: function (jqXHR, textStatus, errorThrown) {
                console.log("error handler");
              } 
        });
    };
     ext.Body_movement = function(ip, p1 ,p2,p3, callback) {
        console.log("Body_movement");
        console.log(ip);
        console.log(p1);
        console.log(p2);
        console.log(p3);
        $.ajax({
              url: 'http://' + ip + port + '/?name=Body_movement' + '&p1=' + p1 + '&p2=' + p2+ '&p3=' + p3,
              dataType: 'jsonp',
              crossDomain:true,
              success: function( data ) {
                console.log("success handler");
               
              },
              error: function (jqXHR, textStatus, errorThrown) {
                console.log("error handler");
              } 
        });
    };
     ext.Facial = function(ip, p1 , callback) {
        console.log("Facial");
        console.log(ip);
        console.log(p1);
        $.ajax({
              url: 'http://' + ip + port + '/?name=Facial' + '&p1=' + p1 ,
              dataType: 'jsonp',
              crossDomain:true,
              success: function( data ) {
                console.log("success handler");
               
              },
              error: function (jqXHR, textStatus, errorThrown) {
                console.log("error handler");
              } 
        });
    };
    var descriptor = {
        blocks: [
            ['r','設定  %s' , 'Setting_targetIP',"192.168.xx.xx"],
            
            ['', 'IP %s 頭部轉動  向 %m.head_direction   %m.head_degree  度' , 'Head_movement',"192.168.0.1","左","45"],
            ['', 'IP %s %m.move_direction  移動  %m.move_far 公尺  速度  %m.move_speed' , 'Body_movement',"192.168.0.1","前進","0.25" ,"一般"],
            ['', 'IP %s 身體轉動  向 %m.body_turn_direction  %m.body_turn_degree 度' , 'Body_turn',"192.168.0.1","左轉","90"],
            ['', 'IP %s %m.body_turn_clockwise 向後轉 ' , 'Body_turn_clockwise',"192.168.0.1","順時針"],
            ['', 'IP %s 停止 ' , 'Body_turn_stop',"192.168.0.1"],
            ['', 'IP %s 行為 %m.action_type ' , 'Action',"192.168.0.1",'打招呼'],
            ['', 'IP %s 表情 %m.facial_type' , 'Facial',"192.168.0.1",'期待'],
            ['', 'IP %s 交通號誌 %m.semaphore_type' , 'Semaphore_picture',"192.168.0.1",'交通號誌1'],
            ['', 'IP %s 動物素材 %m.animal_type'    , 'Animal_picture',"192.168.0.1",'動物素材1'],
            ['', 'IP %s 車輪燈光 %m.light_on_off_side   %m.light_on_off   顏色 %m.light_on_off_color   燈光模式 %m.light_on_off_pattern ', 'Wheel_lights',"192.168.0.1","全燈光","開啟","白色","呼吸燈"],
            ['', 'IP %s 語音  %m.tts_type ' , 'TTS',"192.168.0.1",'Hi,你好'],
            ['', 'IP %s 音效  %m.sound_type' , 'Sound',"192.168.0.1",'笑聲'],
            ['', 'IP %s 錄音' , 'Record_sound',"192.168.0.1"],
            ['', 'IP %s 撥放音樂' ,'Play_music',"192.168.0.1"],
            ['', 'IP %s 拍照' , 'Camera_picture',"192.168.0.1"],
            ['', 'IP %s 錄影' , 'Record_video',"192.168.0.1"],
            ['', 'IP %s 打開電視' , 'Open_TV',"192.168.0.1"],
        ],
        menus:{
            "head_direction"           :["左","右","上","下"],
            "head_degree"              :["0","15","30","45"],   
            "move_direction"           :["前進","後退"],  
            "move_far"                 :["0.25","0.50","0.75","1.00","1.25","1.50","1.75","2.00"],  
            "move_speed"               :["慢","一般" , "快"],  
            "body_turn_direction"      :["左轉","右轉"],  
            "body_turn_degree"         :["0" , "15","30", "45", "60" , "75" , "90" , "105" , "120", "135", "150", "165", "180", "195", "210", "225", "240", "255", "270", "285", "300","315" ,"330" , "345", "360"], 
            "body_turn_clockwise"      :["順時針","逆時針"],  
            "action_type"              :["打招呼","聽不懂","跳舞","開心","生氣","害羞" ,"不耐煩","追自己尾巴","同意","不同意"],
            "facial_type"              :["有興趣","疑惑","驕傲","輕鬆愉快","開心","期待" ,"愣一下","質疑","不耐煩","自信","有活力","得意","無奈" ,"嚴肅","煩惱","裝平靜","慵懶","察覺","倦怠","害羞","無辜"],
            "semaphore_type"           :["交通號誌1","交通號誌2","交通號誌3","交通號誌4","交通號誌5"],
            "animal_type"              :["動物素材1","動物素材2","動物素材3","動物素材4","動物素材5"],
            "light_on_off_side"        :["全燈光","左邊燈光","右邊燈光"],
            "light_on_off"             :["開啟","關閉"],
            "light_on_off_color"       :["白色","紅色","橙色","黃色","綠色","藍色","紫色"],
            "light_on_off_pattern"     :["呼吸燈","漸層跑馬燈","快速閃爍","慢速閃爍","彩虹跑馬燈"],
            "tts_type"                 :["Hi,你好","看這裡","句子3*","句子4*","句子5*","句子6*","句子7*","句子8*","句子9*","句子10*","隨機"],
            "sound_type"               :["小狗","小貓","馬","汽車喇叭","跑車聲浪","火車","笑聲","咳嗽聲","放屁聲","隨機"],
        },
        url: 'http://technews.tw/2015/08/19/asus-robot-2016/' // Link to extension documentation, homepage, etc.
    };

    // Register the extension
    ScratchExtensions.register('ASUSToby', descriptor, ext);
})({});
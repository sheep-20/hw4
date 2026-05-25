document.addEventListener('DOMContentLoaded', function() {
    const roomsContainer = document.getElementById('rooms-container');
    const roomsPosition = {
        room401:  { top: '410px', left : '1350px', width : '100px', height : '260px', rotation: -50  },
        room405:  { top: '531px', left : '1208px', width : '43px', height : '97px', rotation: -48  },
        room406:  { top: '655px', left : '1346px', width : '42px', height : '97px', rotation: -46  },
        room407:  { top: '592px', left : '1100px', width : '128px', height : '98px', rotation: -45  },
        room408L: { top: '695px', left : '1290px', width : '72px', height : '100px', rotation: -46  },
        room408R: { top: '748px', left : '1238px', width : '72px', height : '100px', rotation: -46  },
        room409L: { top: '714px', left : '1009px', width : '67px', height : '95px', rotation: -42  },
        room409R: { top: '669px', left : '1060px', width : '65px', height : '90px', rotation: -44  },
        room410:  { top: '826px', left : '1119px', width : '145px', height : '100px', rotation: -41  },
        room411:  { top: '779px', left : '880px', width : '145px', height : '96px', rotation: -33  },
        room412:  { top: '925px', left : '967px', width : '170px', height : '100px', rotation: -29  },
        room413:  { top: '845px', left : '679px', width : '32px', height : '99px', rotation: 0  },
        room414:  { top: '1000px', left : '715px', width : '140px', height : '100px', rotation: -2  },
        room415:  { top: '845px', left : '645px', width : '32px', height : '62px', rotation: 0  },
        room416:  { top: '1003px', left : '500px', width : '213px', height : '100px', rotation: 0  },
        room417:  { top: '845px', left : '500px', width : '143px', height : '97px', rotation: 0 },
        room418R: { top: '1003px', left : '342px', width : '50px', height : '100px', rotation: 0  },
        room418L: { top: '1003px', left : '395px', width : '105px', height : '100px', rotation: 0  },
        room419:  { top: '845px', left : '342px', width : '157px', height : '97px', rotation: 0  },
        room420:  { top: '1070px', left : '282px', width : '60px', height : '33px', rotation: 0  },
        room422:  { top: '979px', left : '42px', width : '145px', height : '123px', rotation: 0  },
        room424:  { top: '935px', left : '42px', width : '145px', height : '41px', rotation: 0  },
        room426:  { top: '840px', left : '42px', width : '145px', height : '95px', rotation: 0  },
        room428:  { top: '795px', left : '107px', width : '80px', height : '43px', rotation: 0  },
        room430:  { top: '623px', left: '42px', width: '145px', height: '170px', rotation: 0  },
        room431:  { top: '595px', left: '255px', width: '80px', height: '192px', rotation: 0  },
        room432:  { top: '542px', left : '100px', width : '88px', height : '80px', rotation: 0  },
        room434:  { top: '383px', left : '42px', width : '145px', height : '157px', rotation: 0  },
        room435:  { top: '345px', left : '108px', width : '80px', height : '38px', rotation: 0  },
        room437:  { top: '303px', left : '108px', width : '80px', height : '38px', rotation: 0  },
        room439:  { top: '303px', left : '242px', width : '42px', height : '72px', rotation: 0  },
        room441:  { top: '303px', left : '340px', width : '104px', height : '70px', rotation: 0  },
        room442L: { top: '437px', left : '342px', width : '102px', height : '97px', rotation: 0  },
        room442R: { top: '437px', left : '282px', width : '58px', height : '97px', rotation: 0  },
        room443:  { top: '303px', left : '445px', width : '72px', height : '70px', rotation: 0  },
        room444:  { top: '437px', left : '446px', width : '73px', height : '97px', rotation: 0  },
        room445:  { top: '300px', left : '526px', width : '35px', height : '70px', rotation: -15  },
        room446:  { top: '432px', left : '528px', width : '130px', height : '92px', rotation: -7  },
        room447:  { top: '286px', left : '570px', width : '35px', height : '70px', rotation: -25  },
        room448L: { top: '353px', left : '730px', width : '107px', height : '90px', rotation: -36  },
        room448R: { top: '407px', left : '670px', width : '65px', height : '85px', rotation: -24  },
        room449:  { top: '267px', left : '605px', width : '35px', height : '70px', rotation: -25  },
        room450:  { top: '292px', left : '818px', width : '78px', height : '90px', rotation: -44  },
        room451L: { top: '223px', left : '645px', width : '78px', height : '73px', rotation: -40  },
        room451R: { top: '175px', left : '710px', width : '52px', height : '73px', rotation: -46  },
        room455:  { top: '88px', left : '781px', width : '80px', height : '75px', rotation: -46  },
        room456:  { top: '198px', left : '898px', width : '100px', height : '79px', rotation: -46  },
    };

    const roomInfo = {
        room401:  { class: '无',   roomname: '活动区（乒乓球、台球）', teachers: ['无'], photo: 'images/room401.jpg'},
        room405:  { class: '405',  roomname: '男卫生间', teachers: ['无'] },
        room406:  { class: '406',  roomname: '女卫生间', teachers: ['无'] },
        room407:  { class: '407',  roomname: '教育部工程研究中心实验室', teachers: ['无'], photo: 'images/room407.jpg' }, //未完整
        room408L: { class: '408L', roomname: '教授办公室', teachers: ['朱宏明', '赵钦佩', '史扬'], photo: 'images/room408L.jpg' },
        room408R: { class: '408R', roomname: '讲师办公室', teachers: ['王洁', '曾进'], photo: 'images/room408R.jpg' },
        room409L: { class: '409L', roomname: '教育部工程研究中心实验室', teachers: ['无'], photo: 'images/room409L.jpg' }, //未完整
        room409R: { class: '409R', roomname: '教育部工程研究中心实验室', teachers: ['无'], photo: 'images/room409R.jpg' }, //未完整
        room410:  { class: '410',  roomname: '教研室', teachers: ['王冬青', '李江峰', '夏波涌', '张颖'], photo: 'images/room410.jpg' },
        room411:  { class: '411',  roomname: '教育部工程研究中心实验室', teachers: ['无'], photo: 'images/room411.jpg' }, //未完整
        room412:  { class: '412',  roomname: '教研室', teachers: ['刘岩', '张慧娟', '孙萍', '罗怡桂'], photo: 'images/room412.jpg' },
        room413:  { class: '413',  roomname: '弱电间', teachers: ['无'], photo: 'images/room413.jpg' }, 
        room414:  { class: '414',  roomname: '教师工作室', teachers: ['肖国宝', '杜庆峰', '张苗苗'], photo: 'images/room414.jpg' },
        room415:  { class: '415',  roomname: '强电间', teachers: ['无'], photo: 'images/room415.jpg' }, 
        room416:  { class: '416',  roomname: '计算机房Ⅲ', teachers: ['无'], photo: 'images/room416.jpg' }, 
        room417:  { class: '417',  roomname: '会议室', teachers: ['无'], photo: 'images/room417.jpg' },
        room418L: { class: '418L', roomname: '教师工作室', teachers: ['张林', '刘琴'], photo: 'images/room418L.jpg' },
        room418R: { class: '418R', roomname: '研究生工作室', teachers: ['无'], photo: 'images/room418R.jpg' },
        room419:  { class: '419',  roomname: '嵌入式系统实验室', teachers: ['无'], photo: 'images/room419.jpg' },
        room420:  { class: '420',  roomname: '学院公告栏', teachers: ['无'], photo: 'images/room420.jpg' },
        room422:  { class: '无',   roomname: '杂物间', teachers: ['无'], photo: 'images/room422.jpg' },
        room424:  { class: '无',   roomname: '茶水间', teachers: ['无'], photo: 'images/room424.jpg' },
        room426:  { class: '426',  roomname: '计算机房Ⅱ', teachers: ['无'], photo: 'images/room426.jpg' },
        room428:  { class: '428',  roomname: '服务器机房', teachers: ['无'], photo: 'images/room428.jpg' },
        room430:  { class: '430',  roomname: '计算机房Ⅰ', teachers: ['无'], photo: 'images/room430.jpg' }, 
        room431:  { class: '无',   roomname: '活动区（钢琴、象棋）', teachers: ['无'], photo: 'images/room431.jpg' },
        room432:  { class: '432',  roomname: '党员之家', teachers: ['无'], photo: 'images/room432.jpg' },
        room434:  { class: '434',  roomname: '多媒体教室Ⅰ', teachers: ['无'], photo: 'images/room434.jpg' },
        room435:  { class: '435',  roomname: '男卫生间', teachers: ['无'], },
        room437:  { class: '437',  roomname: '女卫生间', teachers: ['无'], },
        room439:  { class: '无',   roomname: '活动区（书籍） 电梯', teachers: ['无'], photo: 'images/room439.jpg' },
        room441:  { class: '441',  roomname: '会议室', teachers: ['无'], photo: 'images/room441.jpg' },
        room442L: { class: '442L', roomname: '教务办公室', teachers: ['刘梦露','李慧敏','王彩霞','杨丹','姚仕仪'], photo: 'images/room442L.jpg' }, //未完整
        room442R: { class: '442R', roomname: '学院办公室', teachers: ['闫鹏','张晶','林伊凡','张晓雅','钱银飞','王昊榕','俞晓静'], photo: 'images/room442R.jpg' }, //未完整
        room443:  { class: '443',  roomname: '实验中心', teachers: ['陈梁', '杨旻','严海洲'], photo: 'images/room443.jpg' },
        room444:  { class: '444',  roomname: '档案室', teachers: ['无'], photo: 'images/room444.jpg' },
        room445:  { class: '445',  roomname: '强电间', teachers: ['无'], photo: 'images/room445.jpg' },
        room446:  { class: '446',  roomname: '学生工作办公室', teachers: ['葛蕾', '焦嘉欣', '钟梦莹', '陈璞皎', '张砚秋','丁瑞庭'], photo: 'images/room446.jpg' }, //未完整
        room447:  { class: '447',  roomname: '女卫生间', teachers: ['无'], },
        room448L: { class: '448-1', roomname: '副书记办公室', teachers: ['陈荣'], photo: 'images/room448L.jpg' }, //未完整
        room448R: { class: '448-2', roomname: '副书记办公室', teachers: ['吴晓培', '宋井宽'], photo: 'images/room448R.jpg' },
        room449:  { class: '449',  roomname: '男卫生间', teachers: ['无'], },
        room450:  { class: '450R', roomname: '院长办公室', teachers: ['申恒涛'], photo: 'images/room450.jpg' },
        room451L: { class: '451-1', roomname: '副院长办公室', teachers: ['王成'], photo: 'images/room451L.jpg' },
        room451R: { class: '451R', roomname: '学院党委办公室',teachers: ['无'], photo: 'images/room451R.jpg' },
        room455:  { class: '455',  roomname: '会议室', teachers: ['无'], photo: 'images/room455.jpg' },
        room456:  { class: '456',  roomname: '党委办公室', teachers: ['周微微', '陆风兰', '赵清理'], photo: 'images/room456.jpg' },
    };

    const keywordAliases = {
        '学工办': ['学生工作办公室'],
        '学生办': ['学生工作办公室'],
        '教务办': ['教务办公室'],
        '学院办': ['学院办公室'],
        '党委办': ['党委办公室'],
        '副书记办': ['副书记办公室'],
        '院长办': ['院长办公室'],
        '副院长办': ['副院长办公室']
    };

    const teacherUrls = {
        '朱宏明':'https://sse.tongji.edu.cn/info/1208/3177.htm',
        '赵钦佩':'https://sse.tongji.edu.cn/info/1208/4170.htm',
        '史扬':'https://sse.tongji.edu.cn/info/1208/3179.htm',
        '王洁':'https://sse.tongji.edu.cn/info/1211/3210.htm',
        '曾进':'https://sse.tongji.edu.cn/info/1211/3206.htm',
        '王冬青':'https://sse.tongji.edu.cn/info/1209/3192.htm',
        '李江峰':'https://sse.tongji.edu.cn/info/1209/3194.htm',
        '夏波涌':'https://sse.tongji.edu.cn/info/1209/3191.htm',
        '张颖':'https://sse.tongji.edu.cn/info/1210/3197.htm',
        '刘岩':'https://cs.tongji.edu.cn/info/1063/2763.htm',
        '张慧娟':'https://sse.tongji.edu.cn/info/1209/3187.htm',
        '孙萍':'https://sse.tongji.edu.cn/info/1209/3193.htm',
        '罗怡桂':'https://sse.tongji.edu.cn/info/1209/3195.htm',
        '张林':'https://sse.tongji.edu.cn/info/1211/5051.htm',
        '江建慧':'https://sse.tongji.edu.cn/info/1210/3204.htm',
        '刘琴':'https://sse.tongji.edu.cn/info/1208/4447.htm',
        '史清江':'https://sse.tongji.edu.cn/info/1210/4497.htm',
        '陈梁':'https://sse.tongji.edu.cn/xygk/jgsz.htm',
        '杨旻':'',
        '葛蕾':'https://sse.tongji.edu.cn/xygk/jgsz.htm',
        '焦嘉欣':'',
        '钟梦莹':'',
        '陈璞皎':'',
        '严海州':'https://sse.tongji.edu.cn/xygk/jgsz.htm',
        '王彩霞':'https://sse.tongji.edu.cn/xygk/jgsz.htm',
        '杨丹':'',
        '赵生捷':'https://sse.tongji.edu.cn/info/1092/3140.htm',
        '穆斌（副院长）':'https://sse.tongji.edu.cn/info/1208/3389.htm',
        '陈荣（副书记）':'https://sse.tongji.edu.cn/xygk/jgsz.htm',
        '张晓雅':'',
        '闫鹏':'https://sse.tongji.edu.cn/xygk/jgsz.htm',
        '林伊凡':'',
        '钱银飞':'',
        '张晶':'https://sse.tongji.edu.cn/info/1207/3164.htm',
        '申恒涛':'https://cs.tongji.edu.cn/info/1061/3337.htm',
        '王成':'https://cs.tongji.edu.cn/info/1061/2800.htm',
        '陈伟超':'https://cs.tongji.edu.cn/info/1121/3281.htm',
        '朱亚萍':'https://cs.tongji.edu.cn/info/1063/3611.htm',
        '杜博闻':'https://cs.tongji.edu.cn/info/1121/3282.htm',
        '韩丰夏':'https://cs.tongji.edu.cn/info/1063/3608.htm',
        '李冰':'https://cs.tongji.edu.cn/info/1063/3985.htm',
        '尹长青':'https://cs.tongji.edu.cn/info/1061/2729.htm',
        '沈莹':'https://cs.tongji.edu.cn/info/1061/3607.htm',
        '金博':'https://cs.tongji.edu.cn/info/1063/2768.htm',
        '黄杰':'https://cs.tongji.edu.cn/info/1122/3260.htm',
        '高珍':'https://cs.tongji.edu.cn/info/1063/2764.htm',
        '冯巾松':'https://cs.tongji.edu.cn/info/1064/2781.htm',
        '范鸿飞':'https://cs.tongji.edu.cn/info/1063/2765.htm',
        '唐剑锋':'https://cs.tongji.edu.cn/info/1064/2776.htm',
        '邓浩':'https://cs.tongji.edu.cn/info/1063/3303.htm',
        '徐行':'https://cs.tongji.edu.cn/info/1061/3726.htm',
        '曹晓峰':'https://cs.tongji.edu.cn/info/1063/3692.htm',
        '王轩瀚':'https://cs.tongji.edu.cn/info/1061/3961.htm',
        '朱磊':'https://cs.tongji.edu.cn/info/1061/3378.htm',
        '张鹏飞':'https://cs.tongji.edu.cn/info/1061/3967.htm',
        '张奇':'https://cs.tongji.edu.cn/info/1061/4040.htm',
      
    };

    const roomInfo5 = {
        room505:  { class: '505',  roomname: '男卫生间',  teachers: ['暂无信息'], photo: 'images-5/room505.jpg' },
        room506:  { class: '506',  roomname: '女卫生间',  teachers: ['暂无信息'], photo: 'images-5/room506.jpg' },
        room507L: { class: '507L', roomname: '教师办公室', teachers: ['陈伟超','王洁','曾进','朱亚萍','杜博闻','韩丰夏','李冰'], photo: 'images-5/room507L.jpg' },
        room508:  { class: '508',  roomname: '研究生办公室',  teachers: ['尹长青'], photo: 'images-5/room508.jpg' },
        room509L: { class: '509L', roomname: '研究生工作室', teachers: ['史清江'], photo: 'images-5/room509L.jpg' },
        room509R: { class: '509R', roomname: '教师办公室', teachers: ['尹长青','沈莹','金博'], photo: 'images-5/room509R.jpg' },
        room510L: { class: '510L', roomname: '教师办公室', teachers: ['赵生捷'], photo: 'images-5/room510L.jpg' },
        room510R: { class: '510R', roomname: '教师办公室', teachers: ['暂无信息'], photo: 'images-5/room510R.jpg' },
        room511:  { class: '511',  roomname: '研究生工作室',  teachers: ['罗怡桂'], photo: 'images-5/room511.jpg' },
        room512:  { class: '512',  roomname: '教师办公室',  teachers: ['暂无信息'], photo: 'images-5/room512.jpg' },
        room513:  { class: '513',  roomname: '弱电间',  teachers: ['暂无信息'], photo: 'images-5/room513.jpg' },
        room514:  { class: '514',  roomname: '教师办公室',  teachers: ['黄杰','高珍','冯巾松','范鸿飞','唐剑锋','邓浩'], photo: 'images-5/room514.jpg' },
        room515:  { class: '515',  roomname: '强电间',  teachers: ['暂无信息'], photo: 'images-5/room515.jpg' },
        room516:  { class: '516',  roomname: '实验室',  teachers: ['暂无信息'], photo: 'images-5/room516.jpg' },
        room517:  { class: '517',  roomname: '主机服务器机房',  teachers: ['暂无信息'], photo: 'images-5/room517.jpg' },
        room518L: { class: '518L', roomname: '教师办公室', teachers: ['徐行','曹晓峰','王轩瀚'], photo: 'images-5/room518L.jpg' },
        room518R: { class: '518R', roomname: '同济大学IBM技术俱乐部', teachers: ['朱磊', '张鹏飞', '张奇' ], photo: 'images-5/room518R.jpg' },
        room519:  { class: '519',  roomname: '同济大学贝宝实验室/同济大学eBay国家级工程实践教育中心',  teachers: ['暂无信息'], photo: 'images-5/room519.jpg' },
        room520:  { class: '520',  roomname: '房间520 - 杂物间',  teachers: ['暂无信息'], photo: 'images-5/room520.jpg' },
    };

    Object.assign(roomInfo5, {
        facility5ClosedDoorL: { class: '关闭连廊', roomname: '五楼左侧连廊', teachers: ['暂无信息'], photo: 'images-5/ClosedDoor1.jpg', type: 'facility', selectable: false, searchable: false },
        facility5Elevator: { class: '电梯', roomname: '五楼电梯', teachers: ['暂无电梯图片'], type: 'facility', selectable: false, searchable: false },
        facility5DoorL: { class: '楼梯', roomname: '五楼左侧楼梯', teachers: ['暂无信息'], photo: 'images-5/DoorL.jpg', type: 'facility', selectable: false, searchable: false },
        facility5ClosedDoorR: { class: '关闭连廊', roomname: '五楼右侧连廊', teachers: ['暂无信息'], photo: 'images-5/ClosedDoor2.jpg', type: 'facility', selectable: false, searchable: false },
        facility5DoorR: { class: '楼梯', roomname: '五楼右侧楼梯', teachers: ['暂无信息'], photo: 'images-5/DoorR.jpg', type: 'facility', selectable: false, searchable: false },
    });

    const roomsPosition5 = {
        facility5DoorL: { points: [[1238, 260], [1282, 212], [1398, 306], [1356, 356]]},
        facility5ClosedDoorR: { points: [[1282, 212], [1322, 165], [1598, 385], [1558, 433]]},
        facility5DoorR: { points: [[1396, 388], [1440, 340], [1558, 433], [1514, 485]]},
        room505:  { points: [[1150, 358], [1238, 260], [1356, 356], [1270, 453]]},
        room506:  { points: [[1314, 488], [1396, 388], [1514, 485], [1434, 587]] },
        room507L: { points: [[1027, 512], [1150, 358], [1270, 453], [1142, 607]] },
        room508:  { points: [[1185, 638], [1314, 488], [1434, 587], [1311, 741]] },
        room509L: { points: [[965, 575], [1027, 512], [1142, 607], [1055, 693]] },
        room509R: { points: [[965, 575], [883, 627], [947, 754], [1055, 693]]  },
        room510L: { points: [[1145, 683], [1185, 638], [1311, 741], [1258, 803]] },
        room510R: {  points: [[1093, 728], [1145, 683], [1258, 803], [1197, 861]] },
        room511:  { points: [[730, 660], [883, 627], [947, 753], [730, 810]] },
        room512:  { points: [[978, 803], [1093, 728], [1197, 861], [1052, 953]] },
        room513:  { points: [[650, 715], [730, 715], [730, 810], [650, 807]] },
        room514:  { points: [[730, 863], [858, 845], [895, 995], [730, 1018]] },
        room515:  { points: [[560, 666], [730, 660], [730, 715], [560, 715]] },
        room516:  { points: [[455, 862], [667, 862], [667, 1018], [455, 1024]] },
        room517:  { points: [[458, 666], [560, 666], [560, 807], [458, 807]] },
        room518L: { points: [[353, 862], [455, 862], [455, 1024], [353, 1020]]},
        room518R: {  points: [[260, 862], [353, 862], [353, 1020], [260, 1017]] },
        room519:  { points: [[260, 657], [458, 660], [458, 806], [260, 806]] },
        room520:  { points: [[205, 963], [260, 963], [260, 1018], [205, 1015]] },
        facility5ClosedDoorL: { rect: { x: 132, y: 656, width: 50, height: 359, rotation: 0 } },
        facility5Elevator: { rect: { x: 200, y: 900, width: 52, height: 60, rotation: 0 } },
    };

    const floors = {
        4: {
            title: '4楼平面图',
            image: 'images/floorplan.png',
            imageAlt: '4楼平面图',
            positions: roomsPosition,
            info: roomInfo,
            layerOffset: { left: -6, top: 3 },
            missingMapText: ''
        },
        5: {
            title: '5楼平面图',
            image: 'images-5/floorplan.jpg',
            imageAlt: '5楼平面图',
            positions: roomsPosition5,
            info: roomInfo5,
            layerOffset: { left: 0, top: 0 },
            missingMapText: ''
        }
    };

    const roomSelect = document.getElementById('roomSelect');
    const floorplanImage = document.getElementById('floorplanImage');
    const floorPlanElement = document.querySelector('.floor-plan');
    const currentFloorTitle = document.getElementById('currentFloorTitle');
    const mapMessage = document.getElementById('mapMessage');
    const searchResultDiv = document.getElementById('searchResult');
    let currentFloorId = '4';
    let selectedRoomId = '';

    function normalizeText(text) {
        return (text || '').toLowerCase().replace(/\s+/g, '');
    }

    function getFloor() {
        return floors[currentFloorId];
    }

    function getRoomDisplayLabel(floorId, roomId) {
        const info = floors[floorId].info[roomId] || {};
        const roomClass = info.class && info.class !== '无' ? info.class : roomId.replace('room', '');
        const roomName = info.roomname || '未知房间';
        return `${floorId}楼 ${roomClass} - ${roomName}`;
    }

    function getSortedRoomIds(floorId) {
        const floor = floors[floorId];
        return Object.keys(floor.info).filter(roomId => floor.info[roomId]?.selectable !== false).sort((a, b) => {
            const roomA = (floor.info[a]?.class || '').replace('无', '999');
            const roomB = (floor.info[b]?.class || '').replace('无', '999');
            return roomA.localeCompare(roomB, 'zh-Hans-CN', { numeric: true, sensitivity: 'base' });
        });
    }

    function clearInfo() {
        const existingInfo = document.querySelector('.room-info');
        if (existingInfo) {
            existingInfo.remove();
        }
    }

    function updateSelectedRoom(roomId) {
        selectedRoomId = roomId;
        document.querySelectorAll('.room, .room-zone').forEach(room => {
            room.classList.toggle('selected', room.dataset.roomId === roomId);
        });
    }

    function renderPolygonRooms(floor) {
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.classList.add('rooms-svg');
        svg.setAttribute('viewBox', '0 0 1600 1178.37');
        svg.setAttribute('width', '1600');
        svg.setAttribute('height', '1178.37');
        svg.setAttribute('aria-label', `${currentFloorId}楼房间热区`);

        Object.entries(floor.positions).forEach(([roomId, position]) => {
            const zone = position.rect
                ? document.createElementNS('http://www.w3.org/2000/svg', 'rect')
                : document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
            zone.classList.add('room-zone');
            if (floor.info[roomId]?.type === 'facility') {
                zone.classList.add('facility-zone');
            }
            zone.dataset.roomId = roomId;

            if (position.rect) {
                const rect = position.rect;
                zone.setAttribute('x', rect.x);
                zone.setAttribute('y', rect.y);
                zone.setAttribute('width', rect.width);
                zone.setAttribute('height', rect.height);
                if (rect.rotation) {
                    const cx = rect.x + rect.width / 2;
                    const cy = rect.y + rect.height / 2;
                    zone.setAttribute('transform', `rotate(${rect.rotation} ${cx} ${cy})`);
                }
            } else {
                zone.setAttribute('points', position.points.map(point => point.join(',')).join(' '));
            }

            zone.setAttribute('tabindex', '0');
            zone.setAttribute('role', 'button');
            zone.setAttribute('aria-label', getRoomDisplayLabel(currentFloorId, roomId));
            zone.addEventListener('click', function() {
                showInfo(roomId);
            });
            zone.addEventListener('keydown', function(event) {
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    showInfo(roomId);
                }
            });
            svg.appendChild(zone);
        });

        roomsContainer.appendChild(svg);
    }

    function populateRoomSelect() {
        roomSelect.innerHTML = '<option value="">快速选择房间...</option>';

        Object.keys(floors).forEach(floorId => {
            const group = document.createElement('optgroup');
            group.label = `${floorId}楼`;

            getSortedRoomIds(floorId).forEach(roomId => {
                const option = document.createElement('option');
                option.value = `${floorId}:${roomId}`;
                option.textContent = getRoomDisplayLabel(floorId, roomId);
                group.appendChild(option);
            });

            roomSelect.appendChild(group);
        });
    }

    function renderRooms() {
        roomsContainer.innerHTML = '';
        const floor = getFloor();
        const layerOffset = floor.layerOffset || { left: 0, top: 0 };
        roomsContainer.style.setProperty('--rooms-offset-left', `${layerOffset.left || 0}px`);
        roomsContainer.style.setProperty('--rooms-offset-top', `${layerOffset.top || 0}px`);

        if (Object.values(floor.positions).some(position => position.points || position.rect)) {
            renderPolygonRooms(floor);
            updateSelectedRoom(selectedRoomId);
            return;
        }

        Object.entries(floor.positions).forEach(([roomId, position]) => {
            const roomDiv = document.createElement('button');
            roomDiv.type = 'button';
            roomDiv.classList.add('room');
            roomDiv.dataset.roomId = roomId;
            roomDiv.setAttribute('aria-label', getRoomDisplayLabel(currentFloorId, roomId));
            roomDiv.style.top = position.top;
            roomDiv.style.left = position.left;
            roomDiv.style.width = position.width;
            roomDiv.style.height = position.height;
            roomDiv.style.transform = `rotate(${position.rotation || 0}deg)`;
            roomDiv.onclick = function() {
                showInfo(roomId);
            };
            roomsContainer.appendChild(roomDiv);
        });

        updateSelectedRoom(selectedRoomId);
    }

    function setMapMessage(message) {
        mapMessage.textContent = message || '';
        mapMessage.hidden = !message;
    }

    function renderFloor(floorId) {
        currentFloorId = floorId;
        selectedRoomId = '';
        const floor = getFloor();

        clearInfo();
        floorPlanElement.classList.add('switching');
        currentFloorTitle.textContent = floor.title;
        floorplanImage.alt = floor.imageAlt;
        floorplanImage.style.display = 'block';
        floorplanImage.onerror = function() {
            floorplanImage.style.display = 'none';
            setMapMessage(floor.missingMapText || '楼层底图暂未找到。');
            floorPlanElement.classList.remove('switching');
        };
        floorplanImage.onload = function() {
            setMapMessage(Object.keys(floor.positions).length ? '' : floor.missingMapText);
            requestAnimationFrame(() => {
                floorPlanElement.classList.remove('switching');
            });
        };
        floorplanImage.src = floor.image;

        if (!Object.keys(floor.positions).length) {
            setMapMessage(floor.missingMapText);
        } else {
            setMapMessage('');
        }

        renderRooms();
        updateFloorTabs();
        window.setTimeout(() => {
            floorPlanElement.classList.remove('switching');
        }, 420);
    }

    function updateFloorTabs() {
        document.querySelectorAll('.floor-tab').forEach(tab => {
            const active = tab.dataset.floor === currentFloorId;
            tab.classList.toggle('active', active);
            tab.setAttribute('aria-selected', active ? 'true' : 'false');
        });
    }

    function getSelectionValue(floorId, roomId) {
        return `${floorId}:${roomId}`;
    }

    function showInfo(roomId) {
        clearInfo();
        const floor = getFloor();
        const roomDiv = document.querySelector(`[data-room-id="${roomId}"]`);
        const info = floor.info[roomId] || {};
        const classNumber = info.class || '未知';
        const roomName = info.roomname || '未知';
        const teachers = info.teachers || ['无信息'];
        const photo = info.photo || '';
        const detailLabel = info.type === 'facility' ? '备注' : '教师';
        const infoDiv = document.createElement('div');
        infoDiv.classList.add('room-info');

        const teachersHtml = teachers.map(teacher => {
            if (teacherUrls[teacher]) {
                return `<a href="${teacherUrls[teacher]}" target="_blank" rel="noopener">${teacher}</a>`;
            }
            return `<span>${teacher}</span>`;
        }).join('');

        infoDiv.innerHTML = `
            <button class="close-btn" type="button" aria-label="关闭详情">&times;</button>
            <h3>${classNumber}</h3>
            <div class="info-row"><span class="info-label">房名</span><span>${roomName}</span></div>
            <div class="info-row"><span class="info-label">教师</span><div class="teacher-list">${teachersHtml}</div></div>
            ${photo ? `<img class="long-press-able-img" src="${photo}" alt="${classNumber} 房间照片">` : ''}
        `;

        infoDiv.querySelector('.close-btn').onclick = function() {
            infoDiv.classList.remove('show');
            setTimeout(() => infoDiv.remove(), 220);
        };

        document.querySelector('.floor-plan').appendChild(infoDiv);
        updateSelectedRoom(roomId);
        roomSelect.value = getSelectionValue(currentFloorId, roomId);

        if (roomDiv) {
            const floorRect = floorPlanElement.getBoundingClientRect();
            const roomRect = roomDiv.getBoundingClientRect();
            const top = Math.max(18, floorPlanElement.scrollTop + roomRect.top - floorRect.top - 12);
            const rightSideLeft = floorPlanElement.scrollLeft + roomRect.right - floorRect.left + 18;
            const leftSideLeft = floorPlanElement.scrollLeft + roomRect.left - floorRect.left - 438;
            const left = rightSideLeft > 1160 && leftSideLeft > 18 ? leftSideLeft : Math.min(rightSideLeft, 1160);
            infoDiv.style.top = `${top}px`;
            infoDiv.style.left = `${left}px`;
            roomDiv.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
        } else {
            infoDiv.style.top = '96px';
            infoDiv.style.left = '24px';
            document.querySelector('.floor-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

        requestAnimationFrame(() => {
            infoDiv.classList.add('show');
        });
    }

    function locateRoom(roomId) {
        const roomDiv = document.querySelector(`[data-room-id="${roomId}"]`);
        if (!roomDiv) {
            return;
        }
        roomDiv.classList.remove('locating');
        void roomDiv.offsetWidth;
        roomDiv.classList.add('locating');
        window.setTimeout(() => roomDiv.classList.remove('locating'), 1300);
    }

    function jumpToRoom(floorId, roomId, shouldLocate = false) {
        if (!floors[floorId] || !floors[floorId].info[roomId]) {
            return;
        }

        if (currentFloorId !== floorId) {
            renderFloor(floorId);
        }

        showInfo(roomId);
        if (shouldLocate) {
            locateRoom(roomId);
        }
        searchResultDiv.textContent = '';
    }

    function parseSelection(value) {
        const [floorId, roomId] = (value || '').split(':');
        return { floorId, roomId };
    }

    window.selectRoom = function() {
        const { floorId, roomId } = parseSelection(roomSelect.value);
        jumpToRoom(floorId, roomId);
    };

    roomSelect.addEventListener('change', function() {
        window.selectRoom();
    });

    document.querySelectorAll('.floor-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            renderFloor(tab.dataset.floor);
            roomSelect.value = '';
            searchResultDiv.textContent = '';
        });
    });

    window.searchInfo = function () {
        const searchInput = document.getElementById('searchInput').value.trim();

        if (!searchInput) {
            searchResultDiv.textContent = '请输入关键词';
            return;
        }

        const normalizedInput = normalizeText(searchInput);
        const aliasCandidates = keywordAliases[normalizedInput] || [];
        const candidates = [searchInput, ...aliasCandidates];

        for (const floorId of Object.keys(floors)) {
            const floor = floors[floorId];
            const roomIds = Object.keys(floor.info);

            for (let i = 0; i < roomIds.length; i++) {
                const roomId = roomIds[i];
                const info = floor.info[roomId] || {};
                if (info.searchable === false) {
                    continue;
                }
                const classNumber = info.class || '';
                const roomName = info.roomname || '';
                const teachers = info.teachers || [];
                const teachersString = teachers.join('、');
                const searchableText = [
                    normalizeText(classNumber),
                    normalizeText(roomName),
                    normalizeText(teachersString)
                ];

                if (candidates.some(keyword => {
                    const normalizedKeyword = normalizeText(keyword);
                    return normalizedKeyword && searchableText.some(text => text.includes(normalizedKeyword));
                })) {
                    jumpToRoom(floorId, roomId, true);
                    return;
                }
            }
        }

        searchResultDiv.textContent = '无此信息';
    };

    populateRoomSelect();
    renderFloor(currentFloorId);
    
});

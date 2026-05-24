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
      
    };

    const roomSelect = document.getElementById('roomSelect');

    function normalizeText(text) {
        return (text || '').toLowerCase().replace(/\s+/g, '');
    }

    function getRoomDisplayLabel(roomId) {
        const info = roomInfo[roomId] || {};
        const roomClass = info.class && info.class !== '无' ? info.class : roomId.replace('room', '');
        const roomName = info.roomname || '未知房间';
        return `${roomClass} - ${roomName}`;
    }

    function populateRoomSelect() {
        const roomIds = Object.keys(roomInfo).sort((a, b) => {
            const roomA = (roomInfo[a]?.class || '').replace('无', '999');
            const roomB = (roomInfo[b]?.class || '').replace('无', '999');
            return roomA.localeCompare(roomB, 'zh-Hans-CN', { numeric: true, sensitivity: 'base' });
        });

        roomIds.forEach(roomId => {
            const option = document.createElement('option');
            option.value = roomId;
            option.textContent = getRoomDisplayLabel(roomId);
            roomSelect.appendChild(option);
        });
    }

    function jumpToRoom(roomId) {
        if (!roomId || !document.getElementById(roomId)) {
            return;
        }
        showInfo(roomId);
        document.getElementById(roomId).scrollIntoView({ behavior: 'smooth', block: 'center' });
        roomSelect.value = roomId;
    }

    window.selectRoom = function() {
        jumpToRoom(roomSelect.value);
    };

    roomSelect.addEventListener('change', function() {
        jumpToRoom(roomSelect.value);
    });

    populateRoomSelect();

    for (let roomId in roomsPosition) {
        const roomDiv = document.createElement('div');
        roomDiv.classList.add('room');
        roomDiv.id = roomId;
        roomDiv.style.top = roomsPosition[roomId].top;
        roomDiv.style.left = roomsPosition[roomId].left;
        roomDiv.style.width = roomsPosition[roomId].width;
        roomDiv.style.height = roomsPosition[roomId].height;
        roomDiv.style.position = 'absolute';
        roomDiv.style.transform = `rotate(${roomsPosition[roomId].rotation}deg)`;
        roomDiv.style.transformOrigin = 'center';
        roomDiv.onclick = function() {
            showInfo(roomDiv.id);
        };
        roomsContainer.appendChild(roomDiv);
    }

    document.addEventListener('mousemove', function(event) {
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        document.querySelectorAll('.room').forEach(function(room) {
            const rect = room.getBoundingClientRect();
            const roomX = rect.left + rect.width / 2;
            const roomY = rect.top + rect.height / 2;

            const distance = Math.sqrt((mouseX - roomX) ** 2 + (mouseY - roomY) ** 2);
            const maxDistance = 200; // 定义影响范围
            const scale = Math.max(1, 1.5 - distance / maxDistance); // 计算缩放比例

            room.style.transform = `rotate(${roomsPosition[room.id].rotation}deg) scale(${scale})`;
        });
    });
    
    function showInfo(roomId) {
        const existingInfo = document.querySelector('.room-info');
        if (existingInfo) {
            existingInfo.remove();
        }

        const roomDiv = document.getElementById(roomId);
        const info = roomInfo[roomId] || {};
        const classNumber = info.class || '未知';
        const roomName = info.roomname || '未知';
        const teachers = info.teachers || ['无信息'];
        const photo = info.photo || '';
        const infoDiv = document.createElement('div');
        infoDiv.classList.add('room-info');

        let teachersHtml = '';
        teachers.forEach(teacher => {
            if (teacherUrls[teacher]) {
                teachersHtml += `<tr><td><a href="${teacherUrls[teacher]}" target="_blank">${teacher}</a></td></tr>`;
            } else {
                teachersHtml += `<tr><td>${teacher}</td></tr>`;
            }
        });

        infoDiv.innerHTML = `
            <table>
                <tr><td><b>房号：</b></td><td>${classNumber}</td></tr>
                <tr><td><b>房名：</b></td><td>${roomName}</td></tr>
                <tr><td><b>教师：</b></td><td><table>${teachersHtml}</table></td></tr>
                <tr>
                    <td>
                        ${photo ? `<td colspan="2"><img class=" long-press-able-img " src="${photo}" alt="Room Photo" style="max-width: 400px; height: auto;"></td></tr>` : ''}
                    </td>
                </tr>
            </table>
        `;

        // 添加关闭按钮
        const closeButton = document.createElement('button');
        closeButton.classList.add('close-btn');
        closeButton.innerHTML = '&times;';
        closeButton.onclick = function() {
            infoDiv.classList.remove('show');
            setTimeout(() => infoDiv.remove(), 500); // 移除标签前的过渡时间
        };
        infoDiv.appendChild(closeButton);

        document.querySelector('.floor-plan').appendChild(infoDiv);

        const rect = roomDiv.getBoundingClientRect();
        infoDiv.style.top = `${rect.top + window.scrollY}px`;
        infoDiv.style.left = `${rect.left + rect.width + window.scrollX}px`;

        requestAnimationFrame(() => {
            infoDiv.classList.add('show');
        });
    }

    window.searchInfo = function () {
        const searchInput = document.getElementById('searchInput').value.trim();
        const roomIds = Object.keys(roomInfo);
        let found = false;
        const searchResultDiv = document.getElementById('searchResult');

        if (!searchInput) {
            searchResultDiv.innerHTML = '请输入关键词';
            return;
        }

        const normalizedInput = normalizeText(searchInput);
        const aliasCandidates = keywordAliases[normalizedInput] || [];
        const candidates = [searchInput, ...aliasCandidates];

        for (let i = 0; i < roomIds.length; i++) {
            const info = roomInfo[roomIds[i]] || {};
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
                jumpToRoom(roomIds[i]);
                found = true;
                break;
            }
        }

        if (!found) {
            searchResultDiv.innerHTML = '无此信息';
        } else {
            searchResultDiv.innerHTML = '';  // 清空“无此信息”的残留
        }
    };
    
});

import Mock from 'mockjs';

let Random = Mock.Random;
Mock.mock(/\/home\/index\/getList/g,{
    "data|30":[{
        "url":"@url",
        "title":'@name',
        "imgUrl":Random.image('300x200',Random.hex())
    }]
});

//获取所有会议数据
Mock.mock(/\/conference\/getconferences/g,{
    "success":true,
    "errorMsg":"@csentence(5)",
    "info|5":[{
        'conferenceId|+1':2223,
        "subject":"@name",
        "startTime":'@datetime',
        "endTime":'@datetime',
        "duration":"会议持续时间",
        "status|1":[0,1,2],
        "key|+1":0
    }]
});

//创建会议
Mock.mock(/\/conference\/createconferences/g,{
    "success":true,
    "errorMsg":"@csentence(5)",
    "info":true
});

///conference/modifyconferences  更新会议
Mock.mock(/\/conference\/modifyconferences/g,{
    "success":true,
    "errorMsg":"@csentence(5)",
    "info":true
});


//取消会议
Mock.mock(/\/conference\/cancelconferences/g,{
    "success":true,
    "errorMsg":"@csentence(5)",
    "info":true
});

//获取参与会议的人员名单
Mock.mock(/\/getMeetUser/g,{
    "success":true,
    "errorMsg":"@error",
    "info|10":[{
        "id|+1":1,
        "name":"@name"
    }]
});
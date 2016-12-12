import Mock from 'mockjs';

let Random = Mock.Random;
Mock.mock(/\/home\/index\/getList/g,{
    "data|30":[{
        "url":"@url",
        "title":'@name',
        "imgUrl":Random.image('300x200',Random.hex())
    }]
});

Mock.mock(/\/getAllTable\.json/g,{
    "data|5":[{
        'meetingId|+1':2223,
        "meetingName":"@name",
        "startTime":'@datetime',
        "endTime":'@datetime',
        "key|+1":0
    }]
});


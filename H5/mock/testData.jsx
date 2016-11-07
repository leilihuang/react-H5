import Mock from 'mockjs';

let Random = Mock.Random;
Mock.mock(/\/home\/index\/getList/g,{
    "data|30":[{
        "url":"@url",
        "title":'@name',
        "imgUrl":Random.image('300x200',Random.hex())
    }]
});


import React ,{ Component } from 'react';
import { ListView } from 'antd-mobile';

const data = [
    {
        img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
        title: '相约酒店',
        des: '不是所有的兼职汪都需要风吹日晒',
    },
    {
        img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
        title: '麦当劳邀您过周末',
        des: '不是所有的兼职汪都需要风吹日晒',
    },
    {
        img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
        title: '食惠周',
        des: '不是所有的兼职汪都需要风吹日晒',
    }
];
let index = data.length - 1;

const NUM_SECTIONS = 5;
const NUM_ROWS_PER_SECTION = 5;
let pageIndex = 0;

export default class ListBox extends Component{
    static defaultProps = {
        title:'',
        moreTitle:'',
        listData:[]
    };
    constructor(props){

        super(props);
        const getSectionData = (dataBlob, sectionID) => dataBlob[sectionID];
        const getRowData = (dataBlob, sectionID, rowID) => dataBlob[rowID];

        const dataSource = new ListView.DataSource({
            getRowData,
            getSectionHeaderData: getSectionData,
            rowHasChanged: (row1, row2) => row1 !== row2,
            sectionHeaderHasChanged: (s1, s2) => s1 !== s2
        });

        this.dataBlob = {};
        this.sectionIDs = [];
        this.rowIDs = [];
        this.genData = (pIndex = 0) => {
            for (let i = 0; i < NUM_SECTIONS; i++) {
                const ii = (pIndex * NUM_SECTIONS) + i;
                const sectionName = `Section ${ii}`;
                this.sectionIDs.push(sectionName);
                this.dataBlob[sectionName] = sectionName;
                this.rowIDs[ii] = [];

                for (let jj = 0; jj < NUM_ROWS_PER_SECTION; jj++) {
                    const rowName = `S${ii}, R${jj}`;
                    this.rowIDs[ii].push(rowName);
                    this.dataBlob[rowName] = rowName;
                }
            }
            // new object ref
            this.sectionIDs = [].concat(this.sectionIDs);
            this.rowIDs = [].concat(this.rowIDs);
        };
        this.genData();
        this.state =  {
            dataSource: dataSource.cloneWithRowsAndSections(this.dataBlob, this.sectionIDs, this.rowIDs),
            isLoading: false
        };
    }
    onEndReached(event) {
        console.log('reach end', event);

        this.setState({ isLoading: true });
        setTimeout(() => {
            this.genData(++pageIndex);
            this.setState({
                dataSource: this.state.dataSource.cloneWithRowsAndSections(this.dataBlob, this.sectionIDs, this.rowIDs),
                isLoading: false
            });
            console.log('setTimeout')
        }, 1000);
    }
    render(){

        const separator = (sectionID, rowID) => (
            <div key={`${sectionID}-${rowID}`} style={{
                    backgroundColor: '#F5F5F9',
                    height: 8,
                    borderTop: '1px solid #ECECED',
                    borderBottom: '1px solid #ECECED'
                  }}
                />
        );
        const row = (rowData, sectionID, rowID) => {
            if (index < 0) {
                index = this.props.listData.length - 1;
            }
            const d = this.props.listData[index--];
            return (
                <a  key={"listId"+rowID} href={d.url} className="con-box clearfix bor-bottom">
                    <img src={d.imgUrl} alt="" className="con-img"/>
                    <div className="con-lab">{d.title}</div>
                </a>
            );
/*            return (
                <div key={rowID}
                     style={{
                        padding: '8px 16px',
                        backgroundColor: 'white'
                      }}
                    >
                    <h3 style={{ padding: 2, marginBottom: 8, borderBottom: '1px solid #F6F6F6' }}>
                        {obj.title}
                    </h3>
                    <div style={{ display: '-webkit-box', display: 'flex' }}>
                        <img style={{ height: 64 * (window.viewportScale || 1), marginRight: 8 }} src={obj.img} />
                        <div style={{ display: 'inline-block' }}>
                            <p>{obj.des}</p>
                            <p><span style={{ fontSize: '1.6em', color: '#FF6E27' }}>35</span>元/任务</p>
                        </div>
                    </div>
                </div>
            );*/
        };
        return (<div style={{ margin: '0 auto', width: '96%' }}>
            <ListView
                dataSource={this.state.dataSource}
                renderHeader={() => <span>header</span>}
                renderFooter={() => <div style={{ padding: 30, textAlign: 'center' }}>
                  {this.state.isLoading ? '加载中...' : '加载完毕'}
                </div>}
                renderSectionHeader={(sectionData) => (
                  <div>{`任务 1`}</div>
                )}
                renderRow={row}
                renderSeparator={separator}
                className="fortest"
                style={{
                  height: document.body.clientHeight * 10 ,
                  overflow: 'auto',
                  border: '1px solid #ddd',
                  margin: '10px 0'
                }}
                pageSize={4}
                scrollRenderAheadDistance={500}
                scrollEventThrottle={20}
                onScroll={() => { console.log('scroll'); }}
                onEndReached={this.onEndReached.bind(this)}
                onEndReachedThreshold={10}
                />
        </div>);
    }
}
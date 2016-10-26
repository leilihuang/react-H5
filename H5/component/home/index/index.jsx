import './home.scss';
import React , { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import {NavBar , SearchBar } from 'antd-mobile';
import { WhiteSpace, WingBlank, Flex, Carousel } from 'antd-mobile';

import homeRs from './reducer';
import { getList } from './action';

import Active from '../../../util/component/active';
import Menu from '../../../util/component/menu';
import List from '../../../util/component/list';

export const imgData = [
    '//img.alicdn.com/tps/TB16jJuNVXXXXXeaXXXXXXXXXXX-1125-352.jpg_q50.jpg',
    '//ossgw.alicdn.com/creatives-assets/3a9c77de-7820-4724-97d4-6a933d1c302f.png',
    '//aecpm.alicdn.com/simba/img/TB1xhc0MVXXXXalXVXXSutbFXXX.jpg_q50.jpg',
    '//gw.alicdn.com/imgextra/i2/142/TB2G1_nXxaK.eBjSZFwXXXjsFXa_!!142-0-yamato.jpg_q50.jpg'
];

export const menuData = [
    {url:'https://m.nuomi.com/sh/326/0-0/0-0-0-0-0',img:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAt1BMVEUAAAD9Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl7/////+/v/9/f9YmL9Z2f+zMz+u7v+kpL9eHj/4+P/7e3/6Oj/3Nz+v7/+trb+srL+mpr+iYn9c3P9a2v9X1//2Nj+09P/8fEgsZRxAAAAJHRSTlMAC+P18ncfFuzf251PRta9uKhZB2xI6dFccMjGmJSQKSSSFBJnGfpEAAACkUlEQVRYw6TU126rQBAG4AGDacYtbulR9K8BY5ym9PP+z3UmTkBGHsMC3wXauZif1TaqcR/OrkfDhYWe6y1H17PwntozBjdLHFneDAxqI5z0cEJvEjae3LmHSt650STOdlHLtbUjpya0mFPS0R9D27hPtVYWGrBWVO0sQEPBGVVwLtHYpVOxfD5a8E8u5K2JVsxbEt2ZaMm8I4HjozXfEfb3Ah1cHO91gE6Co/OMjlZU0rfQkVU+PGN0NqYDU8iydLeOdmmGX0qp/Tcflk2pYJiQxC9rtbd+iTUCTYNytpz3rQrfcX0g7GKCLgSfG3Vg81kf6OZTnEHyqtjjNkm2j4q91gdiRr88COIH7nlKwJInHj7E9YEe7YWQbLklesfee8TFtj4Qc/oxgeSZW9K8SLl41gicEDN6kOy45S0v3rjYaQT2DA4cQPSPWz7y4oOLSCMQAw68gmjNLXGxQ4rpBF5xoA9R1GqGPpEDtF1DiUNzoO0uS+ZkA23PocSmAKzzTSkENALTvcslkIxoCKb52kTqQATJkBY4Jf5Sha8ErPwLSBZkIVf/YmeRKkQZJBahSpYqlmZFvYn+4jYZZP+bM4MUBmEgin6wMVVDRG0sXYriCbz/2YrNIqsElLfoXwbytjP/jaqtmPN35iUDfLLAhxoWOOvNAr16FtirY4GdDAs0CiwwyLJAK7UksI1DigCmIeVIoIuDngCmQa+BAw46Ezhg0C8NBWwU86KAn7QSE8C0EsswQFOsFWkJ2zMvhVqhMQs89v0ovqSMfDXjyyNfb/kCzisCXmLwmoUXQSm1v8PztbJZ78i0VYVMy1XeMqkcd01IOlqZwlKX1s6wGGfV/T8cF2JsPH9U21bN/jx/WJXzBaE7wxSmWFkJAAAAAElFTkSuQmCC',title:'美食'},
    {url:'https://mdianying.baidu.com/?sfrom=newnuomi&source=nuomi&sub_channel=nuomi_wap_rukou1',img:'https://gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/img/cd781b737af83bc57e7f860d8b74f8d0.png',title:'电影'},
    {url:'https://m.nuomi.com/sh/642/0-0/0-0-0-0-0',img:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAgVBMVEUAAABMpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP5MpP7////u9v/0+f/F4v9erf7M5f9nsv5msf72+/+Avv5/vv7trVlKAAAAH3RSTlMAC/Pe6+N3bh/YT5VGx7ionFkmFAdI0VwWvruQnfkSrqgnKwAAAhFJREFUWMPNmV1vskAQhQ+7CCyoYBXF1vZY7cfb/v8f+IbGhgjswsJc9LnQC8MTzEwG5iwG2C7j7NGEis+h3j9m8XKL6QTp054d9k9pgCksc0ULKl9631ys6UTHgY8uCjlIGI1WbhYcxWKDMSRrjmadYJCDogfqADe7Ez057eCgWtGbVQUrieYEdAILDwtOYvFg90kat5qT0due+q44g1W31gVnUXT6mTM5tBpGcSbqvnnWnM36br5QgE3jC9od+Hm9nHu5XD/t3djMx4j3fDS6rvKDNiLcCNrz+Xp2cKWN8PcWY7a4uIT/aCW+CTVb1Ne9v7HD23v9C63o2/OSfcLa1zW6hSxRk/cK2cuAMAeAQMkJVQAgtV12+2o+h4VMAWSSwgyAkRQaoKKkkBVKUqooNSUiWWGEwlfonjsFjr5C99w5wvgWxT13DEJfoXvuhFDeQufcUaC30D138DyxbazCUFaooGWFIfayQoOjb1HcwiMKWWGBSFYYoZQVlqhki1IBWlJoABSSwgxAKilMAQRKRNg86JHLCXPUlHLCEj9oKaHuf+H8fj2P5PWbd8T9r8SNb9jY/0qMSEYYWdaKr/F/+au1VggvPtKrmfjyKL3eCi/gJ/GIQDrEkI5ZxIMgC4nhBEwCKy9TwrQXONhl9CTbwU3qF0im0pGpcKgrHTsLB+Oy0f1fOFxoHX9QhWbM8cd/o/xelxZNdwAAAAAASUVORK5CYII=',title:'酒店'},
    {url:'https://m.nuomi.com/sh/341/0-0/0-0-0-0-0',img:'https://gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/img/b457afd8b4df3dd192396721d9cd7bbe.png',title:'KTV'},
    {url:'http://waimai.baidu.com/mobile/waimai?qt=confirmcity&third_party=nuomijingang&utm_campaign=nuomiH5&utm_source=othersource&utm_medium=default&cid=100001131&third_party=nuomijingang',img:'https://gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/img/e2eea4794b1bb74aa9c0539e4dee72f5.png',title:'外卖'},
    {url:'https://m.nuomi.com/component/entertainment/1.0.4/page/home/home.html',img:'https://gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/img/e442e69633ad75898472a945c59e48c8.png',title:'休闲娱乐'},
    {url:'https://m.nuomi.com/sh/364/0-0/0-0-0-0-0',img:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAulBMVEUAAAD9Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl79Xl7/////8PD9Zmb/4uL+v7/+jY39dXX/+vr/9/f+i4v/2dn+x8f+sLD+kZH/6ur+np7+mJj+zMz9Y2P+s7P+1NT9g4P9a2v/8vL+qan/5ub9fn7+o6NSiy7pAAAAIXRSTlMA6+NHCZta9Ll3HxYM39tP8dbHqAJs0XAHvpSQKSQU+ZLUEo5MAAADEklEQVRYw6TU21KDMBAG4AXKyRZKj551/oC2tVVb60wd3//BDNDRMYQlwHfBHZnsv7uhBg/O4iaYWD4erWgZ3CycB+puML5domJ5Ox5QB3Nn5qOGP3Pm1M7oMgIruhy1qTW00MgKjSv3bBixPTJxEcBYcGFwvQQtJF5Tei5actkkh1O0Nh0y8cXoIK4N8s5GJ/Ydad3b6Mi+1+YXo7NYk+PVFD1Mr0jloheXFB568pSBSdBT8n94AvQWtCh4mwop3RoXPbDBSkUhBcv+2+oQrLU4W4MV0tnIAutbnH2DZY2otABvJ8/a7+VnB96CCvMIrC8hPT8L6QusaE45B7yDkN7fhXQAz6HcDLyjkLJMSEfwZiQNfLA+N3l6ZZKbT7D8vC1j8Ipa34C3onLwxgbPTNGNE3AqemPw6MRoXpMXSC/Ny4KYaAje6bcZx/KqvKFuaD6E6lCOj2qrG5xQV6RqXa60QhdAqOlJtqn5MTU40KXr5gPTFQor9cRNBtU1TVDxKpofgp2QXlExIQsVW5FbgbGqa4pFCaqehLTPUCvbC+kJVT7pt00pSBuKfg9/ijOj3QZhGIqm0jqkgoR42dqn1SZAgDExCqis3f//1hS6PWQEWxRQzwdYQLDv9Y14Awst3hp4hA/UtGBDWMe/ym4VqXqZAusr63E92iyFhAGywJ7KriviBaw02FMmg/MtsacBK4E4EFNL854Y5fT/R82xg9iSX14TxtX1XNfnaxXrVqHPa0uIfJXhCFlFiD2heapFK62idM8l9STCARGpKy4nAXmRGvOlyBkJ4EVK5s3p0qVpdzk1uQRepHyYBC+jngOL4Xi8FVGRcSKKtiK8WZIlGkQ1aZZ4O9fgP75IO8caTjnolo54xFfeEn+bkz4iPeLGI0y7vcKnrk/0Mb9WhIiZNL9ASKwV/OKThObki7Xqj/C89Gq2+PK47no7fwFfOiJ4WjvEmB+zrB8EaXYB3EGwIzLhe8I0MjfeH2Eix72g8acFkv6qken8UHfV2Hl+ML5wdP/4y4Vf3L/rD3A2gb7+cAXND4l/jLN+XT+jAAAAAElFTkSuQmCC',title:'火锅'},
    {url:'https://m.nuomi.com/component/union/mobilerecharge/page/home/home.html?wi=ODU5ODU3fDAwOGM1YjEyMDI2NWRjMDMwYWJl&cid=002202',img:'https://gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/img/ee5cc18a3fe94cf63f95e54269756054.png',title:'手机充值'},
    {url:'http://lvyou.baidu.com/static/foreign/page/ticket/channel/channel.html?from=webapp',img:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAA21BMVEUAAAAz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zgz0Zj///8+1J72/fvg+fA30ppG1qJ74rzx/PjI8+O/8d+g6s/6/v3S9ehQ16c605zq+/S58NyB48Bt3rZn3bLl+fKy7tl04Llg26+s7dWQ5sdb2q2m69OF5MFU2anV9urN9OaK5cTb9+2W6Mqa6MyZ6Mx0HWwcAAAAI3RSTlMAC+MUm/R3btvsT/HfIta9qFkHArhIRx7p0ZRcyMaQKflFtwmd2OAAAAO9SURBVFjDxdlrd6IwEAZgKt5bL+222rr3fQMqCCoKaq1r7XX//y/aw4hVSSAox93nS23P6ZwJmWRCVCTUn4VWrXqbw49S8a7WKvxUleOdlb/dgXP3rXx2TLRPjXoOEXL1xqdDkytcINZF4eyQcPkSpEr5xCEvM0gkc5koXPMXErtuyuN9PscBzj9Lwl1lcaDsVWwZf8XBvsaUeqWIIxQrUfG+Z3CUzPeI/CjeURGFOapFHK2oCub3C1L4ws91FqlkuXpGSqEKb54jpfP9VXiN1K739hdEmz8MnqxFF1KXO/tfdAU6D4z0l9KQme3+mEeUTo9tmAYk8h8JlsJhjHFv/OKnZLM1fbxw72U5ljYpFrCvO1gHsZ0VW7M1JFEI+luoH2ltFpg+M+IimYt1L2xg34yFjFyvi0RuKGAde34zkYFBybtjy14hUp2mJNTPx+bMna9+TwbhkN3Om06fFoiS86elHJrhhUP1Z7Gw9h9rysijPxDXEMxUOWqb0QaMNwOGFs1/13v1f7jCTacYW8+BgT3us74/NRRxUwf33E6rKCoE7FC8B786e8z1Zk8m22Fyo1aVG/CGfbZn6lDa1oht9QzPsNsLvnDyCRKchQqevNNWxK1n4Zy8ciP2vTPW1tnWUtwKauDRiHWrt3leY/pre7Dan30DvJpSBY+e9wpw3hl5Ws+8E1pHow44VeUWPP/hv9Gne0q27/gBHW5heuDcKqLuNGaMDUFc5ptg4z7I2dLFazCngEP/pe8GZzY2llRGc2AuDgjlBwTarI1A1/QjYGPqPzvazJ5pofABSxDw2AAbL7tjnm9/sZmuiYZ8AZHl03Zdj6i01x6oKskjsyGalDtxt1tiL0XdoY+a6W81IEZbg6hsahDaKTFNpy2QstpZIMYKwsLOQobG+bqeLKqnOFlxkxd0GS8owp6s2d9AihJ7DjYNQ9b3VMj9oWKhBPuSlq9SC0g0ZqabpnTExSRnYe1tZ6c23zTZybiMeJNpqB9MEK3MNXrOC+O8xDd6pY4YBiO9x2GnM3zsMWLEHkViC2eoUxuefIy/TdMzjCqa0HGOR239WduZITrhWZHHOVKITpDy0/jTozjFAn8kFh0VQ713Tp069kgcvZ77LEJfuI7lrxUskvC1Qv7i442Y0MgD7/JUr2akkv7lsXLa19v0L+AnvyJIf4lx+muW9BdBvGYVR6g2/9FlGrlq4UCtKyVe+bALybIi1bw+YP1WTnqpm/7a+ZQX4+mv7v//lwsBtRF8/YHcbbXWKjRUJd5fzaC+oF7mul8AAAAASUVORK5CYII=',title:'旅游'},
    {url:'https://m.nuomi.com/sh/1000107/0-0/0-0-0-0-0',img:'https://gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/img/b16ee74f70a93cafa7cabdadca955909.png',title:'代金券'}
];

class Index extends Component{
    constructor(props){
        super(props);
        this.state = {
            current: 2,
            value:''
        };
    }
    componentWillMount(){
        console.log(0);
        this.props.dispatch(getList());
    }
    componentDidMount(){
        console.log(1);
    }
    componentWillUpdate(props,state){

    }
    componentDidUpdate(props,state){

    }
    shouldComponentUpdate(props,state){

    }
    onSubmit(value){
    }
    onClear(){
/*        this.setState({
            value:''
        })*/
    }
    onChange(val){
/*        this.setState({
            value:val
        });*/
    }
    render(){
        console.log(this.props);
        const settings = {
            dots: true,
            autoplay: true,
            infinite: true,
            selectedIndex: this.state.current
        };
        return (
            <div className="home-box">
                <NavBar iconName="" mode="light">首页</NavBar>
                <WingBlank>
                    <Carousel {...settings}>
                        {imgData.map((src)=>
                                <Flex
                                    justify="center"
                                    className="flex-container-justify"
                                    >
                                    <img className="Carousel-img" src={src} alt=""/>
                                </Flex>
                        )}
                    </Carousel>
                </WingBlank>
                <SearchBar value={this.state.value}
                    placeholder='搜索'
                    onSubmit={this.onSubmit.bind(this)}
                    onClear={this.onClear.bind(this)}
                    showCancelButton={false}
                    onChange={this.onChange.bind(this)}/>

                <Menu data={menuData} />

                <List title='猜你喜欢' moreTitle='更多 >' listData={this.props.homeRs.data} />
            </div>
        )
    }
}

Index = connect(homeRs)(Index);

export default Index;
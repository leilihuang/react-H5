export const SHOW_LOAD = 'SHOW_LOAD';
export const HIDE_LOAD = 'HIDE_LOAD';

export const showLoad = () =>({
    type:SHOW_LOAD,
    load:{
        animating:true,
        text:''
    }
});

export const hideLoad = () =>({
    type:HIDE_LOAD,
    load:{
        animating:false,
        text:''
    }
});
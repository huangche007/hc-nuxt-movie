import Vue from 'vue';

const getImages = (_url) => {
    if( _url !== undefined ){
        let _u = _url.substring( 7 );
        return `https://images.weserv.nl/?url=${_u}`;
    }
}

Vue.prototype.$getImages = getImages;
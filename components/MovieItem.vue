<template>
  <a-card hoverable style="width: 240px">
    <img
      slot="cover"
      alt="example"
      :src="getImages(movie.images.small)"
    />
    <a-card-meta :title="movie.title" @click="goDetail()">
      <template slot="description">
        <h4 class="movie-info-common">上映年份:{{movie.year}}</h4>
        <h4 class="movie-info-common">电影类型:{{movie.genres.join('、')}}</h4>
      </template>
      
    </a-card-meta>
  </a-card>
</template>
<script>
export default {
    props:['movie'],
    methods:{
        goDetail(){

        },
        getImages(_url){
            if( _url !== undefined ){
                let _u = _url.substring( 7 );
                return 'https://images.weserv.nl/?url=' + _u;
            }
        }
    }
}
</script>
<style lang="less">
    .moive-info-common{
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
</style>
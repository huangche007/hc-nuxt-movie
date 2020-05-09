<template>
    <div>
        <movie-list :subjects="subjects"></movie-list>
    </div>
</template>
<script>
import MovieList from '~/components/MovieList.vue'
export default {
    components:{
        MovieList
    },
    async asyncData({app,params}){
        const {data} = await app.$axios.get('/v2/movie/top250?start=0&count=30&apikey=0b2bdeda43b5688921839c8ecb20399b');
        return {subjects:data.subjects};
    },
    head(){
        return {
            title: 'top250',
            meta:[
                {hid:'description',name:'description',content:'豆瓣电影提供最新的电影介绍及评论包括上映影片的影讯查询及购票服务。你可以记录想看、在看和看过的电影电视剧，顺便打分、写影评。根据你的口味，豆瓣电影会推荐好电影给你。'}
            ]
        }
    }
}
</script>
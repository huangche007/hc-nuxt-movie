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
}
</script>
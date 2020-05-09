<template>
    <div class="movie-list">
        <movie-item v-for="movie in subjects" :movie="movie" :key="movie.id"></movie-item>
    </div>
</template>
<script>
import MovieItem from './MovieItem'
export default {
    props:['subjects'],
    components:{
        MovieItem
    }
}
</script>
<style lang="less">
    .movie-list{
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        .ant-card{
            border: 1px solid #ccc;
            text-align: center;
            width: 170px !important;
            margin: 6px;
            box-shadow: 0 0 6px #ccc;
            padding: 4px;
            transition: all 0.5s ease;
            cursor: pointer;
            .img {
                width: 100px;
                height: 140px;
            }
        }
    }
</style>
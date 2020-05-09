<template>
  <a-card hoverable style="width: 240px" @click="goDetail(movie.id)">
    <img
      slot="cover"
      alt="example"
      :src="$getImages(movie.images.small)"
    />
    <a-card-meta :title="movie.title" >
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
        goDetail(id){
            this.$router.push({
                path:`/movie/${id}`
            })
        },

    }
}
</script>
<style lang="less">
    h4{
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
</style>
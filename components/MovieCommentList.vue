<template>
    <div>
        <movie-comment-item v-for="commentItem in popular_reviews" :key="commentItem.id" :commentItem="commentItem"></movie-comment-item>
    </div>
</template>
<script>
import MovieCommentItem from './MovieCommentItem'
export default {
    components:{
        MovieCommentItem
    },
    props:['popular_reviews']
}
</script>
<template>
    <div class="mod">
        <div class="comment-item">
            <div class="comment-u">
                <span class="u-name">{{commentItem.author.name}}</span>
                <span class="u-date">{{commentItem.title}}</span>
            </div>
            <div>
                {{commentItem.summary}}
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:['commentItem']
}
</script>
<style lang="less" scoped>
    .mod{
        border-top: 1px solid #ccc;
        padding: 6px 0;
    }
    .comment-u{
        .u-name{
            color: #37a;
            margin-right: 6px;
        }
        .u-date{
            color: #aaa;
        }
    }
</style>
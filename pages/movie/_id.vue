<template>
    <div>
        <a-layout-content style="padding: 0 50px">
            <div :style="{ background: '#fff', padding: '24px', minHeight: '280px',marginTop:'24px' }">
                <h1>
                    <span class="movie-name">{{movieInfos.original_title}}</span>
                    <span class="movie-year">({{movieInfos.year}})</span>
                </h1>
                <div class="movie-contents">
                    <div class="movie-infos">
                        <div class="movie-img">
                            <img :src="$getImages(movieInfos.images.medium)" alt="">
                        </div>
                        <div class="movie-info">
                            <p>
                                <span>导演：</span>
                                <span class="info-active">{{movieInfos.dirName}}</span>
                            </p>
                            <p>
                                <span>编剧：</span>
                                <span class="info-active">{{movieInfos.writeName}}</span>
                            </p>
                            <p>
                                <span>主演：</span>
                                <span class="info-active">{{movieInfos.castName}}</span>
                            </p>
                            <p>
                                <span>类型：</span>
                                <span class="o-s">{{movieInfos.genres.join(' / ')}}</span>
                            </p>
                            <p>
                                <span>制片国家/地区：</span>
                                <span class="o-s">{{movieInfos.countries.join(' / ')}}</span>
                            </p>
                            <p>
                                <span>语言：</span>
                                <span class="o-s">{{movieInfos.languages.join(' / ')}}</span>
                            </p>
                            <p>
                                <span>上映日期：</span>
                                <span class="o-s">{{movieInfos.pubdates.join(' / ')}}</span>
                            </p>
                            <p>
                                <span>片长：</span>
                                <span class="o-s">{{movieInfos.durations[0]}}</span>
                            </p>
                        </div>
                        <div id="interest_sectl">
                            <div class="rating_wrap">
                                <div class="rating_logo">豆瓣评分</div>
                                <div class="rating_self">
                                    <strong class="rating_num">
                                        {{movieInfos.rating.average}}
                                    </strong>
                                    <div class="rating_sum">
                                        {{movieInfos.ratings_count}}人评价
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
                <div class="related-info">
                    <p>{{movieInfos.title}}的剧情简介 · · · · · ·</p>
                    <div class="indent">
                        <span>
                            
                                　　{{movieInfos.summary}}
                        </span>
                    </div>
                </div>
                <div class="comments-section">
                    <div class="mod-hd">
                        <h2>
                            <i>贞德的短评</i>
                            
              · · · · · ·
                            <span>(全部 396 条)</span>
                        </h2>
                    </div>
                    <movie-comment-list :popular_reviews="movieInfos.popular_reviews"></movie-comment-list>
                </div>
            </div>
        </a-layout-content>
    </div>
</template>
<script>
import MovieCommentList from '~/components/MovieCommentList'
export default {
    components:{
        MovieCommentList
    },
    validate({params}){
        return /^\d+$/.test(params.id)
    },    

    async asyncData({app,params}){
        try {
            let {data} = await app.$axios.get(`/v2/movie/subject/${params.id}?apikey=0b2bdeda43b5688921839c8ecb20399b`)
            app.dealNamesToStr(data,data.directors,'dirName');
            app.dealNamesToStr(data,data.writers,'writeName');
            app.dealNamesToStr(data,data.casts,'castName');

            console.log('data:',data.popular_reviews);
            return {
                movieInfos: data
            }

        } catch (error) {
            throw new Error(error);
        }
    }
}
</script>
<style lang="less" scoped>
    h1{
        word-wrap: break-word;
        display: block;
        font-size: 25px;
        font-weight: bold;
        color: #494949;
        margin: 0;
        padding: 0 0 15px 0;
        line-height: 1.1;
        .movie-year{
            color: #888;
            display: inline-block;
            zoom: 1;
        }
    }
    .movie-infos{
        display: flex;
    }
    .movie-img{
        margin-right: 15px;
        text-align: center;
        max-width: 155px;
        overflow: hidden;
        // margin-left: -8px;
        img{
            max-width: 135px;
            margin-bottom: 10px;
        }
    }
    .movie-info{
        p{
            margin: 0;
            padding: 0;
            color: #666;
            font-size: 12px;
            .info-active{
                color: #37a;
            }
            .o-s{
                color: #000;
                font-weight: 600;
            }
        }
    }
    #interest_sectl {
        margin: 2px 0 0 22px;
        padding: 0 0 0 15px;
        border-left: 1px solid #eaeaea;
        color: #9b9b9b;
    }
    #interest_sectl .rating_wrap {
        padding-bottom: 15px;
        font-size: 12px;
        line-height: 14px;
    }
    .rating_self{
        display: flex;
        align-items: center;
        padding: 0;
        line-height: 2;
        .rating_num{
            color: #494949;
            padding: 0;
            min-width: 30%;
            font-size: 28px;
        }
        .rating_sum{
            color: #37a;
            margin-left: 10px;
        }
    }
    .related-info{
        margin-top: 20px;
        color: #007722;
    }
    .indent{
        word-break: normal;
        word-wrap: break-word;
        margin-bottom: 30px;
        color: #111;
    }
    .comments-section{
        margin-bottom: 30px;
        .mod-hd{
            margin-top: 16px;
            overflow: hidden;
        }
        h2{
            color: #007722;
            font-size: 16px;
            i{
                font-style: normal;
            }
        }
        span{
            color: #37a;
        }
    }
</style>
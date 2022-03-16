<template>
    <div class="icons">
        <swiper>
            <swiper-slide v-for="(page,index) of pages" v-bind:key="index">
                <div class="icon" v-for="item in page" :key="item.id">
                    <div class="icon-img">
                        <img class="icon-img-content" :src="item.imgUrl" alt=""/>
                    </div>
                    <p class="icon-desc">{{item.desc}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
    export default {
        name:"HomeIcons",
        // props:{ 
        //     list:Array
        // },
        data(){
            return{
                iconList:[{
                    id:'0001',
                    imgUrl:'1',
                    desc:'一日游'
                },{
                    id:'0002',
                    imgUrl:'2',
                    desc:'滑雪季'
                },{
                    id:'0003',
                    imgUrl:'3',
                    desc:'动物园'
                },{
                    id:'0004',
                    imgUrl:'4',
                    desc:'植物园'
                },{
                    id:'0005',
                    imgUrl:'5',
                    desc:'一日游'
                },{
                    id:'0006',
                    imgUrl:'6',
                    desc:'滑雪季'
                },{
                    id:'0007',
                    imgUrl:'7',
                    desc:'动物园'
                },{
                    id:'0008',
                    imgUrl:'8',
                    desc:'植物园'
                },{
                    id:'0009',
                    imgUrl:'9',
                    desc:'植物园'
                }]
            }
        },
        computed:   {
            pages(){
                const pages = [];
                this.iconList.forEach((item,index)=>{
                    const page = Math.floor(index/8)
                    if(!pages[page]){
                        pages[page] = []
                    }
                    pages[page].push(item)
                })
                return pages 
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl';
    @import '~styles/mixins.styl';
    .icons >>> .swiper-container
        height 0 
        padding-bottom 50%
    .icons
        margin-top .1rem
        .icon 
            position relative
            overflow hidden
            float left
            width 25%
            height 0
            padding-bottom 25%
            .icon-img
                position absolute
                top 0 
                bottom .44rem
                right 0
                left 0
                padding .3rem
                box-sizing content-box
                .icon-img-content
                    width 50px
                    display block
                    margin 0 auto
            .icon-desc
                position absolute
                left 0
                right 0
                bottom 0
                height .44rem
                line-height .44rem
                text-align center
                color $darkTextColor
                ellipsis()

</style>
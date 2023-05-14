<template>
 <footer>
    <a v-for="(item,index) in imageList" :key="index" :href="item.path">
        <img :src="item.imgUrl" alt="" @click="switchFooter(item.path)">
    </a>
 </footer>


</template>

<script >

export default{
    data (){
        return{
            imageList:[
                {
                    id:1,
                    imgUrl:'../../public/images拷貝/facebook.svg',
                    path:'https://www.facebook.com/profile.php?id=100000481301931'
                },
                {
                    id:2,
                    imgUrl:'./../public/images拷貝/instagram.svg',
                    path:'https://www.instagram.com/ren0113___/'
                },
                {
                    id:3,
                    imgUrl:'./../public/images拷貝/github-brands 1.svg',
                    path:'https://github.com/x7368907'
                },
            ]
        }
    },
    methods:{
        switchFooter(path){
         this.$router.replace(path);
        }
    }
}
</script>

<style scoped lang="scss">
footer{
    a{
        padding: 1rem;
    }
}

</style>

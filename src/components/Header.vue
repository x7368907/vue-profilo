<template>
 <nav class="navbar">
    <ul>
        <li v-for="(item,index) in routerList" :key="index" :class="{active: $route.path === item.path}" @click="switchHeader(item.path)">
            <a>{{ item.title }}</a>
        </li>
    </ul>
 </nav>
</template>

<script >
export default{
    data(){
        return{
            routerList:[
                {
                title:'首頁',
                path:'/Home'
            },
            {
                title:'我的履歷',
                path:'/Second',
            },
            {
                title:'聯絡方式',
                path:'/Third',
            }
        ]
        }
    },
    methods:{
        switchHeader(path){
            if(this.$route.path === path) return;
            this.$router.replace(path);
        }
    }
}
</script>

<style scoped lang="scss">
.navbar{
    width:100%;
    ul{
        padding: 2rem;
        width: 70%;
        display:flex;
        list-style-type: none;
        justify-content: space-around;
        li{
            font-size: 1.75rem;
            a{
                color:black;
                text-decoration: none;
                cursor: pointer;
            }
            a:hover{
                color:#498cca
            }
        }
    }
}

@media(max-width:1100px){
    .navbar{
        ul{
            flex-direction: column;
            width: 100%;
            li{
                padding: 1rem 0rem;
                border-bottom: 2px solid gray;
            }
        }
    }
}

</style>

<template>
 <Header></Header>
<main>
    <section class="table">
        <table>
            <tr v-for="(item,index) in List" :key="index" style="border-top:2px solid gray ;">
                <td style="width: 20%;">{{ item.title }}</td>
                <td style="width: 80% ;">
                    <template v-if="item.title === '工作經歷' || item.title === '語言'">
                       
                          <li  v-for="(job,jobIndex) in item.content" :key="jobIndex" class="num">{{ job.name }}</li>
                                         
                    </template>
                    <template v-else>
                        {{ item.content }}            
                    </template>
                    <template v-if="item.title === '前端' || item.title ==='後端'">
                        <template v-for="(img,imgIndex) in item.image" :key="imgIndex">
                            <img :src="img.imageUrl" alt="">
                        </template>    
                    </template>
                    <template v-if="item.title === '開發經驗'">
                            <li v-for="(exp,expIndex) in item.main" :key="expIndex">
                                {{ exp.experience }}
                            </li>
                    </template>
                    
                </td>
            
            </tr>
        </table>
    </section>
    <section class="picture">
            <img src="../../public/images拷貝/S__67117061.jpg" alt="">
            <div class="bluerect"></div>
        </section>
</main>

<Footer></Footer>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
export default{
    name:'Second',
    data(){
        return{
            List:[
                {
                    title:'自我簡介',
                    content:'對於網頁開發擁有濃厚興趣，並熱愛學習的前端開發者，具有1年左右經驗，專注於開發和維護具有高互動性的網站。熟練掌握HTML、CSS、JavaScript，並擅長使用Vue前端框架。對寫出高維護性的程式碼充滿熱忱，致力於不斷學習最佳實踐並提升技能水平。'
                },
                {
                    title:'學歷',
                    content:'海軍官校二專班 航海科'
                },
                {
                    title:'工作經歷',
                    content:[
                        {
                            name:'前端工程師'
                        },
                        {
                        name:'巧新科技技術員'
                    },
                    {
                        name:'海軍志願役'
                    }]

                },
                {
                    title:'語言',
                    content:[
                        {
                            name:'中文:精通'
                        },{
                            name:'英文:略懂'
                        }
                    ]
                },
                {
                    title:'前端',
                    image:[
                        {
                            imageUrl:'../../public/images拷貝/icons8-html-5.svg',
                        },
                        {
                            imageUrl:'../../public/images拷貝/icons8-css3.svg',
                        },
                        {
                            imageUrl:'../../public/images拷貝/icons8-javascript.svg',
                        },
                        {
                            imageUrl:'../../public/images拷貝/jquery.svg',
                        },
                        {
                            imageUrl:'../../public/images拷貝/vuejs.svg',
                        },
                    ]
                },
                {
                    title:'後端',
                    image:[
                        {
                            imageUrl:'../../public/images拷貝/icons8-git-480.svg',
                        },
                        {
                            imageUrl:'../../public/images拷貝/node-js-svgrepo-com.svg',
                        },
                        {
                            imageUrl:'../../public/images拷貝/ejs-svgrepo-com.svg',
                        },
                        {
                            imageUrl:'../../public/images拷貝/mysql-svgrepo-com.svg',
                        },
                        {
                            imageUrl:'../../public/images拷貝/mongodb-svgrepo-com.svg',
                        },
                    ]
                },
                {
                    title:'開發經驗',
                    main:[
                        {
                            experience:'活動網站開發'
                        },
                        {
                            experience:'物流Web app開發'
                        }
                    ]
                },

            ]
        }
    },
    components:{
        Header,
        Footer,
    },

}
</script>

<style scoped lang="scss">
main{
    display:flex;
    flex-wrap: wrap;
    section.table{
        flex:3 1 500px;
        padding: 2rem;
        table{
            border-collapse: collapse;
            tr{               
                border-bottom: 2px solid gray;
                transition: 0.2s all ease;
                td{
                padding: 1rem;
                }
                &:hover{
                    background-color: #98c8f4;
            }
        }
    }
}
    section.picture{
        flex:1 1 600px;
        position: relative;
        img{
            width: 30vw;
            }
            .bluerect{
                width: 30vw;
                height: 70vh;
                background-color: #498cca;
                position: absolute;
                top: 30px;
                left: 80px;
                z-index: -1;
    }
}

.num{
    list-style-type: decimal;
}



}
@media(max-width:1100px){
    section.picture{
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            width: 50vw;
        }
        .bluerect{
            display: none;
        }
    }
}


</style>

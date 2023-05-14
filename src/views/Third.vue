<template>
    <Header></Header>
    <main>
        <section class="form">
            <form>
               
                    <div v-for="(item,index) in List" :key="index">
                    <label for="name">{{ item.title }}</label>
                    <input :type="item.name" :name="item.name" v-if="item.title ==='姓名:' || item.title ==='郵件:' || item.title === '電話:'">
                    <textarea v-else :name="item.name" :id="item.name" rows="10"></textarea>
                </div>
                <button type="submit">提交表單</button>               
            </form>
        </section>
        <div class="line"></div>
        <section class="contact">
            <div class="content">
                <h2 v-for="(self,selfIndex) in selfList" :key="selfIndex">
                {{ self.content }}
                </h2>
            </div>
        </section>
    </main>
    <Footer></Footer>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
export default {
    name:'Third',
    data(){
        return{
            List:[
                {
                    title:'姓名:',
                    name:'name'
                },
                {
                    title:'郵件:',
                    name:'email'
                },
                {
                    title:'電話:',
                    name:'phone'
                },
                {
                    title:'需求:',
                    name:'need'
                }
            ],
            selfList:[
                {
                    content:'我的電話:0917-882-196'
                },
                {
                    content:'我的E-mail:x7368907@gmail.com'
                },
                {
                    content:'方便聯絡時間：週一至週六早上8點至晚上7點'
                },
                {
                    content:'其他聯絡方式：FB 、ig、 Line'
                },
            ]
        }
    },
    components:{
        Header,
        Footer,
    }
}
</script>

<style scoped lang="scss">
main{
    display:flex;
    flex-wrap: wrap;
    section.form{
        flex:1 1 600px;
        form{
            display:flex;
            flex-direction: column;
            min-height: 70vh;
            justify-content: space-around;
            padding: 1.5rem;
        }
        div{
            margin: 0.5rem;
            label{
                font-size: 1.5rem;
                margin-right: 1rem;
            }
            input,textarea{
                background-color: #98c8f4;
                color:#fff;
                font-size:1.25rem;
                padding: 0.5rem 0.25rem;
                border:none;
                width: 90%;
            }
            textarea{
                vertical-align: top;
            }

        }
        button{
            align-self: center;
            background-color: #498cca;
            color:#fff;
            border:none;
            cursor: pointer;
            padding: 0.75rem 1.5rem;
            font-size: 2rem;
            border-radius: 10px;
        }
    }
    div.line{
        background-color: gray;
        width: 3px;
    }
    section.contact{
        flex: 1 1 500px;
        display: flex;
        align-items: center;
        padding: 2rem;
        div.content{
            h2{
                margin: 1rem 0rem;
               
            }
        }
    }
}


</style>
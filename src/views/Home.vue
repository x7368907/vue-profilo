<template>
  <Animation></Animation>  
 <img class="blue" src="../../public/images/blueBackground 1.png" alt="">   
<Header></Header>    
<main>
<section class="left">
    <h1>Hi,I am<br>
        Lee Ren    
    </h1>
    <p>
        對於網頁開發擁有濃厚興趣，並熱愛學習的前端開發者，具有1年左右經驗，專注於開發和維護具有高互動性的網站。熟練掌握HTML、CSS、JavaScript，並擅長使用Vue前端框架。對寫出高維護性的程式碼充滿熱忱，致力於不斷學習最佳實踐並提升技能水平。
    </p>
</section>
<section class="right">
<img class="mypicture" src="../../public/images/S__67117060.jpg" alt="picture">
</section>
</main>
<Footer></Footer>
</template>


<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Animation from '../components/Animation.vue';

export default{
    name:'Home',
    components:{
        Header,
        Footer,
        Animation,
    }
}
</script>

<style scoped lang="scss">
.blue{
    position: absolute;
    top:-10vh;
    right: 0;
    z-index: -1;
    width: 55vw;
    height: 150vh;
}
main{
    display: flex;
    flex-wrap: wrap;
    section.left{
        flex:3 1 500px;
        padding: 2rem;
        h1{
            font-size: 4rem;
            color:#498cca
        }
        p{
            font-size: 1.5rem;
            padding: 1rem 0rem;
        }
    }
    section.right{
        flex:1 1 600px;
        position: relative;
        img{
            border-radius: 50%;
            width: 20vw;
            height: 20vw;
            position: absolute;
            top: 50vh;
            right: 25vw;
            transform: translateY(-50%);
        }
    }
}

@media(max-width:1100px){
    .blue{
        opacity: 0.5;
    }
    main{
        section.right{
            display: flex;
            justify-content: center;
            align-items: center;
            img{
                position: static;
                transform: none;
                height: 50vw;
                width: 50vw;
                margin: 1rem;
            }
        }
    }
}
</style>

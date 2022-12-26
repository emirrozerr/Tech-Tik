<script>

</script>

<template>
    <section id="home-products-section">
            <div class="container home-products-section-container">
                <div class="home-products-section-text">
                    <h2>
                        {{$route.params.category == "EvveKırtasiye" ? "Ev ve Kırtasiye" : ($route.params.category =="BebekveOyuncak" ?  "Bebek ve Oyuncak" : $route.params.category)}}
                         <span>Products</span></h2>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected randomised words which don't look even slightly believable</p>
                </div>
            </div>
            <div class="home-products">
                    <div class="container home-products-card padding" >
                        
                        <b-card
                        v-for="product in this.data.urunler" :key="product.urunID" 
                        v-if="(product.urunKategorisi.replace(/\s+/g, '') == $route.params.category) || ($route.params.category === allProducts) "
                        style="max-width: 21rem;min-height:400px;" class=" mt-0 border-0 shadow padding"
                        >

                        <b-card-header header-bg-variant="danger" style="color:white;" v-if="product.kampanyalar.length" >Kampanyalı ürün: &nbsp&nbsp
                            <span>{{product.kampanyalar.join("")}}</span>
                        </b-card-header>

                        <b-card-img
                        :src="product.urunFotograflari[0]"
                        >
                        </b-card-img>

                        <b-card-title class="text-center fs-3">
                        {{product.urunAdi}}
                        </b-card-title>

                        <b-card-body  class="fw-light fst-italic padding">
                            {{product.urunAciklamasi}}
                        </b-card-body>
                            <div class="d-flex justify-content-center flex-column align-items-center padding">
                                <span class="fs-5 mt-2 mb-4 text-muted">{{ USDollar.format(product.urunFiyati) }}</span>
                                <b-button href="#" variant="outline-success" class="rounded-4 p-2">Ürüne git</b-button>
                            </div>
                        </b-card>

                    
                    </div>
            </div>
    </section>
</template>
<script>
import Vue from "vue"
export default {
    data() {
      return {
        data: [],
        allProducts: "allProducts",
        USDollar: new Intl.NumberFormat('tr-TR', {
            style: 'currency',
            currency: 'TRY',
        }),
      }
    },
    methods: {
        async getData() {
        const res = await fetch("http://139.59.156.77/test.json");
        const finalRes = await res.json();
        this.data = finalRes;
        console.log(this.data)
      },
    },
    created(){
        this.getData()
        console.log(this.$route.params.category)
    }
}


</script>
<style scoped>
p{
    margin-top: 20px;
    color: rgb(0, 0, 0);
    font-size: 1.2rem;
    line-height: 2rem;
}
h2{
    font-weight: 700 !important;
    font-size: 3rem;
}
h2 span{
    color: #136AF8;
    
}
.padding{
    padding: 0;
}
</style>
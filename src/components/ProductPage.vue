<script>

</script>

<template>
    <section>
        <div>
            <b-card class="overflow-hidden" >
                <b-row no-gutters>
                <b-col md="6">
                    <b-carousel
                        id="carousel-no-animation"
                        style="text-shadow: 0px 0px 2px #000;"
                        no-animation
                        controls
                        indicators
                        img-width="1024"
                        img-height="480"
                    >
                        <b-carousel-slide
                        :img-src="product.urunFotograflari[0]"
                        ></b-carousel-slide>
                        <b-carousel-slide 
                        v-if="product.urunFotograflari[1]"
                        :img-src="product.urunFotograflari[1]"
                        ></b-carousel-slide>
                        <b-carousel-slide
                        v-if="product.urunFotograflari[2]"
                        :img-src="product.urunFotograflari[2]"
                        ></b-carousel-slide>
                    </b-carousel>
                </b-col>
                <b-col md="6">
                    <b-card-header header-bg-variant="danger" style="color:white;" v-if="product.kampanyalar.length" >Kampanyalı ürün: &nbsp&nbsp
                            <span>{{product.kampanyalar.join("")}}</span>
                        </b-card-header>
                    <b-card-body :title="product.urunAdi">
                    <b-card-text>
                    {{ product.urunAciklamasi}}
                    </b-card-text>
                    <b-col class="product" style="height: 100%;" >
                        <div class="fs-5 mt-2 mb-4 text-muted">{{ USDollar.format(product.urunFiyati) }}</div>
                        <b-button style="max-width: 450px;" href="/basket" variant="outline-warning" class="rounded-4 p-2">Sepete Ekle</b-button>
                    </b-col>
                    <b-col class="garanti">
                        <b-card  style="max-width: 250px;">
                        <b-card-header>Garanti</b-card-header>
                        <b-card-body>Türü: {{product.garanti.turu}}
                            <br/>
                            Süresi: {{product.garanti.sure}}
                        </b-card-body>
                    </b-card>
                    </b-col>
                    
                    </b-card-body>
                    
                    
                </b-col>
                </b-row>
  </b-card>
</div>
               
    </section>
</template>
<script>
import Vue from "vue"
export default {
    data() {
      return {
        data: [],
        product: null,
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
        //query products by id
        for (let index = 0; index < this.data.urunler.length; index++) {
            if(this.data.urunler[index].urunID ===  Number(this.$route.params.id)){
                this.product = this.data.urunler[index]
            }   
        }
        console.log(this.product)
      },
    },
    created(){
        this.getData()
        
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
.product-page{
    width: 100%;
}
.garanti{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}
.product{
    display: flex;
    flex-direction: column;
}
</style>
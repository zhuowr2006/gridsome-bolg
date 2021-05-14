<template>
  <Layout>
  <!-- Main Content -->
  <div class="container" style="margin-top: 100px;">
    <div class="row">
      <div class="col-lg-8 col-md-10 mx-auto">
        <div style="padding: 4rem 0;text-align: center;color: #000;"><h1 data-v-da896d1e="" style="font-size: 3rem;font-weight: 700;padding: 0;margin: 0;" >
        Simplicity.<br/> Aesthetics. Value.
      </h1></div>
      <div style="text-align: center;color: #000;"><h1 data-v-da896d1e="" style="font-size: 1.15em;font-weight: 400;line-height: 1.68;opacity: .6;" >
       Hi there, I'm an independent Digital Designer & Art<br/> Director focused on digital design for brands that like to have fun.
      </h1></div>
      
      <div class="post-preview" v-for="edge in $page.newList.edges" :key="edge.node.id">
         <img :src="getImg(edge)" alt="" style="width: 100%;">
         <h3 class="post-title" style="font-size: 1rem;">
              {{ edge.node.title }}
            </h3>
          <div class="post-title" style="font-size: 0.8rem;margin-bottom: 10px;">
              {{ edge.node.subtitle }}
            </div>
          
          <!-- <g-link :to="'/journal/'+ edge.node.id">
            <h2 class="post-title">
              {{ edge.node.title }}
            </h2>
          </g-link>
          <p class="post-meta">{{edge.node.subtilte}}
            <p>
             -->
             <!-- <hr> -->
        </div>
    </div>
    </div>
  </div>
  </Layout>
</template>

<page-query>
query{
  newList:allStrapiCoverlist{
  edges{
    node{
      id
      title
      subtitle
  		img{
        url
      }
    }
  }
}
}

</page-query>

<script>
import { Pager } from 'gridsome'
export default {
  name:'HomePage',
  metaInfo: {
    title: 'Hello, world!'
  },
  components: {
    Pager
  },
   methods:{
     getImg(edge){
      //  +
      let host=this.GRIDSOME_API_URL
      if(process.env.NODE_ENV === 'production'){//本地，直接使用服务器地址
        host='/backend'
      }
      return edge.node.img?host+edge.node.img.url:''
    }
  }
}
</script>

<style>
</style>

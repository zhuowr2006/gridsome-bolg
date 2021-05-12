<template>
  <Layout>
  <article>
    <div class="container" style="margin-top: 100px;">
      <div class="row">
        <h1 class="col-lg-8 col-md-10 mx-auto" style="letter-spacing: -.01em;font-size: 4rem;margin: 0 0 4rem;padding: 0;" >{{$page.post.title}}</h1>
        <div class="col-lg-8 col-md-10 mx-auto" v-html="mdToHtml($page.post.content)">
        </div>
        <div class="col-lg-8 col-md-10 mx-auto" >
          <img :src="GRIDSOME_API_URL+getImg()" alt="" style="width: 100%;">
        </div>
      </div>
    </div>
  </article>
  </Layout>
</template>

<page-query>
query($id: ID!){
  post: strapiJournalList(id:$id){
    id
    title
    subtilte
    content
    img{
      url
    }
  }
}
</page-query>
<script>
import MarkdownIt from 'markdown-it'
const md = new MarkdownIt()
export default {
  name:'PostPage',
  methods:{
    mdToHtml(markdown){
      return md.render(markdown)
    },
     getImg(){
      return this.$page.post.img?this.$page.post.img.url:''
    }
  },
  mounted(){
    console.log('tttt',this.getImg());
  }
}

</script>

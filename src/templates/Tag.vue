<template>
  <!-- <div class="Tag">
    <h1>Tag Page</h1>
  </div> -->
   <Layout>
  <!-- Page Header -->
  <header class="masthead" style="background-image: url('/img/home-bg.jpg')">
    <div class="overlay"></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <div class="site-heading">
            <h1># {{ $page.tag.title }}</h1>
          </div>
        </div>
      </div>
    </div>
  </header>
  <!-- Main Content -->
  <div class="container">
    <div class="row">
      <div class="col-lg-8 col-md-10 mx-auto">
        <div class="post-preview" v-for="post in $page.tag.posts" :key="post.id">
          <g-link :to="'/post/'+ post.id">
            <h2 class="post-title">
              {{ post.title }}
            </h2>
          </g-link>
          <!-- <p class="post-meta">Posted by
            <a href="#">Start Bootstrap</a>
            on September 24, 2019</p>
            <p>
              <span v-for="tag in edge.node.tags" :key="tag.id">
                <g-link :to="'/tag/'+tag.id">{{tag.title}}</g-link>
                &nbsp;&nbsp;
              </span>
              
            </p> -->
            <hr>
        </div>
        <hr>
        <!-- Pager -->
        <!-- <Pager :info="$page.posts.pageInfo"/> -->
        <!-- <div class="clearfix">
          <a class="btn btn-primary float-right" href="#">Older Posts &rarr;</a>
        </div> -->
      </div>
    </div>
  </div>
  </Layout>
</template>
<page-query>
query($id: ID!){
  tag: strapiTag(id:$id){
    id
    title
    posts{
      id
      title
    }
 }
}
 </page-query>
<script>
export default {
  name: 'Tag',
  components: {},
  data () {
    return {
    }
  }
}

</script>
<style lang='scss' scoped>
</style>

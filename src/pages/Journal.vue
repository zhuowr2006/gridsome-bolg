<template>
  <Layout>

  <!-- Main Content -->
  <div class="container" style="margin-top: 100px;">
    <div class="row">
      <div class="col-lg-8 col-md-10 mx-auto">
        <div style="padding: 4rem 0;text-align: center;color: #f3f3f3;"><h1 data-v-da896d1e="" style="font-size: 3rem;font-weight: 700;padding: 0;margin: 0;" >
        a wise person once said...
      </h1></div>

        <div class="post-preview" v-for="edge in $page.newList.edges" :key="edge.node.id">
          <g-link :to="'/journal/'+ edge.node.id">
            <h2 class="post-title">
              {{ edge.node.title }}
            </h2>
          </g-link>
          <p class="post-meta">{{edge.node.subtilte}}
            <p>
            <hr>
        </div>
      </div>
    </div>
  </div>
  </Layout>
</template>

<page-query>
query{
  newList:allStrapiJournalList{
  edges{
    node{
      id
      title
      subtilte
    }
  }
}
}

</page-query>

<script>
// import { Pager } from 'gridsome'
export default {
  name:'Journal',
  metaInfo: {
    title: 'Hello, world!'
  },
  components: {
    // Pager
  },
  computed:{
    // general(){
    //   return this.$page.general.edges[0].node
    // }
  }
}
</script>

<style>
</style>

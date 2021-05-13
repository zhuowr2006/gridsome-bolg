// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: './posts/**/*.md',//文件的路径
        typeName: 'markdownPost',
        remark: {
          //Config options can be added here
        }
      }
    },
    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: process.env.GRIDSOME_API_URL,
        queryLimit: 1000, // Defaults to 100
        contentTypes: ['post','tag','journal-list','coverlist'],//查询的类型,拿取集合
        typeName:'Strapi',
        singleTypes: ['general'],//获取单个节点的
        // Possibility to login with a Strapi user,
        // when content types are not publicly available (optional).
        // loginData: {
        //   identifier: '',
        //   password: ''
        // }
      }
    }
  ],
  transformers: {
    remark: {
      //Config options can be added here
    }
  },
  templates:{
    StrapiPost:[//这个名称是上面gridsome插件typeName+contentTypes,是可以修改
      {
        path:'/post/:id',
        component:'./src/templates/Post.vue'
      }
    ],
    StrapiTag:[
      {
        path:'/tag/:id',
        component:'./src/templates/Tag.vue'
      }
    ],
    StrapiJournalList:[
      {
        path:'/journal/:id',
        component:'./src/templates/JournalContent.vue'
      }
    ]
  }
}

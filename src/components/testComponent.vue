<template>
    <div class="test">
        <p>{{ posts }}</p>
        <h1>This Test component</h1>
        <p class="error" v-if="error">{{error}}</p>
        <div class="posts" v-for=" post in posts"
        v-bind:item="post"
        v-bind:key="post.id">
            <p class="text" >{{post.title}}</p>
        </div>
    </div>
</template>
<script>
import TestService from "../services/testService";
export default {
  name: "TestComponent",
  data(){
      return{
        posts: [],
        error: '',
        text: '',
      }
  },
    async created() {
        try{
            this.posts = await TestService.getPosts();
            var jock = this.posts
            for(var index = 0;index < this.posts.length; index++){
                this.posts = jock[index]
            }
        }catch(err){
            this.error = err.message;
            console.log(this.error);
        }
    },
};
</script>
<style lang="sass" scoped>

</style>
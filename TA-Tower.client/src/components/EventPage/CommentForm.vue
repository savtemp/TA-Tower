<template>
  <form class="row justify-content-end" action="" @submit.prevent="handleSubmit">
      <textarea class="form-control" name="body" id="" cols="30" rows="5" placeholder="Tell the people ..." v-model="editable.body"></textarea>
    <div class="col-3 my-3">
      <button class="btn btn-success" type="submit">Post Comment</button>
    </div>
  </form>

</template>

<script>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { commentsService } from '../../services/CommentsService.js';
import Pop from '../../utils/Pop.js';


export default {
  setup() {
    const editable = ref({})
    const route = useRoute()
    
    return {
      editable,

      async handleSubmit(){
        try {
          editable.value.eventId = route.params.id
          await commentsService.createComment(editable.value)
          editable.value = {}
          Pop.toast('Created A Comment!', 'success')
        } catch (error) {
          console.error(error)
         // @ts-ignore 
          Pop.error(('[CREATE COMMENT]'), error.message)
        }
      }
    }
  }
}
</script>

<style>

</style>
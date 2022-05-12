<template>
  <form @submit.prevent="handleSubmit">
    <h4>Create new playlist</h4>
    <input
      type="text"
      placeholder="Playlist title"
      required
      v-model="title"
    >
    <textarea
      placeholder="Playlist description..."
      required
      v-model="description"
    ></textarea>
    <label>Upload playlist cover image</label>
    <input type="file" @change="handleChange">
    <div class="error">{{ fileError }}</div>
    <button>Create</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import useStorage from '@/composables/useStorage'

export default {
  setup() {
    const { filePath, url, uploadImage } = useStorage()
    const title = ref('')
    const description = ref('')
    const file = ref(null)
    const fileError = ref(null)
    const handleSubmit = async () => {
      if (file.value) {
        await uploadImage(file.value)
        console.log('image uploaded, url: ', url.value)
      }
    }
    // allowed file types
    const types = ['image/png', 'image/jpeg']
    const handleChange = (e) => {
      let selected = e.target.files[0]
      console.log(selected)
      if (selected && types.includes(selected.type)) {
        file.value = selected
        fileError.value = null
      } else {
        file.value = null
        fileError.value = 'Please select an image file (png or jpg)'
      }
    }
    
    return { title, description, handleSubmit, fileError, handleChange }
  }
}
</script>

<style>
form {
  background: white;
}
input[type="file"] {
  border: 0;
  padding: 0;
}
label {
  font-size: 12px;
  display: block;
  margin-top: 30px;
}
button {
  margin-top: 20px;
}
</style>
<template>
  <div class="navbar">
    <nav>
      <img src="@/assets/ninja.png" alt="lil ninja">
      <h1>
        <router-link :to="{ name: 'home' }">Muso Ninjas</router-link>
      </h1>
      <div class="links">
        <div v-if="user">
          <router-link :to="{ name: 'createPlaylist' }">Create Playlist</router-link>
          <button @click="handleClick">Log out</button>
        </div>
        <div v-else>
          <router-link class="btn" :to="{ name: 'signup' }">Sign up</router-link>
          <router-link class="btn" :to="{ name: 'login' }">Log in</router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import useLogout from '@/composables/useLogout'
import getUser from '@/composables/getUser'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const { user } = getUser()
    const { logout } = useLogout()
    const router = useRouter()

    const handleClick = async () => {
      await logout()
      console.log('user logged out')
      router.push({ name: 'login' })
    }

    return { handleClick, user }
  }
}
</script>

<style scoped>
.navbar {
  padding: 16px 10px;
  margin-bottom: 60px;
  background: white;
}
nav {
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}
nav img {
  max-height: 60px;
}
nav h1 {
  margin-left: 20px;
}
nav .links {
  margin-left: auto;
}
nav .links a, button {
  margin-left: 16px;
  font-size: 14px;
}
</style>
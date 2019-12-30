<template>
  <div class="home">
    <header>
      <h2>My Guitar Pin Collection</h2>
      <PinItemList></PinItemList>
    </header>
  </div>
</template>

<script>
// @ is an alias to /src
import PinItemList from '@/components/PinItemList'

export default {
  name: 'home',
  components: {
    PinItemList
  }
}
</script>

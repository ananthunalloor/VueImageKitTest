<template>
  <div class="test">
    <h1>This is an test page</h1>
    <TestComponent/>
  </div>
</template>
<script>
 import TestComponent from '@/components/testComponent.vue';

export default {
    name: "Test",
    components: {
    TestComponent
  }
}
</script>
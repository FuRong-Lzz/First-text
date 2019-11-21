<template>
	<div id="tab-bar">
    <slot></slot>
	</div>
</template>
<script>
export default {
  name: 'TabBar',
}
</script>
<style scoped>
  #tab-bar {
    display: flex;
    background-color: #f2f2f2;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 9;
  }
</style>

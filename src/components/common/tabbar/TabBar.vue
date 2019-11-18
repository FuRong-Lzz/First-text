<template>
	<div id="tab-bar">
    <slot></slot>
	</div>
</template>
<script>
export default {
  name: 'TabBar',
  data(){
  	return{

  	}
  },
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
  }

</style>

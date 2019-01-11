<template>
    <button @click="popupClicked">{{title}}</button>    
</template>
<script>
export default {
    props: ['title'],
    methods:{
        popupClicked() {
            alert('Popup Clicked!');
        }
    }
}
</script>


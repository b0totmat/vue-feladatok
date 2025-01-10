<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

onMounted(() => {
    useRouter().push('/tasks')
})

</script>

<template>
</template>

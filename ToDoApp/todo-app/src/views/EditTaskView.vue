<template>
    <div class="container">
        <form>
            <div class="mb-3">
                <label for="task-name" class="form-label">Új név:</label>
                <input type="text" class="form-control" id="task-name" v-model="title">
            </div>
            <div class="mb-3">
                <label for="task-description" class="form-label">Új leírás:</label>
                <textarea class="form-control" id="task-description" v-model="desc"></textarea>
            </div>
            <div class="mb-3">
                <label for="task-deadline" class="form-label">Határidő:</label>
                <input type="date" class="form-control" id="task-deadline" v-model="deadline">
            </div>
            <button type="submit" class="btn btn-primary" @click="modify">Módosítás</button>
        </form>
    </div>
</template>
<script setup>
    import { ref } from 'vue'
    import { useTaskStore } from '@/stores/task'

    const title = ref()
    const desc = ref()
    const deadline = ref()

    const tasks = useTaskStore()
</script>
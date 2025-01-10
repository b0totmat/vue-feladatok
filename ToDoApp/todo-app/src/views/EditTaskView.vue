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
                <label for="task-isFinished" class="form-check-label">Kész-e:</label>
                <input type="checkbox" id="task-isFinished" class="form-check-input ms-2" v-model="isFinished">
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
    import { useRoute, useRouter } from 'vue-router'
    import { useTaskStore } from '@/stores/task'

    const title = ref()
    const desc = ref()
    const isFinished = ref()
    const deadline = ref()

    const id = useRoute().params.id,
          router = useRouter()
    const tasks = useTaskStore()

    const modify = (e) => {
        e.preventDefault()
        
        const newTask = {
            id: id,
            title: title.value,
            desc: desc.value,
            isFinished: isFinished.value,
            deadline: deadline.value
        }
        
        console.log(newTask)
        tasks.modifyTask(newTask)

        router.push('/tasks')
    }
</script>
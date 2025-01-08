<template>
    <div class="container">
        <form>
            <div class="mb-3">
                <label for="task-name" class="form-label">Új feladat neve:</label>
                <input type="email" class="form-control" id="task-name" v-model="title">
            </div>
            <div class="mb-3">
                <label for="task-description" class="form-label">Leírás:</label>
                <textarea class="form-control" id="task-description" v-model="desc"></textarea>
            </div>
            <div class="mb-3">
                <label for="task-deadline" class="form-label">Határidő:</label>
                <input type="date" class="form-control" id="task-deadline" v-model="deadline">
            </div>
            <button type="submit" class="btn btn-primary" @click="addTask">Hozzáadás</button>
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

    const addTask = (e) => {
        e.preventDefault()

        const newTask = {
            id: tasks.nextId,
            title: title.value,
            desc: desc.value,
            isFinished: false,
            deadline: deadline.value
        }

        console.log(newTask)
        tasks.tasks.push(newTask)
    }
</script>
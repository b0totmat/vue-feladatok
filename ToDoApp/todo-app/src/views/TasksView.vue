<template>
    <div class="container">
        <div class="tasks row">
            <div class="task col col-12 col-lg-3 col-md-6 border p-2 me-2 mb-2" v-for="task in tasks.tasks">
                <h5>{{ task.title }}</h5>
                <p class="text">{{ task.desc }}</p>
                <p class="text">Állapot: {{ task.isFinished ? "Kész" : "Nincs kész" }}</p>
                <p class="text text-danger">Határidő: {{ task.deadline }}</p>
                <a class="btn btn-primary" v-if="!task.isFinished" @click="tasks.finishTask(task.id)"><i class="fa-solid fa-check"></i></a>
                <a class="btn btn-warning" v-if="task.isFinished" @click="tasks.finishTask(task.id)"><i class="fa-solid fa-x"></i></a>
                <a class="btn btn-danger mx-1" @click="tasks.deleteTask(task.id)"><i class="fa-solid fa-trash"></i></a>
                <a class="btn btn-secondary" v-if="!task.isFinished" @click="redirect(task.id)"><i class="fa-solid fa-pen-to-square"></i></a>
            </div>
        </div>
    </div>
</template>
<script setup>
    import { useTaskStore } from '@/stores/task'
    import { useRouter } from 'vue-router'

    const router = useRouter()

    const tasks = useTaskStore()

    const redirect = (id) => {
        router.push(`/edittask/${id}`)
    }
</script>
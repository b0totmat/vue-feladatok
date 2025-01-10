<template>
    <div class="container">
        <ul class="list-group">
            <li v-for="task in tasks.tasks" class="list-group-item">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{{ task.title }}</h5>
                        <p class="card-text">{{ task.desc }}</p>
                        <p class="card-text">Állapot: {{ task.isFinished ? "Kész" : "Nincs kész" }}</p>
                        <p class="card-text text-danger">Határidő: {{ task.deadline }}</p>
                        <a class="btn btn-primary" @click="tasks.finishTask(task.id)"><i class="fa-solid fa-check"></i></a>
                        <a class="btn btn-danger mx-1" @click="tasks.deleteTask(task.id)"><i class="fa-solid fa-trash"></i></a>
                        <a class="btn btn-secondary" @click="redirect(task.id)"><i class="fa-solid fa-pen-to-square"></i></a>
                    </div>
                </div>
            </li>
        </ul>
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
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTaskStore = defineStore('task', () => {
  const tasks = ref([
    {
      id: 0,
      title: 'Bevásárlás',
      desc: 'Kell venni tejet, jégkockát, plasztik evőeszközöket a jövőheti ereszdelahajamhoz.',
      isFinished: false,
      deadline: '2024-01-10'
    },
    {
      id: 1,
      title: 'Állatorvos',
      desc: 'A kutyának egy hete megy a hasa, el kellene vinni állatorvoshoz.',
      isFinished: true,
      deadline: '2024-01-25'
    },
    {
      id: 2,
      title: 'Takarítás',
      desc: 'Hogy néz ki ez a lakás, te?! Vendégek mit fognak szólni?',
      isFinished: false,
      deadline: '2024-01-09'
    }
  ])
  function deleteTask(id) {
    const taskToDeleteIdx = tasks.value.findIndex(t => t.id === id)
    tasks.value.splice(taskToDeleteIdx, 1)
  }
  function finishTask(id) {
    const taskIdx = tasks.value.findIndex(t => t.id === id)
    tasks.value[taskIdx].isFinished = !tasks.value[taskIdx].isFinished
  }
  function addTask(task) {
    tasks.value.push(task)
  }
  function modifyTask(task) {
    let taskToModify = tasks.value.find(t => t.id === task.id)
    taskToModify.title = task.title
    taskToModify.desc = task.desc
    taskToModify.isFinished = task.isFinished
    taskToModify.deadline = task.deadline
  }

  const nextId = computed(() => tasks.value[tasks.value.length - 1].id + 1)

  return { tasks, deleteTask, finishTask, nextId, addTask, modifyTask }
})

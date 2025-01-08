import { ref } from 'vue'
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

  return { tasks, deleteTask, finishTask }
})

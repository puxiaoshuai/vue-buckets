import {reactive,watchEffect} from 'vue'
function useStorage(name){
  const  state = reactive({
    todolist:JSON.parse(localStorage.getItem(name)|| [])
  })
  watchEffect(()=>{
      localStorage.setItem(name,JSON.stringify(state.todolist))
  })
  return state
}
export default useStorage
import React, { useState, useEffect } from 'react'
import './App.css'
import List from './components/List'
import axios from 'axios'

interface AppProps {}

interface ListProps {
  id: number
  name: string
  status: number
}

const App:React.FC<AppProps> = () => {
  let [ list, setList ] = useState<ListProps[]>([])
  const fetchList = async () => {
    try {
      const {data:response} = await axios.get('http://localhost:8080/api/v1/tasks')
      setList(response)
      console.log(response)
    } catch (err) {
      console.error(err)
    }
  }
  useEffect(() => {
    fetchList()
  }, [])
  return (
    <>
      <div className='todo-list'>
        <div className='title'>
          Todo List
          <span>Get things done, one item at a time</span>
          <div className='divider'></div>
        </div>
        {list.length > 0 && <List list={list}/>}
      </div>
    </>
  )
}

export default App

import { DeleteFilled } from "@ant-design/icons"

interface TaskProps {
  id: number
  name: string
  status: number
}

function List(props:any):JSX.Element {
  const list:TaskProps[] = props.list
  return (
    <>
      <div className="tasks-list">
        {list.map(task => (
          <div className="detail" key={task.id}>
            <div className={task.status===1?'task-name done':'task-name'}>{task.name}</div>
            <div className="task-actions">
              <input type="checkbox" defaultChecked={task.status===1?true: false} />
              <DeleteFilled style={{fontSize: '16px'}} />
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default List
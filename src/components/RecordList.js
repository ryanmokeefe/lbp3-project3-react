import React  from 'react'
import {Link} from 'react-router-dom'
import '../css/RecordList.css'

const RecordList = (props) => {
  const records = props.records
  console.log(records)
  return (
    <div className='recrow'>
      <ul className='record-list-container'>
        {
          records.map((record, index) => {
            return (
              <Link className='reclink' to={{
                pathname: `/records/${record.name}`,
                state: {record: record}
              }}> 
                <li className='rec-list-li' key={index}>
                  <div className='image-wrap'>
                    <img className='img-item-list image' src={record.imageUrl} alt="cover"/>
                  </div>
                  <div>
                    <h2 className='title-list'>{record.name}</h2>
                  </div>
                </li>
              </Link>
            )
          })
        }
      </ul>
      <div>
        <button>
          <Link to='/records/add'>Add New Record</Link>
        </button>
      </div>
    </div>
  )
}

export default RecordList

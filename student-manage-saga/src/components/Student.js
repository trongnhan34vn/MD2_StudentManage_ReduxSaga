import React from 'react'
import { useDispatch } from 'react-redux'
import { actDeleteStudent, actSeenStudent } from '../redux/actions'

export default function Student(props) {
    const dispatch = useDispatch()
    const { student, stt } = props
    const handleSubmit = (student, action) => {
        if (action === 'seen') {
            dispatch(actSeenStudent({ student: student, action: 'SEEN' }))
        }
        if (action === 'update') {
            dispatch(actSeenStudent({ student: student, action: 'UPDATE' }))
        }
        if (action === 'delete') {  
            dispatch(actDeleteStudent(student))
        }
    }
    return (
        <tr>
            <td>{stt}</td>
            <td>{student.id}</td>
            <td>{student.name}</td>
            <td>{student.age}</td>
            <td>{student.gender ? "Nam" : "Nữ"}</td>
            <td>
                <div className="template-demo">
                    <button
                        onClick={() => handleSubmit(student, 'seen')}
                        type="button"
                        className="btn btn-danger btn-icon-text"
                    >
                        Xem
                    </button>
                    <button
                        onClick={() => handleSubmit(student, 'update')}
                        type="button"
                        className="btn btn-warning btn-icon-text"
                    >
                        Sửa
                    </button>
                    <button
                        onClick={() => handleSubmit(student, 'delete')}
                        type="button"
                        className="btn btn-success btn-icon-text"
                    >
                        Xóa
                    </button>
                </div>
            </td>
        </tr>
    )
}

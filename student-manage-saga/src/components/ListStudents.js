import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actGetStudents } from '../redux/actions'
import { listStudentsSelector, remainListStudents } from '../redux/selector'
import Student from './Student'

export default function ListStudents() {
    const listStudents = useSelector(remainListStudents)
    const elementStudent = listStudents.map((student, index) => {
        return <Student key={student.id} student={student} stt={index + 1} />
    })
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(actGetStudents())
    }, [])
    return (
        <div>
            <div className="card-body">
                <h3 className="card-title">Danh sách sinh viên</h3>
                <div className="table-responsive pt-3">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Mã sinh viên</th>
                                <th>Tên sinh viên</th>
                                <th>Tuổi</th>
                                <th>Giới tính</th>
                                <th>Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            {elementStudent}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

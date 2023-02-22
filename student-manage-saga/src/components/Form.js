import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actCreateStudent, actUpdateStudent } from '../redux/actions'
import { remainListStudents, selectedStudentSelector, toggleSelector } from '../redux/selector'

export default function Form(props) {
    const toggle = useSelector(toggleSelector)
    const selectedStudent = useSelector(selectedStudentSelector)
    useEffect(() => {
        selectedStudent && setInputValue(selectedStudent)
    }, [selectedStudent])
    const listStudents = useSelector(remainListStudents)
    const dispatch = useDispatch()
    const [inputValue, setInputValue] = useState(
        {
            id: '',
            name: '',
            age: '',
            gender: true,
            birthDate: '',
            birthPlace: '',
            address: ''
        }
    )
    const handleChange = (e) => {
        let key = e.target.name;
        let value = e.target.value
        setInputValue({ ...inputValue, [key]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (toggle.toggle.action === 'ADD') {
            if (validate()) {
                dispatch(actCreateStudent(inputValue))
            }
        }
        if (toggle.toggle.action === 'UPDATE') {
            if(validateUpdate()) {
                dispatch(actUpdateStudent(inputValue))
            }
        }
    }
    const validate = () => {
        let checkValidate = false
        if (inputValue.id.trim() === '') {
            checkValidate = false
            alert('Please enter the student ID!')
            return false
        } else {
            let checkExist = false
            for (let i = 0; i < listStudents.length; i++) {
                if (inputValue.id === listStudents[i].id) {
                    checkExist = true
                    break;
                }
            }
            if (checkExist) {
                checkValidate = false;
                alert("This student ID has already existed! Please try another!")
                return false
            } else {
                checkValidate = true
            }
        }
        if (inputValue.name.trim() === "") {
            checkValidate = false
            alert("Please enter the student name!")
            return false
        } else {
            checkValidate = true
        }
        if (inputValue.age.toString().trim() === "") {
            checkValidate = false
            alert("Please enter the student age")
            return false
        } else {
            checkValidate = true
        }
        if (checkValidate) {
            return true
        } else {
            return false
        }
    }
    const validateUpdate = () => {
        let checkValidate = false
        if (inputValue.name.trim() === "") {
            checkValidate = false
            alert("Please enter the student name!")
            return false
        } else {
            checkValidate = true
        }
        if (inputValue.age.toString().trim() === "") {
            checkValidate = false
            alert("Please enter the student age")
            return false
        } else {
            checkValidate = true
        }
        if (checkValidate) {
            return true
        } else {
            return false
        }
    }
    return (
        <div className="col-5 grid-margin">
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title">Thông tin sinh viên</h3>
                    <form className="form-sample">
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Mã sinh viên</label>
                            <div className="col-sm-9">
                                <input disabled={(toggle.toggle.action === 'SEEN' || toggle.toggle.action === 'UPDATE') ? true : false} value={inputValue.id} onChange={handleChange} type="text" className="form-control" name='id' />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Tên sinh viên</label>
                            <div className="col-sm-9">
                                <input disabled={(toggle.toggle.action === 'SEEN') ? true : false} value={inputValue.name} onChange={handleChange} type="text" className="form-control" name='name' />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Tuổi</label>
                            <div className="col-sm-9">
                                <input disabled={(toggle.toggle.action === 'SEEN') ? true : false} value={inputValue.age} onChange={handleChange} type="text" className="form-control" name='age' />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Giới tính</label>
                            <div className="col-sm-9">
                                <select disabled={(toggle.toggle.action === 'SEEN') ? true : false} value={inputValue.gender} onChange={handleChange} name='gender' className="form-control">
                                    <option value={true}>Nam</option>
                                    <option value={false}>Nữ</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Ngày sinh</label>
                            <div className="col-sm-9">
                                <input disabled={(toggle.toggle.action === 'SEEN') ? true : false} value={inputValue.birthDate} onChange={handleChange} className="form-control" placeholder="dd/mm/yyyy" name='birthDate' />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Nơi sinh</label>
                            <div className="col-sm-9">
                                <select disabled={(toggle.toggle.action === 'SEEN') ? true : false} value={inputValue.birthPlace} onChange={handleChange} name='birthPlace' className="form-control">
                                    <option value={'HN'}>Hà Nội</option>
                                    <option value={'HCM'}>TP. Hồ Chí Minh</option>
                                    <option value={'ĐN'}>Đà Nẵng</option>
                                    <option value={'QN'}>Quảng Ninh</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Địa chỉ</label>
                            <div className="col-sm-9">
                                <textarea disabled={(toggle.toggle.action === 'SEEN') ? true : false} value={inputValue.address} onChange={handleChange} className="form-control" name='address' />
                            </div>
                        </div>
                        <button disabled={(toggle.toggle.action === 'SEEN') ? true : false} onClick={handleSubmit} type="submit" className="btn btn-primary me-2">
                            {toggle.toggle.action}
                        </button>
                    </form>
                </div>
            </div >
        </div >
    )
}

import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actSearch, actSort, actToggle } from '../redux/actions'
import { toggleSelector } from '../redux/selector'

export default function Control() {
    const [inputValue, setInputValue] = useState('')
    const dispatch = useDispatch()
    const handleAddStudent = () => { 
        const action = "ADD"
        dispatch(actToggle(action))
    }
    const handleChange = (e) => {
        setInputValue(e.target.value)
    }
    const handleSearch = (e) => {
        e.preventDefault()
        dispatch(actSearch(inputValue))
    }
    const handleSort = (e) => {
        let sortValue = e.target.value
        let sort = sortValue.split('-')
        let sortBy = sort[0]
        let sortDir = sort[1]
        dispatch(actSort({sortBy, sortDir}))
    }
    return (
        <div>
            <div className="card-header">
                <div className="row">
                    <div className="col-3">
                        <button onClick={handleAddStudent} type="button" className="btn btn-primary btn-icon-text">
                            Thêm mới sinh viên
                        </button>
                    </div>
                    <div className="col-6">
                        <form className="search-form" action="#">
                            <i className="icon-search" />
                            <input
                                onChange={handleChange}
                                type="search"
                                className="form-control"
                                placeholder="Search Here"
                                title="Search here"
                            />
                            <button onClick={handleSearch} className="btn btn-primary btn-icon-text">
                                Tìm kiếm
                            </button>
                        </form>
                    </div>
                    <div className="col-3 d-flex align-items-center">
                        <select onChange={handleSort} className="form-control">
                            <option value="">Sắp xếp</option>
                            <option value="name-ASC">Tên tăng dần</option>
                            <option value="name-DSC">Tên giảm dần</option>
                            <option value="age-ASC">Tuổi tăng dần</option>
                            <option value="age-DSC">Tuổi giảm dần</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

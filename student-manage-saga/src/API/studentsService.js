import { instance } from "./axios";

export const GET_STUDENTS = async () => {
    let response = await instance.get('students')
    return response.data
}

export const POST_STUDENTS = async (newStudent) => {
    await instance.post('students', newStudent)
}

export const PUT_STUDENT = async (updateStudent) => {
    await instance.put(`students/${updateStudent.id}`, updateStudent)
}

export const DELETE_STUDENT = async (deleteStudent) => {
    await instance.delete(`students/${deleteStudent.id}`)
}
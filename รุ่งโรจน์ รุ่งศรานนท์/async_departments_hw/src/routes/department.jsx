import './employee.css'
import axiosConfig from '../configs/axios.config'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Department() {
    const [departments, setDepartments] = useState([])

    const onSubmit = async (e) => {
        e.preventDefault()

        const bodyEmployee = {
            name: e.target.name.value,
            age: e.target.age.value,
            role: 3
        }

        const bodyDepartment = {
            name: e.target.name.value,
            department: e.target.department.value
        }

        e.target.reset()
        try {
            axiosConfig.post('/employees', bodyEmployee)
        } catch (error) {
            alert(error)
        }
        try {
            const response = await axiosConfig.post('/departments', bodyDepartment)
            if (response.status === 201) {
                fetchDepart()
            }
        } catch (error) {
            alert(error)
        }
    }

    const fetchDepart = async() => {
        try {
            const response = await axiosConfig.get("/departments")
            setDepartments(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(()=> {
        console.log(departments)
    }, [departments])

    return (
        <div className="employee-page">
            <Link to="/">Go back</Link>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="Manager's name" name='name'/>
                <input type="text" placeholder="Manager's age" name='age'/>
                <input type="text" placeholder="Manager's department" name='department'/>
                <input type="submit" />
            </form>
            <button onClick={fetchDepart} style={{margin: "10px"}}>Fetch Data</button>
            <ul>
                {departments.map((department) => <li key={department._id}> Department: {department.department} Manager's name: {department.name} Manager's id: {department._id}</li>)}
            </ul>
        </div>
    )
}
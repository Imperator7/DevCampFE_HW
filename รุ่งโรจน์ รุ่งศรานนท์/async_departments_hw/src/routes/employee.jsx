import './employee.css'
import { Link } from 'react-router-dom'

const roles = [
    {id: 1, label: 'Junior'},
    {id: 2, label: 'Senior'}
]

import axiosConfig from '../configs/axios.config'
import { useState } from 'react'

export default function Employees() {
    const [employees, setEmployees] = useState([])

    const onSubmit = async (e) => {
        console.log(e)
        e.preventDefault()
        const body = {
            name: e.target.name.value,
            age: e.target.age.value,
            role: e.target.role.value,
        }
        e.target.reset()

        try {
            const response = await axiosConfig.post('/employees', body)
            if (response.status === 201) {
                fetchData()
            }
        } catch (error) {
            alert(error)
        }

        
    }

    const fetchData =  async (e) => {
        try {
            const response = await axiosConfig.get('/employees')
            setEmployees(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className='employee-page'>
            <Link to="/">Go Back</Link>
            <form onSubmit={onSubmit}>
                <input type="text" name="name" placeholder="place name here" />
                <input type="number" name="age" placeholder="place your age here" />
                <select name="role" id="">
                    {roles.map((role) => <option value={role.id}>{role.label}</option>)}
                </select>
                <input type="submit" value="Submit"/>
            </form>
            <br />
            <button onClick={fetchData}>Fetch data</button>
            <ul>{employees.map((employee) => <li><span>Name: {employee.name}</span>  <span>Age: {employee.age}</span> <span>Role: {employee.role == 1? "Junior": employee.role == 2? "Senior": "Manager"}</span></li>)}</ul>
        </div>
    )
}
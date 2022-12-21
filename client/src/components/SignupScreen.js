import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { useCards } from '../contexts/CardContext'

export default function SignupScreen() {


   // TODO : PASSWORD VALIDATION 


    const { setSignin } = useCards();

    const [user, setUser] = useState(
        {
            email: "",
            password: ""
        }
    )
    console.log(user)
    return (
        <Container className="form-signin w-25">
            <form onSubmit={() => { setSignin(user) }}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
                        onChange={(e) => { setUser({ ...user, email: e.target.value }) }} />
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"
                        onChange={(e) => { setUser({ ...user, password: e.target.value }) }} />
                </div>

                <div className="form-group mt-2">
                    <label htmlFor="exampleInputPassword1">Password Again</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"
                        onChange={(e) => { setUser({ ...user, password: e.target.value }) }} />
                </div>


                <button type="submit" className="btn btn-primary mt-2 w-100">Submit</button>

                <a href='/'>do you have an account ?</a>
            </form>
        </Container>


    )
}

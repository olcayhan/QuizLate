import React from 'react'
import { Container } from 'react-bootstrap'

export default function AuthScreen() {
    return (
        <Container className="form-signin w-25">
            <form>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div className="form-group mt-4">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <button type="submit" className="btn btn-primary mt-2 w-100">Submit</button>
            </form>
        </Container>


    )
}

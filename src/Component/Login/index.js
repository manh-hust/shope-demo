import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import style from './login.module.css'
import { useDispatch } from 'react-redux'

function Login() {

    const dispatch = useDispatch()

    return (
       <Form className={style.form}>
            <FormGroup className={style.formGroup}>
                    <Label for="exampleEmail">
                        Email
                    </Label>
                    <Input
                    id="exampleEmail"
                    name="email"
                    placeholder="Email..."
                    type="email"
                    />
                </FormGroup>
                <FormGroup className={style.formGroup}>
                    <Label for="examplePassword">
                        Password
                    </Label>
                    <Input
                    id="examplePassword"
                    name="password"
                    type="password"
                    />
                </FormGroup>
                <Button 
                color='success'
                onClick = {() => {
                    dispatch({
                        type: 'LOGIN',
                    })
                }}
                
                >
                    Login
                </Button>
       </Form>
    )
}

export default Login
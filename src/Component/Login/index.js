import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import style from './login.module.css'

function Login() {

    return (
       <Form className={style.form}>
            <FormGroup className={style.formGroup}>
                    <Label for="exampleEmail">
                        Email
                    </Label>
                    <Input
                    id="exampleEmail"
                    name="email"
                    placeholder="with a placeholder"
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
                    placeholder="password placeholder"
                    type="password"
                    />
                </FormGroup>
                <Button color='success'>Login</Button>
       </Form>
    )
}

export default Login
import { Redirect, Route, Switch } from 'react-router-dom'
export default function AuthPage() {
    return (
        <AuthLayout>
            <Switch>
                {/* <Route path='/auth/login' component={Login} /> */}
                {/* <Route path='/auth/registration' component={Registration} /> */}
                <Redirect from='/auth' exact to='/auth/login' />
                <Redirect to='/auth/login' />
            </Switch>
        </AuthLayout>
    )
}
function AuthLayout() {
    return (
        <>
        </>
    )
}
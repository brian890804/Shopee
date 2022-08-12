import PersistMemberStore from '../setup/redux/PersistMemberStore'
import AuthPage from '../auth/AuthPage';
import { Redirect, Route, Switch } from 'react-router-dom'
import PrivataRoute from './PrivateRoute';
export default function Routes() {
    const { token: Auth } = PersistMemberStore();
    return (
        <Switch>
            {!Auth ? (
                <Route>
                    <AuthPage />
                </Route>
            ) : (
                <Redirect from='/auth' to='/' />
            )}

            {!Auth ? (
                <Redirect to='/auth/login' />
            ) : (
                <PrivataRoute />
            )}


        </Switch>
    )
}
import PostsList from 'containers/PostsContainer';
import UserList from 'containers/UserListContainer';
import User from 'containers/UserContainer';
import Home from 'components/Home'

export default [
    {
        path: '/',
        exact: true,
        component: Home,
    },
    {
        path: '/users/',
        exact: true,
        component: UserList,
    },
    {
        path: '/users/:id',
        exact: true,
        component: User,
    },
    {
        path: '/posts/',
        exact: true,
        component: PostsList,
    },
]
import PostsList from 'containers/PostsContainer';
import UserList from 'containers/UserListContainer';
import UserContainer from `containers/UserContainer`;
import Home from 'components/Home'

export default [
    {
        path: '/',
        exact: true,
        component: Home,
    },
    {
        path: '/users/:id',
        exact: true,
        component: UserList,
    },
    {
        path: '/posts/:id',
        exact: true,
        component: PostsList,
    },
]
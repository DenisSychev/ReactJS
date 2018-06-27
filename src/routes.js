import PostsList from 'containers/PostsContainer';
import UserList from 'containers/UserListContainer';
import Home from 'components/Home'

export default [
    {
        path: '/',
        exact: true,
        component: Home,
    },
    {
        path: '/users',
        exact: true,
        component: UserList,
    },
    {
        path: '/posts',
        exact: true,
        component: PostsList,
    },
]
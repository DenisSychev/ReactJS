import PostsList from 'containers/PostsContainer';
import UserList from 'containers/UserListContainer';

export default [
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
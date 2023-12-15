import React, {FC} from 'react';
import {UsersOfMemoType} from './UseMemo.stories'


type Props = {
    users: UsersOfMemoType[]
}
export const UsersMemo: FC<Props> = React.memo(({users}) => {
    console.log('UserMemo component')

    const mappedUsers = users.map(m => <li key={m.id}>{m.name}</li>)

    return (
        <div>
            <ul>{mappedUsers}</ul>
        </div>
    );
})

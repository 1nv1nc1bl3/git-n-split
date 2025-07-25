import Friend from './Friend';

export default function FriendsList({ friends, onSelection, selectedFriend }) {
    //     const friends = initialFriends;
    return (
        <ul>
            {friends.map((friend) => (
                <Friend
                    friend={friend}
                    key={friend.id}
                    onSelection={onSelection}
                    selectedFriend={selectedFriend}
                />
            ))}
        </ul>
    );
}

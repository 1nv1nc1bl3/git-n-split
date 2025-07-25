import { useState } from 'react';
import Button from './Button';
import FriendsList from './FriendsList';
import FormAddFriend from './FormAddFriend';
import FormSplitBill from './FormSplitBill';

const initialFriends = [
    {
        id: 118836,
        name: 'Clark',
        image: 'https://i.pravatar.cc/48?u=118836',
        balance: -7,
    },
    {
        id: 933372,
        name: 'Sarah',
        image: 'https://i.pravatar.cc/48?u=933372',
        balance: 20,
    },
    {
        id: 499476,
        name: 'Anthony',
        image: 'https://i.pravatar.cc/48?u=499476',
        balance: 0,
    },
];

export default function App() {
    const [friends, setFriends] = useState(initialFriends);
    const [showAddFriend, setShowAddFriend] = useState(false);
    const [selectedFriend, setSelectedFriend] = useState(null);

    function handleShowAddFriend() {
        setShowAddFriend((show) => !show);
    }

    function handleAddFriend(friend) {
        setFriends((friends) => [...friends, friend]);
        handleShowAddFriend();
        setShowAddFriend(false);
    }

    function handleSelection(friend) {
        // setSelectedFriend(friend);
        setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
        setShowAddFriend(false);
    }

    function handleSpitBill(value) {
        // console.log(value);
        setFriends((friends) =>
            friends.map((friend) =>
                friend.id === selectedFriend.id
                    ? { ...friend, balance: friend.balance + value }
                    : friend
            )
        );

        setSelectedFriend(null);
    }

    return (
        <div className='app'>
            <div className='sidebar'>
                <FriendsList
                    friends={friends}
                    selectedFriend={selectedFriend}
                    onSelection={handleSelection}
                />

                {showAddFriend && (
                    <FormAddFriend onAddFriend={handleAddFriend} />
                )}

                <Button onClick={handleShowAddFriend}>
                    {!showAddFriend ? 'Add friend' : 'Close'}
                </Button>
            </div>
            {selectedFriend && (
                <FormSplitBill
                    selectedFriend={selectedFriend}
                    onSplitBill={handleSpitBill}
                />
            )}
        </div>
    );
}

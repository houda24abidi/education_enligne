import React, { useState } from 'react';
import '../styles/Chat.css';

const friendsList = [
  { id: 1, name: 'Nour' },
  { id: 2, name: 'Wassim' },
  { id: 3, name: 'Yasmine' },
];

const Chat = () => {
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [messages, setMessages] = useState({});
  const [newMessage, setNewMessage] = useState('');

  const handleFriendClick = (friend) => {
    setSelectedFriend(friend);
    setNewMessage('');
  };

  const handleSend = () => {
    if (!newMessage.trim() || !selectedFriend) return;

    const updated = {
      ...messages,
      [selectedFriend.id]: [
        ...(messages[selectedFriend.id] || []),
        { sender: 'student', text: newMessage },
      ],
    };
    setMessages(updated);
    setNewMessage('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="chat-container">
      <div className="friend-list">
        <h3>Mes Amis</h3>
        {friendsList.map((friend) => (
          <div
            key={friend.id}
            className={`friend-item ${selectedFriend?.id === friend.id ? 'active' : ''}`}
            onClick={() => handleFriendClick(friend)}
          >
            {friend.name}
          </div>
        ))}
      </div>

      <div className="chat-box">
        {selectedFriend ? (
          <>
            <div className="chat-header">Discussion avec {selectedFriend.name}</div>
            <div className="chat-messages">
              {(messages[selectedFriend.id] || []).map((msg, index) => (
                <div
                  key={index}
                  className={`chat-message ${msg.sender === 'student' ? 'student' : 'admin'}`}
                >
                  {msg.text}
                </div>
              ))}
            </div>
            <div className="chat-input">
              <input
                type="text"
                placeholder="Écrire un message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <button onClick={handleSend}>Envoyer</button>
            </div>
          </>
        ) : (
          <div className="select-friend-message">Sélectionnez un ami pour commencer la discussion</div>
        )}
      </div>
    </div>
  );
};

export default Chat;

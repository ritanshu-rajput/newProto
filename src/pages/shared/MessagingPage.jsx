import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../../App.css';

function MessagingPage() {
  const [selectedConversation, setSelectedConversation] = useState(1);
  const [newMessage, setNewMessage] = useState('');

  const conversations = [
    {
      id: 1,
      name: 'John Smith Properties',
      property: '2 BHK Apartment in Downtown',
      lastMessage: 'Sure, viewing available this Saturday',
      time: '1 hour ago',
      unread: true,
      avatar: 'JS'
    },
    {
      id: 2,
      name: 'ABC Real Estate',
      property: 'Studio Apartment Near IT Park',
      lastMessage: 'The property is still available',
      time: '2 days ago',
      unread: false,
      avatar: 'AR'
    },
    {
      id: 3,
      name: 'Sarah Johnson',
      property: '3 BHK Villa in Green Valley',
      lastMessage: 'Can I schedule a viewing?',
      time: '3 days ago',
      unread: true,
      avatar: 'SJ'
    }
  ];

  const messages = {
    1: [
      {
        id: 1,
        sender: 'them',
        text: 'Hello! Thank you for your interest in the property.',
        time: '10:30 AM'
      },
      {
        id: 2,
        sender: 'me',
        text: 'Hi! I would like to schedule a viewing. When would be a good time?',
        time: '10:35 AM'
      },
      {
        id: 3,
        sender: 'them',
        text: 'Sure, viewing available this Saturday. Would 2 PM work for you?',
        time: '10:40 AM'
      },
      {
        id: 4,
        sender: 'me',
        text: 'Yes, Saturday at 2 PM works perfectly for me. Thank you!',
        time: '10:42 AM'
      }
    ],
    2: [
      {
        id: 1,
        sender: 'me',
        text: 'Hi, I\'m interested in the studio apartment. Is it still available?',
        time: '2 days ago'
      },
      {
        id: 2,
        sender: 'them',
        text: 'The property is still available. Would you like to schedule a viewing?',
        time: '2 days ago'
      }
    ],
    3: [
      {
        id: 1,
        sender: 'them',
        text: 'Can I schedule a viewing for the 3 BHK villa?',
        time: '3 days ago'
      }
    ]
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      // In a real app, this would send the message to the backend
      console.log('Sending message:', newMessage);
      setNewMessage('');
    }
  };

  const selectedConv = conversations.find(c => c.id === selectedConversation);
  const currentMessages = messages[selectedConversation] || [];

  return (
    <div>
      {/* Header */}
      <div className="wireframe-header">
        <Link to="/" style={{textDecoration: 'none', color: 'white'}}>
          <h1>🏠 RentEasy</h1>
        </Link>
        <div className="wireframe-nav">
          <Link to="/renter/dashboard">Dashboard</Link>
          <Link to="/renter/search">Search</Link>
          <Link to="/messages">Messages</Link>
          <Link to="/renter/profile">Profile</Link>
          <button>Logout</button>
        </div>
      </div>

      <div className="wireframe-container">
        <div style={{maxWidth: '1400px', margin: '20px auto'}}>
          <h1 style={{marginBottom: '30px'}}>Messages</h1>

          <div className="messages-container">
            {/* Conversations List */}
            <div className="conversations-list">
              <div style={{padding: '15px', borderBottom: '1px solid #e0e0e0', backgroundColor: '#f8f9fa'}}>
                <input
                  type="text"
                  placeholder="Search conversations..."
                  style={{
                    width: '100%',
                    padding: '8px',
                    border: '1px solid #ddd',
                    borderRadius: '4px'
                  }}
                />
              </div>

              {conversations.map(conversation => (
                <div
                  key={conversation.id}
                  className={`conversation-item ${selectedConversation === conversation.id ? 'active' : ''}`}
                  onClick={() => setSelectedConversation(conversation.id)}
                >
                  <div style={{display: 'flex', alignItems: 'flex-start', gap: '12px'}}>
                    <div style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      backgroundColor: '#3498db',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '16px',
                      fontWeight: '700',
                      flexShrink: 0
                    }}>
                      {conversation.avatar}
                    </div>

                    <div style={{flex: 1, minWidth: 0}}>
                      <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '5px'}}>
                        <h4 style={{
                          fontSize: '14px',
                          fontWeight: '600',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap'
                        }}>
                          {conversation.name}
                          {conversation.unread && (
                            <span style={{
                              marginLeft: '8px',
                              width: '8px',
                              height: '8px',
                              backgroundColor: '#e74c3c',
                              borderRadius: '50%',
                              display: 'inline-block'
                            }} />
                          )}
                        </h4>
                        <span style={{fontSize: '11px', color: '#999', flexShrink: 0, marginLeft: '8px'}}>
                          {conversation.time}
                        </span>
                      </div>

                      <p style={{
                        fontSize: '12px',
                        color: '#666',
                        marginBottom: '5px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap'
                      }}>
                        📍 {conversation.property}
                      </p>

                      <p style={{
                        fontSize: '13px',
                        color: conversation.unread ? '#333' : '#999',
                        fontWeight: conversation.unread ? '600' : 'normal',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap'
                      }}>
                        {conversation.lastMessage}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {conversations.length === 0 && (
                <div style={{textAlign: 'center', padding: '40px 20px'}}>
                  <div style={{fontSize: '48px', marginBottom: '15px'}}>💬</div>
                  <p style={{color: '#666'}}>No conversations yet</p>
                </div>
              )}
            </div>

            {/* Message Thread */}
            <div className="message-thread">
              {selectedConv ? (
                <>
                  {/* Message Header */}
                  <div className="message-header" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <div>
                      <h3 style={{marginBottom: '5px'}}>{selectedConv.name}</h3>
                      <p style={{fontSize: '14px', color: '#666'}}>📍 {selectedConv.property}</p>
                    </div>
                    <div style={{display: 'flex', gap: '10px'}}>
                      <Link to={`/renter/property/${selectedConversation}`} className="btn btn-outline" style={{fontSize: '14px', padding: '6px 12px'}}>
                        View Property
                      </Link>
                      <Link to={`/renter-profile/${selectedConversation}`} className="btn btn-outline" style={{fontSize: '14px', padding: '6px 12px'}}>
                        View Profile
                      </Link>
                    </div>
                  </div>

                  {/* Messages Area */}
                  <div className="messages-area">
                    {currentMessages.map(message => (
                      <div key={message.id}>
                        <div className={`message ${message.sender === 'me' ? 'sent' : 'received'}`}>
                          <div>{message.text}</div>
                          <div style={{
                            fontSize: '11px',
                            marginTop: '5px',
                            opacity: 0.8
                          }}>
                            {message.time}
                          </div>
                        </div>
                      </div>
                    ))}

                    {currentMessages.length === 0 && (
                      <div style={{textAlign: 'center', padding: '40px'}}>
                        <p style={{color: '#666'}}>No messages yet. Start the conversation!</p>
                      </div>
                    )}
                  </div>

                  {/* Message Input */}
                  <form onSubmit={handleSendMessage} className="message-input">
                    <input
                      type="text"
                      placeholder="Type your message..."
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                    />
                    <button type="submit" className="btn btn-primary">
                      Send
                    </button>
                  </form>
                </>
              ) : (
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100%',
                  color: '#999',
                  fontSize: '18px'
                }}>
                  Select a conversation to view messages
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MessagingPage;

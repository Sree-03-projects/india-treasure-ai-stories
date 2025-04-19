
import React, { useState } from 'react';
import { MessageSquare, X, Send, Mic } from 'lucide-react';

const ChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      type: 'bot', 
      text: 'Hello! I\'m your InDiverse assistant. I can help you with finding products, tracking orders, or learning about Indian crafts. How can I assist you today?' 
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = (e?: React.FormEvent) => {
    if (e) {
      e.preventDefault();
    }
    
    if (!inputValue.trim()) return;
    
    // Add user message
    const userMessage = { id: Date.now(), type: 'user', text: inputValue };
    setMessages([...messages, userMessage]);
    setInputValue('');
    
    // Simulate bot response (in a real app, this would call an API)
    setTimeout(() => {
      let botResponse;
      const lcMessage = inputValue.toLowerCase();
      
      if (lcMessage.includes('track') || lcMessage.includes('order')) {
        botResponse = { 
          id: Date.now() + 1, 
          type: 'bot', 
          text: 'To track your order, please enter your order number or check the "My Orders" section in your profile.' 
        };
      } else if (lcMessage.includes('saree') || lcMessage.includes('sari')) {
        botResponse = { 
          id: Date.now() + 1, 
          type: 'bot', 
          text: 'Our sarees come from different regions of India. Kanjivaram sarees from Tamil Nadu are known for their silk and gold zari. Banarasi sarees from Varanasi feature intricate patterns. Would you like to explore our saree collection?' 
        };
      } else if (lcMessage.includes('return') || lcMessage.includes('refund')) {
        botResponse = { 
          id: Date.now() + 1, 
          type: 'bot', 
          text: 'Our return policy allows returns within 14 days of delivery. For more details, please visit our Returns & Refunds page.' 
        };
      } else {
        botResponse = { 
          id: Date.now() + 1, 
          type: 'bot', 
          text: 'Thank you for your message! I\'d be happy to help you with that. Is there anything specific about Indian crafts or products you\'d like to know?' 
        };
      }
      
      setMessages((prevMessages) => [...prevMessages, botResponse]);
    }, 800);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat bubble */}
      {!isOpen && (
        <button 
          onClick={toggleChat}
          className="bg-heritage-accent text-white h-14 w-14 rounded-full flex items-center justify-center shadow-lg hover:bg-heritage-umber transition-colors"
          aria-label="Open chat assistant"
        >
          <MessageSquare className="h-6 w-6" />
        </button>
      )}
      
      {/* Chat window */}
      {isOpen && (
        <div className="bg-white rounded-lg shadow-xl w-80 sm:w-96 flex flex-col overflow-hidden border border-gray-100">
          {/* Header */}
          <div className="bg-heritage-accent text-white px-4 py-3 flex justify-between items-center">
            <div className="flex items-center">
              <div className="bg-white/20 h-8 w-8 rounded-full flex items-center justify-center mr-2">
                <MessageSquare className="h-4 w-4" />
              </div>
              <div>
                <h3 className="font-medium">InDiverse Assistant</h3>
                <div className="text-xs text-white/80">Online | AI Powered</div>
              </div>
            </div>
            <button 
              onClick={toggleChat}
              className="text-white/80 hover:text-white"
              aria-label="Close chat"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-80">
            {messages.map((message) => (
              <div 
                key={message.id} 
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[80%] rounded-lg px-4 py-2 ${
                    message.type === 'user' 
                      ? 'bg-heritage-accent text-white rounded-tr-none' 
                      : 'bg-gray-100 text-gray-800 rounded-tl-none'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>
          
          {/* Input */}
          <form onSubmit={handleSendMessage} className="border-t border-gray-100 p-3">
            <div className="flex items-center bg-gray-50 rounded-full px-3 py-1 border border-gray-200">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 bg-transparent border-none focus:outline-none py-2 text-sm"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <button 
                type="button"
                className="text-gray-400 hover:text-heritage-accent p-1"
                aria-label="Voice input"
              >
                <Mic className="h-5 w-5" />
              </button>
              <button 
                type="submit"
                className={`ml-1 p-1 rounded-full ${
                  inputValue.trim() 
                    ? 'text-heritage-accent hover:text-heritage-umber' 
                    : 'text-gray-300'
                }`}
                disabled={!inputValue.trim()}
                aria-label="Send message"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
            <div className="text-xs text-center text-gray-400 mt-2">
              Powered by InDiverse AI • Ask about crafts, products, or orders
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatAssistant;

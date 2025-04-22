import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import Fab from '@mui/material/Fab';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';

function ChatDialog() {
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState('');
  const [chatHistory, setChatHistory] = React.useState([]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const testAI = [
    "Hi, I am a test AI for this project, currently we are still testing",
    "Please stop to try again, the model is not working now", 
    "we are still testing, please stop input any sentences",
    "Input enough?",
    "Stop ok??????",
    "????????????? whats wrong with you?"
  ]
  const [testindex, setindex] = React.useState(0)

  const handleSend = () => {
    if (message.trim() === '') return;
    // 假設這裡處理發送訊息的邏輯
    setChatHistory(prev => [...prev, { sender: 'user', text: "My: "+ message }]);
    setMessage('');
    // 這裡可以加入 AI 回應邏輯
    setChatHistory(prev => [...prev, { sender: 'None', text: "AI: " + testAI[testindex] }]);
    setindex(prev => (prev+1)%testAI.length)
  };

  return (
    <div>
      <Fab color="error" aria-label="add" onClick={handleClickOpen}>
          <PhoneInTalkIcon />
      </Fab>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>AI Chat</DialogTitle>
        <DialogContent dividers>
          <div style={{ minHeight:'500px',maxHeight: '300px',width:'500px', overflowY: 'auto', marginBottom: '16px',}}>
            {chatHistory.map((chat, index) => (
              <div key={index} style={{ marginBottom: '20px', textAlign: chat.sender === 'user' ? 'right' : 'left' 
                , color: chat.sender === 'user' ? 'green': 'red' }}>
                <span style={{ padding: '8px', backgroundColor: '#f0f0f0', borderRadius: '4px', }}>
                  {chat.text}
                </span>
              </div>
            ))}
          </div>
          <TextField
            autoFocus
            margin="dense"
            label="輸入訊息"
            fullWidth
            variant="standard"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                handleSend();
              }
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>關閉</Button>
          <Button onClick={handleSend}>送出</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ChatDialog;

import { ChatRounded } from '@mui/icons-material'
import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogTitle,
  Grid,
  IconButton,
  TextField,
  Typography,
} from '@mui/material'
import { blue, deepOrange, grey } from '@mui/material/colors'
import { useRef, useState } from 'react'
import { toast } from 'react-toastify'
import { toastConfiguration } from '../../utils/toastConfiguration'

type ChatBotProps = {
  welcomeText?: string
  position?: 'bottom-left' | 'bottom-right'
}

export default function ChatBot({
  welcomeText = 'Hello!',
  position = 'bottom-left',
}: ChatBotProps) {
  const textRef = useRef<HTMLInputElement>(null) // Ref Used for Not Re-Rendering the Component
  const [openChatBot, setOpenChatBot] = useState<boolean>(false)
  const [messages, setMessages] = useState<string[]>([])

  const handleSubmitMessage = () => {
    if (textRef && textRef.current) {
      if (textRef.current.value?.length > 0) {
        setMessages((previousState) => [
          ...previousState,
          (textRef.current && textRef.current.value) || '',
        ])
        textRef.current.value = ''
      } else {
        toast.error('You Should Type Something!', toastConfiguration)
      }
    }
  }

  return (
    <>
      {/**
       * Icon Button */}
      <IconButton
        data-testid="icon-button"
        sx={{
          border: 1,
          position: 'fixed',
          bottom: 30,
          left: position === 'bottom-left' ? 30 : 'unset',
          right: position === 'bottom-right' ? 30 : 'unset',
        }}
        color="primary"
        aria-label="chat-bot"
        onClick={() => setOpenChatBot(true)}
      >
        <ChatRounded />
      </IconButton>

      {/**
       * Chat Bot Frame
       */}
      <Dialog
        data-testid="chatbot-dialog"
        fullWidth
        open={openChatBot}
        onClose={() => setOpenChatBot(false)}
      >
        <DialogTitle sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          Ask Me Anything!
        </DialogTitle>

        <Grid
          mx={3}
          mb={3}
          mt={1}
          display={'flex'}
          flexDirection={'column'}
          gap={4}
        >
          {/**
           * ChatBot Messages
           */}
          <Grid
            border={1}
            height={200}
            borderColor={grey[200]}
            borderRadius={1}
            sx={{ overflowY: 'auto' }}
          >
            <Grid
              display={'flex'}
              flexDirection={'row'}
              alignItems={'center'}
              p={2}
              gap={1}
            >
              <Avatar sx={{ bgcolor: deepOrange[500] }}>CB</Avatar>
              <Box sx={{ bgcolor: grey[200], borderRadius: 4, p: 2 }}>
                <Typography>{welcomeText}</Typography>
              </Box>
            </Grid>

            {messages?.map((item, index) => (
              <Grid
                key={index}
                display={'flex'}
                flexDirection={'row-reverse'}
                alignItems={'center'}
                p={2}
                gap={1}
              >
                <Avatar sx={{ bgcolor: blue[500] }}>CB</Avatar>
                <Box sx={{ bgcolor: grey[200], borderRadius: 4, p: 2 }}>
                  <Typography>{item}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

          {/**
           * ChatBot Form
           */}
          <Grid
            display={'flex'}
            flexDirection={'row'}
            alignItems={'stretch'}
            gap={2}
          >
            <TextField
              fullWidth
              id="outlined-multiline-textarea"
              label="What do you want?"
              multiline
              placeholder="Type..."
              inputRef={textRef}
            />
            <Button
              color="success"
              variant="contained"
              onClick={handleSubmitMessage}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Dialog>
    </>
  )
}

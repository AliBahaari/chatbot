import { ToastOptions } from 'react-toastify'

export const toastConfiguration: ToastOptions<{
  position: string
  autoClose: number
  hideProgressBar: boolean
  closeOnClick: boolean
  pauseOnHover: boolean
  draggable: boolean
  theme: string
}> = {
  position: 'top-left',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: false,
  theme: 'dark',
}

import Image from 'next/image'
import { Inter } from 'next/font/google'
import Button from '@/Components/Button'
import Flex from '@/Components/Flex'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <p>
        TWComponents is a library that has been adjusted to use the <br/>
        Tailwindcss and daisyUI CSS libraries as components.<br/>
        It was created for component-based styling like ChakraUI.
      </p>
      <Button ButtonTheme='primary' Ghost={true} Activate={true} Animate={true} >
        aaa
      </Button>
      <Flex>
        <div></div>
        <div></div>
        <div></div>
      </Flex>
    </main>
  )
}

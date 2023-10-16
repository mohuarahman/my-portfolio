import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='flex flex-col w-screen h-screen items-center justify-center'>
      <h2>Page Not Found</h2>
      <Link href="/" className='text-blue-700 underline'>Return Home</Link>
    </div>
  )
}
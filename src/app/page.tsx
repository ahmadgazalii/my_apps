import Link from 'next/link';

export default function Home() {
  return (
    <div>
          Hello World 
          <br/>
          <br/>
          <Link href="/ahmad"><button style={{backgroundColor:'red'}}>Go to ahmad page</button></Link>
          <br/>
          <br/>
          <Link href="/ahmad"><button style={{backgroundColor:'green'}}>Go to ghazali page</button></Link>
          <br/>
          <br/>
          <Link href="/ahmad"><button style={{backgroundColor:'yellow'}}>Go to tab page</button></Link>
          <br/>
          <br/>
          You can also create a dynamic page by entering this URL in the browser: http://localhost:3000/xyz
    </div>
  )
}
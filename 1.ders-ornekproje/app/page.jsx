import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <Link href="/hakkimizda">Hakkımzıda</Link>
      <br/>
      <Link href="/doc/post-1">Post 1</Link>
      <br/>
      <Link href="/doc/post-1/post-2">Post 2</Link>
      <br/>
      <Link 
        className="test" 
        target="_blank"
        href={{
          pathname: "/hakkimizda",
          query: {
            name: "Next.js",
            surname: "ff"
          },
        }}
      >
        Hakkimizda Obje ile
      </Link>
    </div>
  )
}

export default HomePage
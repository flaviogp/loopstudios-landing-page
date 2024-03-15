const Socials = () => {
  return (
    <ul 
        className=" 
            w-full flex gap-10 justify-center h-10
            [&>li]:bg-contain [&>li]:bg-center [&>li]:bg-no-repeat [&>li]:w-10 [&>li]:h-10
            [&>li>a]:w-full [&>li>a]:h-full [&>li>a]:block
        "
    >
        <li className="bg-tw-icon-facebook">
            <a href="http://facebook.com" target="_blank"></a>
        </li>
        <li className="bg-tw-icon-twitter">
            <a href="http://twitter.com" target="_blank"></a>
        </li>
        <li className="bg-tw-icon-pinterest">
            <a href="http://pinterest.com" target="_blank"></a>
        </li>
        <li className="bg-tw-icon-instagram">
            <a href="http://instagram.com" target="_blank"></a>
        </li>
    </ul>
  )
}

export default Socials
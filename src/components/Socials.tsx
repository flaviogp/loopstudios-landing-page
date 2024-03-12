const Socials = () => {
  return (
    <ul 
        className=" 
            w-full flex gap-7 justify-center h-8
            [&>li]:bg-contain [&>li]:bg-center [&>li]:bg-no-repeat [&>li]:w-8 [&>li]:h-8
            [&>li>a]:w-full [&>li>a]:h-full [&>li>a]:cursor-pointer [&>li>a]:block
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
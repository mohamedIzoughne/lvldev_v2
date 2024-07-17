const MainTitle = ({ children, className }) => {
  return (
    <h3 className={'text-center text-6xl py-2 hadari ' + className}>
      {children}
    </h3>
  )
}

export default MainTitle

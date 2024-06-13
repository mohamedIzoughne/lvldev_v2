const MainButton = ({ className, children }) => {
  return (
    <button
      className={
        'bg-secondary min-w-[68px] h-[31px] flex justify-center items-center rounded-[8px] p-2 ' +
        className
      }
    >
      {children}
    </button>
  )
}

export default MainButton

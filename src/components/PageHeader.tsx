type PageHeaderProps = {
  title: string
}

const PageHeader = ({ title }: PageHeaderProps) => {
  return (
    <div className="flex h-72 w-full flex-col justify-end bg-[#d0ff00] px-40">
      <div>
        <h1 className="text-6xl">{title}</h1>
      </div>
    </div>
  
  )
}

export default PageHeader

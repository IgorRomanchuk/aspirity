export default function Header() {
  return (
    <>
      <header className="flex justify-between items-center h-[88px] size-full">
        <img
          src="/logo.svg"
          alt="logo"
          className="dark:invert max-[630px]:ml-[16px]"
          width={180}
          height={40}
        />
        <div className="flex items-center">
          <div className="flex items-center w-[80px] h-[36px] border-[1px] border-[#363738] rounded-[18px] mr-[19px]">
            <div>
              <img
                src="/ava.png"
                alt="avatar"
                width={24}
                height={24}
                className="rounded-[50%] ml-[16px]"
              />
            </div>
            <div className="cursor-pointer">
              <img
                src="/Union.svg"
                alt="avatar"
                width={14}
                height={8}
                className="ml-[5px]"
              />
            </div>
          </div>
          <div className="w-[18px] h-[12px] relative mr-[11px] cursor-pointer">
            <div className=" w-[18px] h-[1px] absolute right-0 top-0 bg-white rounded-sm content-['']"></div>
            <div className=" w-[18px] h-[1px] absolute right-0 top-[50%] transform -translate-y-1/2 bg-white rounded-sm content-['']"></div>
            <div className=" w-[18px] h-[1px] absolute right-0 bottom-0 bg-white rounded-sm content-['']"></div>
          </div>
        </div>
      </header>
      <div className="flex items-center h-[40px] mt-[8px] cursor-pointer  max-[630px]:ml-[24px]">
        <img src="/arrow.svg" alt="avatar" width={8} height={14} />
        <p className="text-[#76787A] text-[14px] uppercase ml-[16px] font-poppins font-semibold">
          Вернуться к сотрудникам
        </p>
      </div>
    </>
  )
}

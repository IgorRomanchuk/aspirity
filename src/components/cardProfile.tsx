import { buttons } from '@/constants/values'

interface IProps {
  setInfo: (e: string) => void
  info: string
}

export default function CardProfile({ info, setInfo }: IProps) {
  return (
    <div className="h-[384px] bg-[#232324] rounded-[12px] mt-[8px] mb-[16px]  max-[630px]:h-[452px]">
      <div className="flex pl-[40px] pt-[40px]  max-[630px]:flex-col  max-[630px]:pt-[32px]  max-[630px]:p-0">
        <img
          src="ava.png"
          alt="avatar"
          width={160}
          height={160}
          className="rounded-[50%] h-[160px] w-[160px] max-[630px]:m-auto max-[630px]:mb-[16px]"
        />
        <div className="pl-[48px] max-[630px]:m-auto max-[630px]:p-0 max-[630px]:text-center">
          <h1 className="text-[#E1E3E6] text-[48px] font-semibold font-poppins max-[630px]:text-[24px] max-[630px]:font-bold max-[630px]:mb-[24px] max-[630px]:h-[64px]">
            <span>Иванов</span>
            <br /> Иван Иванович
          </h1>
          <div className=" h-[64px] flex flex-col justify-between">
            <h3 className="font-poppins font-normal text-[16px] text-[#E1E3E6]">
              <span className="hidden max-[630px]:inline">Junior </span>
              UI/UX designer
            </h3>
            <h3 className="font-poppins font-normal text-[16px] text-[#E1E3E6]">
              Россия, Красноярск{' '}
              <span className="hidden w-[4px] h-[4px] rounded-[50%] bg-[#76787A] mr-[7px] ml-[7px] mb-[3px] max-[630px]:inline-block "></span>
              <span className="hidden text-[#76787A] max-[630px]:inline">
                14:30
              </span>
            </h3>
          </div>
        </div>
      </div>
      <div className="flex text-center h-[40px] mt-[52px] ml-[40px] max-[630px]:m-auto max-[630px]:mt-[32px] max-[630px]:max-w-[315px]">
        {buttons.map((item) => {
          const style =
            info === item.key
              ? 'text-[#E1E3E6] border-b-[#0047BB]'
              : 'text-[#B0B1B6] border-b-[#B0B1B6] hover:text-[#0047BB]'
          return (
            <div
              key={item.key}
              onClick={() => setInfo(item.key)}
              style={{ width: item.width }}
              className={`cursor-pointer  uppercase text-[14px] h-[40px] border-b-[1px] font-semibold ${style}`}
            >
              {item.name}
            </div>
          )
        })}
      </div>
    </div>
  )
}

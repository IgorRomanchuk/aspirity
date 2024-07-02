'use client'
import { Button } from '@mui/material'
import { useState } from 'react'

import TeamModal from './modals/Team'

export default function EmployeeLoad() {
  const [open, setOpen] = useState<boolean>(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div className="max-w-[658px] bg-[#232324] rounded-[12px] grow h-[484px] max-[1190px]:h-[600px]">
      <div className="max-w-[658px] m-auto p-[30px] max-[630px]:pr-[16px] max-[630px]:pl-[16px]">
        <div className="h-[32px] flex items-center justify-between mb-[40px] max-[1190px]:mb-[32px]">
          <h1 className="text-[24px] font-normal font-poppins text-[#E1E3E6]">
            Загрузка сотрудника
          </h1>
          <p className="text-[#D77556] text-[14px] font-medium font-poppins">
            100%
          </p>
        </div>
        <div className="flex h-[56px] mb-[40px]  max-[1190px]:mb-[32px] max-[768px]:flex-col max-[768px]:h-auto  max-[768px]:mb-[16px]">
          <div className="flex h-[56px] flex-col justify-between pr-[124px] max-[768px]:h-[56px] max-[768px]:mb-[16px]">
            <p className="text-[#76787A] text-[16px] font-normal font-poppins">
              Название проекта
            </p>
            <p className="text-[#E1E3E6] text-[16px] font-normal font-poppins">
              MedPoint 24
            </p>
          </div>
          <div className="flex h-[56px] flex-col justify-between">
            <p className="text-[#76787A] text-[16px] font-normal font-poppins">
              Тип проекта
            </p>
            <p className="text-[#E1E3E6] text-[16px] font-normal font-poppins">
              Коммерческий
            </p>
          </div>
        </div>
        <div className="flex h-[80px] mb-[40px] max-[1190px]:flex-col  max-[1190px]:h-auto  max-[1190px]:mb-[32px]">
          <div className="flex h-[80px] flex-col justify-between pr-[78px]  max-[1190px]:mb-[16px]">
            <p className="text-[#76787A] text-[16px] font-normal font-poppins">
              Ответственный
            </p>
            <div className="flex items-center">
              <div className="w-[48px] h-[48px] mr-[8px]">
                <img
                  src="curator.png"
                  className="w-[48px] h-[48px]"
                  alt="curator"
                />
              </div>
              <p className="text-[#E1E3E6] text-[16px] font-normal font-poppins">
                Анна Кузнецова
              </p>
            </div>
          </div>
          <div className="flex h-[80px] flex-col justify-between max-w-[293px] grow relative">
            <p className="text-[#76787A] text-[16px] font-normal font-poppins">
              Команда
            </p>
            <div className="w-[264px]">
              <img
                src="team/person1.png"
                alt="person"
                className="w-[50px] h-[50px] absolute top-[30px] left-[-2px]"
              />
              <img
                src="team/person2.png"
                alt="person"
                className="w-[50px] h-[50px] absolute top-[30px] left-[34px]"
              />
              <img
                src="team/person3.png"
                alt="person"
                className="w-[50px] h-[50px] absolute top-[30px] left-[70px]"
              />
              <img
                src="team/person4.png"
                alt="person"
                className="w-[50px] h-[50px] absolute top-[30px] left-[106px]"
              />
              <img
                src="team/person5.png"
                alt="person"
                className="w-[50px] h-[50px] absolute top-[30px] left-[142px]"
              />
              <img
                src="team/person6.png"
                alt="person"
                className="w-[50px] h-[50px] absolute top-[30px] left-[178px]"
              />
              <img
                src="team/person7.png"
                alt="person"
                className="w-[50px] h-[50px] absolute top-[30px] left-[214px]"
              />
            </div>
            <p
              onClick={handleOpen}
              className="text-right text-[#E1E3E6] font-normal font-poppins pb-[12px] cursor-pointer max-[1190px]:mt-[12px]"
            >
              +2
            </p>
          </div>
        </div>
        <div className="flex h-[56px] mb-[40px]  max-[1190px]:mb-[32px]">
          <div className="flex h-[56px] flex-col justify-between pr-[124px] max-[630px]:p-0">
            <p className="text-[#76787A] text-[16px] font-normal font-poppins">
              Сроки работы
            </p>
            <div className="text-[#E1E3E6] text-[16px] font-normal font-poppins flex items-center">
              <p>03 марта 2023</p>
              <div className="w-[18px] h-[14px] mr-[11px] ml-[11px]">
                <img src="arrow2.svg" width={18} height={14} alt="arrow" />
              </div>
              <p> 23 марта 2023</p>
            </div>
          </div>
        </div>
        <Button
          fullWidth
          className="bg-[#0047BB]"
          size="large"
          type="submit"
          variant="contained"
        >
          <p className="text-[14px] font-semibold font-poppins">
            Посмотреть всю загрузку
          </p>
        </Button>
      </div>
      {open && <TeamModal open={open} handleClose={handleClose} />}
    </div>
  )
}

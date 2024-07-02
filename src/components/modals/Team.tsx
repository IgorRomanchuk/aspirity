import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import * as React from 'react'

import { team } from '@/constants/values'
import { style } from '@/constants/values'

interface IProps {
  open: boolean
  handleClose: () => void
}

export default function TeamModal({ open, handleClose }: IProps) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={style}
          className="w-[650px] bg-[#232324] rounded-[12px] max-[670px]:w-[360px] max-[360px]:rounded-[0] max-[670px]:h-[632px]"
        >
          <div className="max-w-[820px] m-auto pl-[30px] pr-[30px] max-[670px]:pl-[16px] max-[670px]:pr-[16px]">
            <div className=" mt-[32px] h-[32px] flex items-center justify-between  max-[670px]:mt-[16px]">
              <h1 className="text-[34px] font-normal font-poppins text-[#E1E3E6] max-[670px]:text-[16px]">
                Команда
              </h1>
              <div
                onClick={handleClose}
                className="h-[14px] w-[14px] cursor-pointer"
              >
                <img src="cross.svg" alt="avatar" width={14} height={14} />
              </div>
            </div>
            <div className="mt-[40px] mb-[32px] max-[670px]:mt-[16px] max-[670px]:mb-[0]  max-[670px]:h-[560px]">
              {team.map((item) => (
                <div className="flex mb-[16px]" key={item.name}>
                  <img
                    className="w-[48px] h-[48px] mr-[8px]"
                    src={item.src}
                    alt=""
                  />
                  <div className="h-[44px]">
                    <p className="text-[#E1E3E6] text-[16px] font-normal font-poppins">
                      {item.name}
                    </p>
                    <p className="text-[#B0B1B6] text-[14px] font-normal font-poppins">
                      {item.position}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  )
}

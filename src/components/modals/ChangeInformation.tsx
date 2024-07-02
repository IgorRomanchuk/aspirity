import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import * as React from 'react'

import { style } from '@/constants/values'

import ChangeForm from '../form/ChangeForm'

interface IProps {
  open: boolean
  handleClose: () => void
  initialValues: any
  setInitialValues: (e: any) => void
}

export default function ChangeInfoModal({
  open,
  handleClose,
  initialValues,
  setInitialValues,
}: IProps) {
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
          className="w-[820px] bg-[#232324] rounded-[12px] max-[850px]:w-[360px] max-[630px]:min-h-[632px] max-[365px]:rounded-[0]"
        >
          <div className="max-w-[820px] m-auto pl-[30px] pr-[30px] max-[850px]:pr-[16px] max-[850px]:pl-[16px]">
            <div className=" mt-[32px] h-[36px] flex items-center justify-between max-[850px]:mt-[16px] max-[850px]:mb-[24px] max-[850px]:h-[24px]">
              <h1 className="text-[34px] font-normal font-poppins text-[#E1E3E6] max-[850px]:text-[16px]">
                Персональная информация
              </h1>
              <div
                onClick={handleClose}
                className="h-[14px] w-[14px] cursor-pointer"
              >
                <img src="cross.svg" alt="avatar" width={14} height={14} />
              </div>
            </div>

            <ChangeForm
              handleClose={handleClose}
              initialValues={initialValues}
              setInitialValues={setInitialValues}
            />
          </div>
        </Box>
      </Modal>
    </div>
  )
}

'use client'
import { useFormik } from 'formik'
import { useState } from 'react'

import { InitialValues } from '@/types/InitialValues'

import ViewForm from './form/ViewForm'
import ChangeInfoModal from './modals/ChangeInformation'

export default function PersonalInformation() {
  const [open, setOpen] = useState<boolean>(false)
  const [initialValues, setInitialValues] = useState<InitialValues>({
    name: 'Юрий',
    lastName: 'Герыш',
    surname: 'Андреевич',
    dateOfBirth: '06.01.2014',
    dateOfEmployment: '15.05.2020',
    country: 'Россия',
    city: 'Красноярск',
    position: 'UI/UX designer',
    email: 'test@gmail.com',
  })
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const formik = useFormik({
    initialValues: initialValues,
    enableReinitialize: true,
    onSubmit: () => {},
  })

  return (
    <div className="max-w-[820px] h-[420px] bg-[#232324] rounded-[12px] grow max-[768px]:h-auto">
      <div className="max-w-[820px] m-auto p-[30px] max-[630px]:pl-[16px] max-[630px]:pr-[16px]">
        <div className="h-[32px] flex items-center justify-between">
          <h1 className="text-[24px] font-normal font-poppins text-[#E1E3E6] max-[768px]:text-[16px] max-[630px]:text-[16px] max-[630px]:font-medium">
            Персональная информация
          </h1>
          <p
            onClick={handleOpen}
            className="text-[#76787A] text-[14px] cursor-pointer font-medium font-poppins max-[630px]:font-medium"
          >
            Изменить
          </p>
        </div>
        <ViewForm formik={formik} />
        {open && (
          <ChangeInfoModal
            open={open}
            handleClose={handleClose}
            initialValues={initialValues}
            setInitialValues={setInitialValues}
          />
        )}
      </div>
    </div>
  )
}

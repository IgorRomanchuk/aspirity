'use client'
import { TextField } from '@mui/material'
import { Form, FormikProps, FormikProvider } from 'formik'

import { InitialValues } from '@/types/InitialValues'
const sx = {
  '& .MuiOutlinedInput-root': {
    color: '#B0B1B6',
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#363738',
    },
  },
  '& .MuiInputLabel-outlined': {
    color: '#B0B1B6',
    '&.Mui-focused': {
      fontWeight: 'bold',
    },
  },
}

interface IProps {
  formik: FormikProps<InitialValues>
}

export default function ViewForm({ formik }: IProps) {
  const { getFieldProps } = formik

  return (
    <FormikProvider value={formik}>
      <Form onSubmit={formik.handleSubmit}>
        <div className="flex gap-[24px] mb-[24px] mt-[32px] max-[768px]:flex-col max-[630px]:gap-[0] max-[630px]:mb-[24px] max-[630px]:mt-[24px]">
          <TextField
            fullWidth
            className="max-w-[368px] max-[630px]:max-w-[100%] max-[630px]:mb-[24px]"
            sx={sx}
            id="outlined-read-only-input"
            label="Имя"
            {...getFieldProps('name')}
            InputProps={{
              readOnly: true,
              style: {
                height: '40px',
              },
            }}
          />
          <TextField
            fullWidth
            className="max-w-[368px] max-[630px]:max-w-[100%]"
            sx={sx}
            id="outlined-read-only-input"
            label="Фамилия"
            {...getFieldProps('lastName')}
            InputProps={{
              readOnly: true,
              style: {
                height: '40px',
              },
            }}
          />
        </div>
        <TextField
          fullWidth
          id="outlined-read-only-input"
          sx={sx}
          label="Отчество"
          {...getFieldProps('surname')}
          InputProps={{
            readOnly: true,
            style: {
              height: '40px',
            },
          }}
        />
        <div className="flex gap-[24px] mb-[24px] mt-[24px] max-[768px]:flex-col max-[630px]:gap-[0] max-[630px]:mb-[0]">
          <TextField
            fullWidth
            className="max-w-[368px] max-[630px]:max-w-[100%] max-[630px]:mb-[24px]"
            sx={sx}
            id="outlined-read-only-input"
            label="Дата Рождения"
            {...getFieldProps('dateOfBirth')}
            InputProps={{
              readOnly: true,
              style: {
                height: '40px',
              },
            }}
          />
          <TextField
            fullWidth
            className="max-w-[368px] max-[630px]:max-w-[100%] max-[630px]:mb-[24px]"
            sx={sx}
            id="outlined-read-only-input"
            label="Дата Трудоустройства"
            {...getFieldProps('dateOfEmployment')}
            InputProps={{
              readOnly: true,
              style: {
                height: '40px',
              },
            }}
          />
        </div>
        <div className="flex gap-[24px] mb-[24px] max-[768px]:flex-col max-[630px]:gap-[0] max-[630px]:mb-[0]">
          <TextField
            fullWidth
            className="max-w-[368px] max-[630px]:max-w-[100%] max-[630px]:mb-[24px]"
            sx={sx}
            id="outlined-read-only-input"
            label="Страна"
            {...getFieldProps('country')}
            InputProps={{
              readOnly: true,
              style: {
                height: '40px',
              },
            }}
          />
          <TextField
            fullWidth
            className="max-w-[368px] max-[630px]:max-w-[100%] max-[630px]:gap-[0] max-[630px]:mb-[24px]"
            sx={sx}
            id="outlined-read-only-input"
            label="Город"
            {...getFieldProps('city')}
            InputProps={{
              readOnly: true,
              style: {
                height: '40px',
              },
            }}
          />
        </div>
        <div className="flex gap-[24px] max-[768px]:flex-col max-[630px]:gap-[0] max-[630px]:mb-[0]">
          <TextField
            fullWidth
            className="max-w-[368px] max-[630px]:max-w-[100%] max-[630px]:mb-[24px]"
            sx={sx}
            id="outlined-read-only-input"
            label="Должность"
            {...getFieldProps('position')}
            InputProps={{
              readOnly: true,
              style: {
                height: '40px',
              },
            }}
          />
          <TextField
            fullWidth
            className="max-w-[368px] max-[630px]:max-w-[100%]"
            sx={sx}
            id="outlined-read-only-input"
            label="Электронная почта"
            {...getFieldProps('email')}
            InputProps={{
              readOnly: true,
              style: {
                height: '40px',
              },
            }}
          />
        </div>
      </Form>
    </FormikProvider>
  )
}

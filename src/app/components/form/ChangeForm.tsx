'use client'
import { LoadingButton } from '@mui/lab'
import { TextField } from '@mui/material'
import { Form, FormikProvider, useFormik } from 'formik'
import * as Yup from 'yup'

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
  handleClose: () => void
  initialValues: InitialValues
  setInitialValues: (e: InitialValues) => void
}

export default function ChangeForm({
  handleClose,
  initialValues,
  setInitialValues,
}: IProps) {
  const InfoSchema = Yup.object().shape({
    name: Yup.string().required('Поле обязательно'),
    lastName: Yup.string().required('Поле обязательно'),
    surname: Yup.string().required('Поле обязательно'),
    dateOfBirth: Yup.string().required('Поле обязательно'),
    dateOfEmployment: Yup.string().required('Поле обязательно'),
    country: Yup.string().required('Поле обязательно'),
    city: Yup.string().required('Поле обязательно'),
    position: Yup.string().required('Поле обязательно'),
    email: Yup.string().email('Введите email').required('Поле обязательно'),
  })

  const formik = useFormik({
    initialValues,
    validationSchema: InfoSchema,
    onSubmit: () => {
      onSubmit()
      handleClose()
    },
  })

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps, values } =
    formik
  const onSubmit = () => {
    setInitialValues({ ...values })
  }
  return (
    <FormikProvider value={formik}>
      <Form onSubmit={handleSubmit}>
        <div className="flex gap-[24px] mb-[24px] mt-[32px] max-[768px]:flex-col max-[630px]:gap-[0] max-[630px]:mt-[0] max-[630px]:mb-[16px]">
          <TextField
            fullWidth
            className="max-w-[368px] text-[white] max-[630px]:mb-[16px]"
            sx={sx}
            id="outlined-read-only-input"
            label="Имя"
            {...getFieldProps('name')}
            error={Boolean(touched.name && errors.name)}
            helperText={touched.name && errors.name ? <>{errors.name}</> : null}
            InputProps={{
              style: {
                height: '40px',
              },
            }}
          />
          <TextField
            fullWidth
            className="max-w-[368px]"
            sx={sx}
            id="outlined-read-only-input"
            label="Фамилия"
            {...getFieldProps('lastName')}
            error={Boolean(touched.lastName && errors.lastName)}
            helperText={
              touched.lastName && errors.lastName ? (
                <>{errors.lastName}</>
              ) : null
            }
            InputProps={{
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
          error={Boolean(touched.surname && errors.surname)}
          helperText={
            touched.surname && errors.surname ? <>{errors.surname}</> : null
          }
          InputProps={{
            style: {
              height: '40px',
            },
          }}
        />
        <div className="flex gap-[24px] mb-[24px] mt-[24px] max-[768px]:flex-col max-[630px]:gap-[0] max-[630px]:mb-[16px] max-[630px]:mt-[16px]">
          <TextField
            fullWidth
            className="max-w-[368px] max-[630px]:mb-[16px]"
            sx={sx}
            id="outlined-read-only-input"
            label="Дата Рождения"
            {...getFieldProps('dateOfBirth')}
            error={Boolean(touched.dateOfBirth && errors.dateOfBirth)}
            helperText={
              touched.dateOfBirth && errors.dateOfBirth ? (
                <>{errors.dateOfBirth}</>
              ) : null
            }
            InputProps={{
              style: {
                height: '40px',
              },
            }}
          />
          <TextField
            fullWidth
            className="max-w-[368px]"
            sx={sx}
            id="outlined-read-only-input"
            label="Дата Трудоустройства"
            {...getFieldProps('dateOfEmployment')}
            error={Boolean(touched.dateOfEmployment && errors.dateOfEmployment)}
            helperText={
              touched.dateOfEmployment && errors.dateOfEmployment ? (
                <>{errors.dateOfEmployment}</>
              ) : null
            }
            InputProps={{
              style: {
                height: '40px',
              },
            }}
          />
        </div>
        <div className="flex gap-[24px] mb-[24px] max-[768px]:flex-col max-[630px]:gap-[0] max-[630px]:mb-[16px]">
          <TextField
            fullWidth
            className="max-w-[368px] max-[630px]:mb-[16px]"
            sx={sx}
            id="outlined-read-only-input"
            label="Страна"
            {...getFieldProps('country')}
            error={Boolean(touched.country && errors.country)}
            helperText={
              touched.country && errors.country ? <>{errors.country}</> : null
            }
            InputProps={{
              style: {
                height: '40px',
              },
            }}
          />
          <TextField
            fullWidth
            className="max-w-[368px]"
            sx={sx}
            id="outlined-read-only-input"
            label="Город"
            {...getFieldProps('city')}
            error={Boolean(touched.city && errors.city)}
            helperText={touched.city && errors.city ? <>{errors.city}</> : null}
            InputProps={{
              style: {
                height: '40px',
              },
            }}
          />
        </div>
        <div className="flex gap-[24px] pb-[30px] max-[768px]:flex-col max-[630px]:gap-[0] max-[630px]:pb-[0]">
          <TextField
            fullWidth
            className="max-w-[368px] max-[630px]:mb-[16px]"
            sx={sx}
            id="outlined-read-only-input"
            label="Должность"
            {...getFieldProps('position')}
            error={Boolean(touched.position && errors.position)}
            helperText={
              touched.position && errors.position ? (
                <>{errors.position}</>
              ) : null
            }
            InputProps={{
              style: {
                height: '40px',
              },
            }}
          />
          <TextField
            fullWidth
            className="max-w-[368px]"
            sx={sx}
            id="outlined-read-only-input"
            label="Электронная почта"
            {...getFieldProps('email')}
            error={Boolean(touched.email && errors.email)}
            helperText={
              touched.email && errors.email ? <>{errors.email}</> : null
            }
            InputProps={{
              style: {
                height: '40px',
              },
            }}
          />
        </div>
        <LoadingButton
          fullWidth
          className="mb-[32px] h-[40px] bg-[#0047BB] max-[630px]:mt-[24px] max-[630px]:mb-[16px]"
          size="large"
          type="submit"
          variant="contained"
          loading={isSubmitting}
        >
          Сохранить
        </LoadingButton>
      </Form>
    </FormikProvider>
  )
}

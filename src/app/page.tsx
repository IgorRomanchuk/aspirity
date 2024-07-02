'use client'
import { useState } from 'react'

import CardProfile from '@/components/cardProfile'
import EmployeeLoad from '@/components/employeeLoad'
import PersonalInformation from '@/components/personalInformation'
import Statistics from '@/components/statistics'

export default function Home() {
  const [info, setInfo] = useState<string>('personalInfo')

  return (
    <main className="min-h-screen max-w-[1494px] m-auto ">
      <CardProfile info={info} setInfo={setInfo} />
      <div className="flex gap-[10px] max-[630px]:flex-col">
        {info === 'personalInfo' ? (
          <>
            <PersonalInformation />
            <EmployeeLoad />
          </>
        ) : (
          <Statistics />
        )}
      </div>
    </main>
  )
}

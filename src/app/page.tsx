import CardProfile from './components/cardProfile'
import EmployeeLoad from './components/employeeLoad'
import Header from './components/header'
import PersonalInformation from './components/personalInformation'

export default function Home() {
  return (
    <main className="min-h-screen max-w-[1494px] m-auto ">
      <Header />
      <CardProfile />
      <div className="flex gap-[10px] max-[630px]:flex-col">
        <PersonalInformation />
        <EmployeeLoad />
      </div>
    </main>
  )
}

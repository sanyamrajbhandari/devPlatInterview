import RequestCard from "../components/RequestCard"
function Dashboard() {
  return (
      <div className="flex">

        <div className="w-2/5">
            <div>
                <p>Manage attendance, late slips, and leave requests in one place</p>
                <p className='text-[40px]'>Welcome Back, Jeeshnu Maharjan!</p>
            </div>

            <div>

            </div>
        </div>

        <div className="w-3/5">
            <div className="flex justify-between gap-3">
                <RequestCard></RequestCard>
                <RequestCard></RequestCard>
                <RequestCard></RequestCard>
            </div>
               
            <div>

            </div>

        </div>
      </div>
  )
}

export default Dashboard
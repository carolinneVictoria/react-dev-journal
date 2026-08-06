import DirectionsRunIcon from '@mui/icons-material/DirectionsRun'
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment'
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart'

function WorkoutCard({ workout, onDelete }) {
  const {
    user,
    time,
    stats,
    description
  } = workout

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-5 relative">
        {onDelete && (
          <button
            onClick={() => onDelete(workout.id)}
            className="absolute top-3 right-3 text-gray-400 hover:text-red-500"
            title="Deletar treino"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        )}
        {/* Time */}
        <div className="mb-4">
          <span className="text-sm text-gray-600">Tempo:</span>
          <div className="text-xl font-bold text-gray-900">
            {formatTime(time)}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-1 mb-4">
          <div className="bg-brand-green-lime rounded-lg px-3 py-2.5 text-center flex flex-col items-center justify-center min-h-[75px]">
            <DirectionsRunIcon className="w-4 h-4 text-black mb-1" />
            <div className="text-[10px] font-bold text-black mb-0.5 leading-tight">Distância</div>
            <div className="text-xs font-bold text-black leading-tight">{stats.distance}</div>
          </div>
          <div className="bg-brand-green-lime rounded-lg px-3 py-2.5 text-center flex flex-col items-center justify-center min-h-[75px]">
            <LocalFireDepartmentIcon className="w-4 h-4 text-black mb-1" />
            <div className="text-[10px] font-bold text-black mb-0.5 leading-tight">Calorias</div>
            <div className="text-xs font-bold text-black leading-tight">{stats.calories}</div>
          </div>
          <div className="bg-brand-green-lime rounded-lg px-3 py-2.5 text-center flex flex-col items-center justify-center min-h-[75px]">
            <MonitorHeartIcon className="w-4 h-4 text-black mb-1" />
            <div className="text-[10px] font-bold text-black mb-0.5 leading-tight">Batimentos</div>
            <div className="text-xs font-bold text-black leading-tight">{stats.heartRate}</div>
          </div>
        </div>

        {/* User info */}
        <div className="flex items-center mb-3">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
            {user.name.charAt(0)}
          </div>
          <span className="ml-2 text-sm font-medium text-gray-900">{user.name}</span>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  )
}

export default WorkoutCard
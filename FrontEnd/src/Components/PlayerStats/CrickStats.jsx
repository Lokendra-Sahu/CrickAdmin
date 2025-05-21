import React, { useState } from 'react';
import { useAuthContext } from '../../context/AuthContext';

const CrickStats = () => {
  const { authUser } = useAuthContext();

  // Initial stats state
  const [stats, setStats] = useState({
    matches: 0,
    innings: 0,
    runs: 0,
    strikeRate: 0,
    highScore: 0,
    wickets: 0,
    economy: 0,
    bestPerformance: '0/0',
  });

  // Edit mode state
  const [isEditing, setIsEditing] = useState(false);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStats({ ...stats, [name]: value });
  };

  // Toggle edit mode
  const handleUpdate = () => {
    setIsEditing(true);
  };

  // Save updated stats
  const handleSave = () => {
    setIsEditing(false);
    console.log('Updated Stats:', stats);
    // You can implement the backend save functionality later
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10 px-4">
      <div className="max-w-3xl w-full bg-white rounded-lg shadow-lg p-8">
        {/* Player Role */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-red-600">{authUser.fullName}: All Rounder</h2>
        </div>

        {/* Player Details */}
        <div className="grid grid-cols-2 gap-4 bg-green-100 p-4 rounded-lg mb-6">
          <div>
            <p><span className="font-semibold">Batting Order:</span> Opener</p>
          </div>
          <div>
            <p><span className="font-semibold">Batting Style:</span> Right Hand</p>
          </div>
          <div>
            <p><span className="font-semibold">Bowler Type:</span> Medium Fast</p>
          </div>
          <div>
            <p><span className="font-semibold">Bowling Action:</span> Right Arm</p>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-red-600">CricHeroes Statistics</h3>
        </div>

        {/* Editable Statistics Table */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 bg-green-100 p-4 rounded-lg text-center">
          <div>
            <p className="font-semibold text-purple-600">Matches</p>
            <input
              type="number"
              name="matches"
              value={stats.matches}
              onChange={handleInputChange}
              disabled={!isEditing}
              className={`w-full text-center px-2 py-1 border rounded-lg ${
                isEditing ? 'border-gray-400' : 'bg-gray-100'
              }`}
            />
          </div>
          <div>
            <p className="font-semibold text-purple-600">Innings</p>
            <input
              type="number"
              name="innings"
              value={stats.innings}
              onChange={handleInputChange}
              disabled={!isEditing}
              className={`w-full text-center px-2 py-1 border rounded-lg ${
                isEditing ? 'border-gray-400' : 'bg-gray-100'
              }`}
            />
          </div>
          <div>
            <p className="font-semibold text-purple-600">Runs</p>
            <input
              type="number"
              name="runs"
              value={stats.runs}
              onChange={handleInputChange}
              disabled={!isEditing}
              className={`w-full text-center px-2 py-1 border rounded-lg ${
                isEditing ? 'border-gray-400' : 'bg-gray-100'
              }`}
            />
          </div>
          <div>
            <p className="font-semibold text-purple-600">S/R</p>
            <input
              type="number"
              name="strikeRate"
              value={stats.strikeRate}
              onChange={handleInputChange}
              disabled={!isEditing}
              className={`w-full text-center px-2 py-1 border rounded-lg ${
                isEditing ? 'border-gray-400' : 'bg-gray-100'
              }`}
            />
          </div>
          <div>
            <p className="font-semibold text-purple-600">High Score</p>
            <input
              type="number"
              name="highScore"
              value={stats.highScore}
              onChange={handleInputChange}
              disabled={!isEditing}
              className={`w-full text-center px-2 py-1 border rounded-lg ${
                isEditing ? 'border-gray-400' : 'bg-gray-100'
              }`}
            />
          </div>
          <div>
            <p className="font-semibold text-purple-600">Wickets</p>
            <input
              type="number"
              name="wickets"
              value={stats.wickets}
              onChange={handleInputChange}
              disabled={!isEditing}
              className={`w-full text-center px-2 py-1 border rounded-lg ${
                isEditing ? 'border-gray-400' : 'bg-gray-100'
              }`}
            />
          </div>
          <div>
            <p className="font-semibold text-purple-600">Eco</p>
            <input
              type="number"
              name="economy"
              value={stats.economy}
              onChange={handleInputChange}
              disabled={!isEditing}
              className={`w-full text-center px-2 py-1 border rounded-lg ${
                isEditing ? 'border-gray-400' : 'bg-gray-100'
              }`}
            />
          </div>
          <div>
            <p className="font-semibold text-purple-600">High Perf.</p>
            <input
              type="text"
              name="bestPerformance"
              value={stats.bestPerformance}
              onChange={handleInputChange}
              disabled={!isEditing}
              className={`w-full text-center px-2 py-1 border rounded-lg ${
                isEditing ? 'border-gray-400' : 'bg-gray-100'
              }`}
            />
          </div>
        </div>

        {/* Buttons for Updating and Saving */}
        <div className="mt-8 flex justify-end space-x-4">
          {isEditing ? (
            <button
              onClick={handleSave}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Save Stats
            </button>
          ) : (
            <button
              onClick={handleUpdate}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Update Stats
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CrickStats;

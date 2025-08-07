#!/bin/bash

echo "🚀 Starting The Strong Moms Application..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

# Install backend dependencies
echo "📦 Installing backend dependencies..."
cd backend
npm install

# Install frontend dependencies
echo "📦 Installing frontend dependencies..."
cd ../frontend
npm install

# Start backend server
echo "🔧 Starting backend server..."
cd ../backend
npm run dev &
BACKEND_PID=$!

# Wait a moment for backend to start
sleep 3

# Start frontend development server
echo "🎨 Starting frontend development server..."
cd ../frontend
npm run dev &
FRONTEND_PID=$!

echo "✅ Application is starting up!"
echo "📍 Backend: http://localhost:5001"
echo "📍 Frontend: http://localhost:5173"
echo "📍 API Health Check: http://localhost:5001/api/health"
echo ""
echo "Press Ctrl+C to stop both servers"

# Wait for both processes
wait $BACKEND_PID $FRONTEND_PID 
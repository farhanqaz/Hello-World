export default function Home() {
  return (
    <div className="min-h-screen bg-black text-green-500 font-mono p-4 overflow-hidden">
      {/* Terminal Header */}
      <div className="border border-green-500/30 bg-black/90 backdrop-blur-sm p-2 mb-4 rounded-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          </div>
          <div className="text-green-400 text-xs">terminal@hackersystem:/hello-world</div>
        </div>
      </div>

      {/* Main Terminal Content - PURE HELLO WORLD REPETITION */}
      <div className="border border-green-500/30 bg-black/90 backdrop-blur-sm p-4 rounded-sm relative overflow-hidden">
        {/* Terminal scan line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500/50 to-transparent animate-pulse"></div>
        
        {/* Main Hello World Display - EXTREME REPETITION */}
        <div className="relative z-10 space-y-1">
          {/* MASSIVE REPETITION OF HELLO WORLD */}
          {Array.from({ length: 5000 }).map((_, i) => (
            <div
              key={i}
              className={`
                text-green-400 text-sm font-bold
                animate-pulse
                ${i % 2 === 0 ? 'text-red-500' : ''}
                ${i % 3 === 0 ? 'text-cyan-400' : ''}
                ${i % 5 === 0 ? 'text-purple-400' : ''}
                ${i % 7 === 0 ? 'text-yellow-400' : ''}
                ${i % 11 === 0 ? 'text-pink-400' : ''}
              `}
              style={
                {
                  fontFamily: 'monospace',
                  textShadow: i % 2 === 0 ? '0 0 10px rgba(239, 68, 68, 0.8)' : 'none',
                  animationDelay: `${(i * 0.0001) % 3}s`,
                  animationDuration: `${1 + (i % 5)}s`
                }
              }
            >
              hello world
            </div>
          ))}
          
          {/* MORE REPETITION */}
          {Array.from({ length: 3000 }).map((_, i) => (
            <div
              key={`repeat-${i}`}
              className={`
                text-green-600 text-xs font-mono
                animate-pulse
                ${i % 4 === 0 ? 'text-red-600' : ''}
                ${i % 6 === 0 ? 'text-cyan-600' : ''}
                ${i % 9 === 0 ? 'text-purple-600' : ''}
              `}
              style={
                {
                  fontFamily: 'monospace',
                  opacity: 0.7 + (Math.random() * 0.3),
                  animationDelay: `${(i * 0.0005) % 2}s`,
                  transform: `rotate(${(i % 180) - 90}deg) scale(${0.8 + Math.random() * 0.4})`
                }
              }
            >
              hello world
            </div>
          ))}
          
          {/* FINAL REPETITION */}
          <div className="border-t border-green-500/30 pt-4 mt-4">
            <div className="text-center space-y-2">
              <div className="text-green-400 font-mono text-lg animate-pulse">
                ════════════════ SYSTEM INITIALIZED ════════════════
              </div>
              
              <div className="text-green-300 text-4xl font-black animate-pulse">
                {Array.from({ length: 200 }).map((_, i) => (
                  <span key={i} className={i % 2 === 0 ? 'text-red-500' : 'text-cyan-400'}>
                    hello world{' '}
                  </span>
                ))}
              </div>
              
              <div className="text-green-500 font-mono text-lg">
                {Array.from({ length: 500 }).map((_, i) => (
                  <span key={i} className={i % 5 === 0 ? 'text-yellow-400' : ''}>
                    {'▄▐•▌▐░▌▐░▌▐░▌ '}
                  </span>
                ))}
              </div>
              
              {/* FINAL CHAOTIC MESSAGE */}
              <div className="bg-black/80 border border-green-500/50 p-4 rounded-sm mt-4">
                <div className="text-green-400 font-mono text-lg space-y-2">
                  <div>INITIALIZING... hello world</div>
                  <div>┌─────────────────────────────────┐</div>
                  <div>|   SYSTEM: hello world           |</div>
                  <div>|   STATUS: READY                 |</div>
                  <div>└─────────────────────────────────┘</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* CRT effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-900/20 to-transparent pointer-events-none rounded-sm"></div>
        <div className="absolute inset-0 bg-black/20 pointer-events-none rounded-sm"></div>
      </div>
      
      {/* Terminal footer */}
      <div className="border border-green-500/30 bg-black/90 backdrop-blur-sm p-2 mt-4 rounded-sm">
        <div className="flex justify-between items-center text-green-500 text-xs font-mono">
          <div>root@hackersystem:~/hello-world</div>
          <div>[READY - 100%]</div>
        </div>
      </div>
    </div>
  )
}
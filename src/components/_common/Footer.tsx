import React from 'react'

const Footer = () => {
  return (
      <footer className="max-w-7xl mx-auto px-6 py-10 text-slate-400">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center">LD</div>
            <div>
              <div className="font-semibold">LeadDeck</div>
              <div className="text-xs text-slate-400">© {new Date().getFullYear()} — All rights reserved</div>
            </div>
          </div>

          <div className="text-sm">Built By SlassUI</div>
        </div>
      </footer>
  )
}

export default Footer

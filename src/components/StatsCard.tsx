import React from "react"

export type StatsCardProps = {
    title: string,
    value: number | string,
    icon?: React.ReactNode,
    description?: string
}

export default function StatsCards({
    title,
    value,
    icon,
    description,
}: StatsCardProps) {
    return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-lg hover:scale-[1.02] transition-transform duration-300">
      
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm text-zinc-400 font-medium">
          {title}
        </h3>

        {icon && (
          <div className="text-emerald-400 text-xl">
            {icon}
          </div>
        )}
      </div>

      <p className="text-3xl font-bold text-white">
        {value}
      </p>

      {description && (
        <p className="text-xs text-zinc-500 mt-2">
          {description}
        </p>
      )}
    </div>
  )
}

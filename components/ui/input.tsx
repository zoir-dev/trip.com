import * as React from "react"

import { cn } from "@/lib/utils"
import { Eye, EyeOff } from "lucide-react"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> { }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const [hide, setHide] = React.useState(false)
    return (
      <div className="w-full relative">
        <input
          type={type === 'password' ? (hide ? 'text' : 'password') : type}
          className={cn(
            "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 pr-8",
            className
          )}
          ref={ref}
          {...props}
        />

        {type === 'password' && (
          !hide ? <Eye onClick={() => setHide(!hide)} className="absolute right-1 p-1 box-content top-2 cursor-pointer text-muted-foreground -translate-y-[6px]" width={20} /> : <EyeOff onClick={() => setHide(!hide)} className="absolute right-1 p-1 box-content -translate-y-[6px] top-2 cursor-pointer text-muted-foreground" width={20} />
        )}

      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }

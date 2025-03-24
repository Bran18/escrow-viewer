import { Badge } from "@/components/ui/badge"
import { CheckCircle, XCircle, AlertCircle } from "lucide-react"

interface StatusBadgeProps {
  status: "true" | "false" | "pending" | "approved" | "completed" | string
  type?: "dispute" | "release" | "resolve" | "milestone"
}

export const StatusBadge = ({ status, type = "milestone" }: StatusBadgeProps) => {
  const lowerStatus = status.toString().toLowerCase()
  
  if (lowerStatus === "true") {
    let text = "Active"
    const icon = <CheckCircle size={14} className="mr-1" />;
    
    if (type === "dispute") text = "Disputed"
    if (type === "release") text = "Released"
    if (type === "resolve") text = "Resolved"
    
    return (
      <Badge className="bg-blue-500 hover:bg-blue-600">
        {icon} {text}
      </Badge>
    )
  }
  
  if (lowerStatus === "approved" || lowerStatus === "completed") {
    return (
      <Badge className="bg-green-500 hover:bg-green-600">
        <CheckCircle size={14} className="mr-1" /> {lowerStatus === "approved" ? "Approved" : "Completed"}
      </Badge>
    )
  }
  
  if (lowerStatus === "pending") {
    return (
      <Badge variant="outline" className="text-amber-600 border-amber-300">
        <AlertCircle size={14} className="mr-1" /> Pending
      </Badge>
    )
  }
  
  if (lowerStatus === "false") {
    let text = "Inactive";
    
    if (type === "dispute") text = "Not Disputed";
    if (type === "release") text = "Not Released";
    if (type === "resolve") text = "Not Resolved";
    
    return (
      <Badge variant="outline" className="text-gray-500">
        <XCircle size={14} className="mr-1" /> {text}
      </Badge>
    )
  }
  
  return (
    <Badge variant="secondary">
      {lowerStatus}
    </Badge>
  )
}
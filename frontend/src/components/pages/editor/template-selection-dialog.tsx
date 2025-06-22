
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Palette, Sparkles, Minimize2 } from "lucide-react"

interface TemplateSelectionDialogProps {
    open: boolean
    onSelect: (template: string) => void
}

const templates = [
    {
        id: "modern",
        name: "Modern",
        description: "Clean and contemporary design with bold headers",
        icon: Sparkles,
        preview: "/placeholder.svg?height=200&width=150",
        color: "bg-blue-500",
    },
    {
        id: "classic",
        name: "Classic",
        description: "Traditional and professional layout",
        icon: FileText,
        preview: "/placeholder.svg?height=200&width=150",
        color: "bg-slate-500",
    },
    {
        id: "creative",
        name: "Creative",
        description: "Bold and eye-catching design for creative fields",
        icon: Palette,
        preview: "/placeholder.svg?height=200&width=150",
        color: "bg-purple-500",
    },
    {
        id: "minimal",
        name: "Minimal",
        description: "Simple and elegant with lots of white space",
        icon: Minimize2,
        preview: "/placeholder.svg?height=200&width=150",
        color: "bg-green-500",
    },
]

export default function TemplateSelectionDialog({ open, onSelect }: TemplateSelectionDialogProps) {
    return (
        <Dialog open={open} onOpenChange={() => {}}>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-center">Choose Your CV Template</DialogTitle>
                    <p className="text-slate-600 text-center">Select a template that best represents your professional style</p>
                </DialogHeader>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    {templates.map((template) => {
                        const IconComponent = template.icon
                        return (
                            <Card
                                key={template.id}
                                className="cursor-pointer hover:shadow-lg transition-all duration-200 hover:scale-105"
                                onClick={() => onSelect(template.id)}
                            >
                                <CardContent className="p-6">
                                    <div className="flex items-start space-x-4">
                                        <div className={`p-3 rounded-lg ${template.color}`}>
                                            <IconComponent className="w-6 h-6 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-lg font-semibold text-slate-900 mb-2">{template.name}</h3>
                                            <p className="text-sm text-slate-600 mb-4">{template.description}</p>
                                            <div className="bg-slate-100 rounded-lg p-4 mb-4">
                                                <img
                                                    src={template.preview || "/placeholder.svg"}
                                                    alt={`${template.name} template preview`}
                                                    className="w-full h-32 object-cover rounded"
                                                />
                                            </div>
                                            <Button className="w-full">Select Template</Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-800">
                        <strong>💡 Tip:</strong> You can change templates anytime using the sidebar. Your content will be preserved
                        across all templates.
                    </p>
                </div>
            </DialogContent>
        </Dialog>
    )
}

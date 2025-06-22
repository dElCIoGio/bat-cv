
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { FileText, Palette, Sparkles, Minimize2 } from "lucide-react"

interface CVSidebarProps {
    open: boolean
    selectedTemplate: string
    onTemplateChange: (template: string) => void
    onClose: () => void
}

const templates = [
    {
        id: "modern",
        name: "Modern",
        icon: Sparkles,
        color: "bg-blue-500",
        description: "Clean & contemporary",
    },
    {
        id: "classic",
        name: "Classic",
        icon: FileText,
        color: "bg-slate-500",
        description: "Traditional & professional",
    },
    {
        id: "creative",
        name: "Creative",
        icon: Palette,
        color: "bg-purple-500",
        description: "Bold & eye-catching",
    },
    {
        id: "minimal",
        name: "Minimal",
        icon: Minimize2,
        color: "bg-green-500",
        description: "Simple & elegant",
    },
]

export default function CVSidebar({ open, selectedTemplate, onTemplateChange, onClose }: CVSidebarProps) {
    const SidebarContent = () => (
        <div className="space-y-6">
            <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Templates</h3>
                <div className="space-y-3">
                    {templates.map((template) => {
                        const IconComponent = template.icon
                        const isSelected = selectedTemplate === template.id
                        return (
                            <Card
                                key={template.id}
                                className={`cursor-pointer transition-all ${
                                    isSelected ? "ring-2 ring-blue-500 bg-blue-50" : "hover:bg-slate-50"
                                }`}
                                onClick={() => onTemplateChange(template.id)}
                            >
                                <CardContent className="p-4">
                                    <div className="flex items-center space-x-3">
                                        <div className={`p-2 rounded ${template.color}`}>
                                            <IconComponent className="w-4 h-4 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-medium text-slate-900">{template.name}</h4>
                                            <p className="text-xs text-slate-600">{template.description}</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>
            </div>

            <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Quick Actions</h3>
                <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start">
                        <FileText className="w-4 h-4 mr-2" />
                        Export PDF
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                        <Palette className="w-4 h-4 mr-2" />
                        Color Settings
                    </Button>
                </div>
            </div>
        </div>
    )

    return (
        <>
            {/* Desktop Sidebar */}
            <div className="hidden lg:block w-80 bg-white border-r border-slate-200 p-6">
                <SidebarContent />
            </div>

            {/* Mobile Sidebar */}
            <Sheet open={open} onOpenChange={onClose}>
                <SheetContent side="left" className="w-80">
                    <SheetHeader>
                        <SheetTitle>CV Settings</SheetTitle>
                    </SheetHeader>
                    <div className="mt-6">
                        <SidebarContent />
                    </div>
                </SheetContent>
            </Sheet>
        </>
    )
}

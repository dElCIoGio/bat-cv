
import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Plus, X } from "lucide-react"
import type {FormProps} from "@/pages/builder/data-form.tsx";


interface SkillsEditorProps {
    open: boolean
    formData: FormProps
    onSave: (data: Partial<FormProps>) => void
    onClose: () => void
}

export default function SkillsEditor({ open, formData, onSave, onClose }: SkillsEditorProps) {
    const [skills, setSkills] = useState<string[]>([])
    const [tools, setTools] = useState<string[]>([])
    const [skillInput, setSkillInput] = useState("")
    const [toolInput, setToolInput] = useState("")

    useEffect(() => {
        if (open && formData) {
            setSkills([...formData.skills])
            setTools([...formData.tools])
        }
    }, [open, formData])

    const addSkill = () => {
        if (skillInput.trim() && !skills.includes(skillInput.trim())) {
            setSkills([...skills, skillInput.trim()])
            setSkillInput("")
        }
    }

    const removeSkill = (skillToRemove: string) => {
        setSkills(skills.filter((skill) => skill !== skillToRemove))
    }

    const addTool = () => {
        if (toolInput.trim() && !tools.includes(toolInput.trim())) {
            setTools([...tools, toolInput.trim()])
            setToolInput("")
        }
    }

    const removeTool = (toolToRemove: string) => {
        setTools(tools.filter((tool) => tool !== toolToRemove))
    }

    const handleSave = () => {
        onSave({ skills, tools })
        onClose()
    }

    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>Edit Skills & Tools</DialogTitle>
                </DialogHeader>

                <div className="space-y-6 py-4">
                    {/* Skills Section */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Skills</h3>

                        <div className="flex space-x-2">
                            <Input
                                value={skillInput}
                                onChange={(e) => setSkillInput(e.target.value)}
                                onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addSkill())}
                                placeholder="Enter a skill (e.g., JavaScript, Project Management)"
                                className="flex-1"
                            />
                            <Button onClick={addSkill} disabled={!skillInput.trim()}>
                                <Plus className="w-4 h-4" />
                            </Button>
                        </div>

                        {skills.length > 0 && (
                            <div className="space-y-2">
                                <Label>Your Skills:</Label>
                                <div className="flex flex-wrap gap-2">
                                    {skills.map((skill, index) => (
                                        <Badge key={index} variant="secondary" className="flex items-center space-x-1">
                                            <span>{skill}</span>
                                            <button onClick={() => removeSkill(skill)} className="ml-1 hover:text-red-600">
                                                <X className="w-3 h-3" />
                                            </button>
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Tools Section */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Tools & Technologies</h3>

                        <div className="flex space-x-2">
                            <Input
                                value={toolInput}
                                onChange={(e) => setToolInput(e.target.value)}
                                onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addTool())}
                                placeholder="Enter a tool (e.g., VS Code, Figma)"
                                className="flex-1"
                            />
                            <Button onClick={addTool} disabled={!toolInput.trim()}>
                                <Plus className="w-4 h-4" />
                            </Button>
                        </div>

                        {tools.length > 0 && (
                            <div className="space-y-2">
                                <Label>Your Tools:</Label>
                                <div className="flex flex-wrap gap-2">
                                    {tools.map((tool, index) => (
                                        <Badge key={index} variant="secondary" className="flex items-center space-x-1">
                                            <span>{tool}</span>
                                            <button onClick={() => removeTool(tool)} className="ml-1 hover:text-red-600">
                                                <X className="w-3 h-3" />
                                            </button>
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <DialogFooter>
                    <Button variant="outline" onClick={onClose}>
                        Cancel
                    </Button>
                    <Button onClick={handleSave}>Save Changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

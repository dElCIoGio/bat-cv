
import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, Trash2 } from "lucide-react"
import type {FormProps} from "@/pages/builder/data-form.tsx";



interface WorkExperienceEditorProps {
    open: boolean
    formData: FormProps
    onSave: (data: Partial<FormProps>) => void
    onClose: () => void
}

export default function WorkExperienceEditor({ open, formData, onSave, onClose }: WorkExperienceEditorProps) {
    const [workExperience, setWorkExperience] = useState<FormProps["workExperience"]>([])

    useEffect(() => {
        if (open && formData) {
            setWorkExperience([...formData.workExperience])
        }
    }, [open, formData])

    const addExperience = () => {
        const newExperience = {
            id: Date.now().toString(),
            jobTitle: "",
            company: "",
            startDate: "",
            endDate: "",
            current: false,
            responsibilities: "",
        }
        setWorkExperience([...workExperience, newExperience])
    }

    const updateExperience = (index: number, field: string, value: string | boolean) => {
        const updated = workExperience.map((exp, i) => (i === index ? { ...exp, [field]: value } : exp))
        setWorkExperience(updated)
    }

    const removeExperience = (index: number) => {
        setWorkExperience(workExperience.filter((_, i) => i !== index))
    }

    const handleSave = () => {
        onSave({ workExperience })
        onClose()
    }

    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>Edit Work Experience</DialogTitle>
                </DialogHeader>

                <div className="space-y-4 py-4">
                    <div className="flex justify-between items-center">
                        <h3 className="text-lg font-semibold">Work Experience</h3>
                        <Button onClick={addExperience} className="flex items-center space-x-2">
                            <Plus className="w-4 h-4" />
                            <span>Add Experience</span>
                        </Button>
                    </div>

                    <div className="space-y-4">
                        {workExperience.map((exp, index) => (
                            <Card key={exp.id}>
                                <CardHeader className="pb-4">
                                    <div className="flex items-center justify-between">
                                        <CardTitle className="text-lg">
                                            {exp.jobTitle || "New Position"}
                                            {exp.company && ` at ${exp.company}`}
                                        </CardTitle>
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            onClick={() => removeExperience(index)}
                                            className="text-red-600 hover:text-red-800"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </Button>
                                    </div>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label>Job Title</Label>
                                            <Input
                                                value={exp.jobTitle}
                                                onChange={(e) => updateExperience(index, "jobTitle", e.target.value)}
                                                placeholder="Software Engineer"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label>Company</Label>
                                            <Input
                                                value={exp.company}
                                                onChange={(e) => updateExperience(index, "company", e.target.value)}
                                                placeholder="Company Name"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label>Start Date</Label>
                                            <Input
                                                type="month"
                                                value={exp.startDate}
                                                onChange={(e) => updateExperience(index, "startDate", e.target.value)}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label>End Date</Label>
                                            <Input
                                                type="month"
                                                value={exp.endDate}
                                                onChange={(e) => updateExperience(index, "endDate", e.target.value)}
                                                disabled={exp.current}
                                            />
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-2">
                                        <Checkbox
                                            id={`current-${index}`}
                                            checked={exp.current}
                                            onCheckedChange={(checked) => updateExperience(index, "current", checked as boolean)}
                                        />
                                        <Label htmlFor={`current-${index}`}>I currently work here</Label>
                                    </div>

                                    <div className="space-y-2">
                                        <Label>Key Responsibilities & Achievements</Label>
                                        <Textarea
                                            value={exp.responsibilities}
                                            onChange={(e) => updateExperience(index, "responsibilities", e.target.value)}
                                            placeholder="• Developed and maintained web applications using React and Node.js&#10;• Led a team of 3 developers on multiple projects&#10;• Improved application performance by 40%"
                                            rows={4}
                                        />
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
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

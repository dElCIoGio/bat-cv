"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, Trash2 } from "lucide-react"
import type {FormProps} from "@/pages/builder/data-form.tsx";

interface EducationEditorProps {
    open: boolean
    formData: FormProps
    onSave: (data: Partial<FormProps>) => void
    onClose: () => void
}

export default function EducationEditor({ open, formData, onSave, onClose }: EducationEditorProps) {
    const [education, setEducation] = useState<FormProps["education"]>([])

    useEffect(() => {
        if (open && formData) {
            setEducation([...formData.education])
        }
    }, [open, formData])

    const addEducation = () => {
        const newEducation = {
            id: Date.now().toString(),
            school: "",
            degree: "",
            field: "",
            graduationDate: "",
            gpa: "",
        }
        setEducation([...education, newEducation])
    }

    const updateEducation = (index: number, field: string, value: string) => {
        const updated = education.map((edu, i) => (i === index ? { ...edu, [field]: value } : edu))
        setEducation(updated)
    }

    const removeEducation = (index: number) => {
        setEducation(education.filter((_, i) => i !== index))
    }

    const handleSave = () => {
        onSave({ education })
        onClose()
    }

    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>Edit Education</DialogTitle>
                </DialogHeader>

                <div className="space-y-4 py-4">
                    <div className="flex justify-between items-center">
                        <h3 className="text-lg font-semibold">Education</h3>
                        <Button onClick={addEducation} className="flex items-center space-x-2">
                            <Plus className="w-4 h-4" />
                            <span>Add Education</span>
                        </Button>
                    </div>

                    <div className="space-y-4">
                        {education.map((edu, index) => (
                            <Card key={edu.id}>
                                <CardHeader className="pb-4">
                                    <div className="flex items-center justify-between">
                                        <CardTitle className="text-lg">
                                            {edu.degree || "New Education"}
                                            {edu.school && ` - ${edu.school}`}
                                        </CardTitle>
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            onClick={() => removeEducation(index)}
                                            className="text-red-600 hover:text-red-800"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </Button>
                                    </div>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label>School/University</Label>
                                            <Input
                                                value={edu.school}
                                                onChange={(e) => updateEducation(index, "school", e.target.value)}
                                                placeholder="University of California, Berkeley"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label>Degree</Label>
                                            <Input
                                                value={edu.degree}
                                                onChange={(e) => updateEducation(index, "degree", e.target.value)}
                                                placeholder="Bachelor of Science"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label>Field of Study</Label>
                                            <Input
                                                value={edu.field}
                                                onChange={(e) => updateEducation(index, "field", e.target.value)}
                                                placeholder="Computer Science"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label>Graduation Date</Label>
                                            <Input
                                                type="month"
                                                value={edu.graduationDate}
                                                onChange={(e) => updateEducation(index, "graduationDate", e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label>GPA (Optional)</Label>
                                        <Input
                                            value={edu.gpa}
                                            onChange={(e) => updateEducation(index, "gpa", e.target.value)}
                                            placeholder="3.8/4.0"
                                            className="md:w-1/2"
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

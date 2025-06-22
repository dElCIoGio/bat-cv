"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, Trash2, Briefcase } from "lucide-react"
import type {FormProps} from "@/pages/builder/data-form.tsx";

interface Step2Props {
    formData: FormProps
    updateFormData: (data: Partial<FormProps>) => void
    errors: Record<string, string>
}

export default function Step2WorkExperience({ formData, updateFormData, errors }: Step2Props) {
    const [, setEditingIndex] = useState<number | null>(null)

    const addWorkExperience = () => {
        const newExperience = {
            id: Date.now().toString(),
            jobTitle: "",
            company: "",
            startDate: "",
            endDate: "",
            current: false,
            responsibilities: "",
        }
        updateFormData({
            workExperience: [...formData.workExperience, newExperience],
        })
        setEditingIndex(formData.workExperience.length)
    }

    const updateWorkExperience = (index: number, field: string, value: string | boolean) => {
        const updated = formData.workExperience.map((exp, i) => (i === index ? { ...exp, [field]: value } : exp))
        updateFormData({ workExperience: updated })
    }

    const removeWorkExperience = (index: number) => {
        const updated = formData.workExperience.filter((_, i) => i !== index)
        updateFormData({ workExperience: updated })
        setEditingIndex(null)
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <Briefcase className="w-5 h-5 text-blue-600" />
                    <h3 className="text-lg font-semibold">Work Experience</h3>
                </div>
                <Button onClick={addWorkExperience} className="flex items-center space-x-2">
                    <Plus className="w-4 h-4" />
                    <span>Add Experience</span>
                </Button>
            </div>

            {errors.workExperience && <p className="text-sm text-red-600">{errors.workExperience}</p>}

            {formData.workExperience.length === 0 ? (
                <Card className="border-dashed border-2 border-slate-300">
                    <CardContent className="flex flex-col items-center justify-center py-12">
                        <Briefcase className="w-12 h-12 text-slate-400 mb-4" />
                        <p className="text-slate-600 text-center">
                            No work experience added yet. Click "Add Experience" to get started.
                        </p>
                    </CardContent>
                </Card>
            ) : (
                <div className="space-y-4">
                    {formData.workExperience.map((exp, index) => (
                        <Card key={exp.id} className="relative">
                            <CardHeader className="pb-4">
                                <div className="flex items-center justify-between">
                                    <CardTitle className="text-lg">
                                        {exp.jobTitle || "New Position"}
                                        {exp.company && ` at ${exp.company}`}
                                    </CardTitle>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => removeWorkExperience(index)}
                                        className="text-red-600 hover:text-red-800"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </Button>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label>Job Title *</Label>
                                        <Input
                                            value={exp.jobTitle}
                                            onChange={(e) => updateWorkExperience(index, "jobTitle", e.target.value)}
                                            placeholder="Software Engineer"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label>Company *</Label>
                                        <Input
                                            value={exp.company}
                                            onChange={(e) => updateWorkExperience(index, "company", e.target.value)}
                                            placeholder="Company Name"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label>Start Date *</Label>
                                        <Input
                                            type="month"
                                            value={exp.startDate}
                                            onChange={(e) => updateWorkExperience(index, "startDate", e.target.value)}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label>End Date</Label>
                                        <Input
                                            type="month"
                                            value={exp.endDate}
                                            onChange={(e) => updateWorkExperience(index, "endDate", e.target.value)}
                                            disabled={exp.current}
                                        />
                                    </div>
                                </div>

                                <div className="flex items-center space-x-2">
                                    <Checkbox
                                        id={`current-${index}`}
                                        checked={exp.current}
                                        onCheckedChange={(checked) => updateWorkExperience(index, "current", checked as boolean)}
                                    />
                                    <Label htmlFor={`current-${index}`}>I currently work here</Label>
                                </div>

                                <div className="space-y-2">
                                    <Label>Key Responsibilities & Achievements</Label>
                                    <Textarea
                                        value={exp.responsibilities}
                                        onChange={(e) => updateWorkExperience(index, "responsibilities", e.target.value)}
                                        placeholder="• Developed and maintained web applications using React and Node.js&#10;• Led a team of 3 developers on multiple projects&#10;• Improved application performance by 40%"
                                        rows={4}
                                    />
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    )
}

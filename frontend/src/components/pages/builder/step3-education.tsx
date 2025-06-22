"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, Trash2, GraduationCap } from "lucide-react"
import type {FormProps} from "@/pages/builder/data-form.tsx";

interface Step3Props {
    formData: FormProps
    updateFormData: (data: Partial<FormProps>) => void
    errors: Record<string, string>
}

export default function Step3Education({ formData, updateFormData, errors }: Step3Props) {
    const addEducation = () => {
        const newEducation = {
            id: Date.now().toString(),
            school: "",
            degree: "",
            field: "",
            graduationDate: "",
            gpa: "",
        }
        updateFormData({
            education: [...formData.education, newEducation],
        })
    }

    const updateEducation = (index: number, field: string, value: string) => {
        const updated = formData.education.map((edu, i) => (i === index ? { ...edu, [field]: value } : edu))
        updateFormData({ education: updated })
    }

    const removeEducation = (index: number) => {
        const updated = formData.education.filter((_, i) => i !== index)
        updateFormData({ education: updated })
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <GraduationCap className="w-5 h-5 text-blue-600" />
                    <h3 className="text-lg font-semibold">Education</h3>
                </div>
                <Button onClick={addEducation} className="flex items-center space-x-2">
                    <Plus className="w-4 h-4" />
                    <span>Add Education</span>
                </Button>
            </div>

            {errors.education && <p className="text-sm text-red-600">{errors.education}</p>}

            {formData.education.length === 0 ? (
                <Card className="border-dashed border-2 border-slate-300">
                    <CardContent className="flex flex-col items-center justify-center py-12">
                        <GraduationCap className="w-12 h-12 text-slate-400 mb-4" />
                        <p className="text-slate-600 text-center">No education added yet. Click "Add Education" to get started.</p>
                    </CardContent>
                </Card>
            ) : (
                <div className="space-y-4">
                    {formData.education.map((edu, index) => (
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
                                        <Label>School/University *</Label>
                                        <Input
                                            value={edu.school}
                                            onChange={(e) => updateEducation(index, "school", e.target.value)}
                                            placeholder="University of California, Berkeley"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label>Degree *</Label>
                                        <Input
                                            value={edu.degree}
                                            onChange={(e) => updateEducation(index, "degree", e.target.value)}
                                            placeholder="Bachelor of Science"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label>Field of Study *</Label>
                                        <Input
                                            value={edu.field}
                                            onChange={(e) => updateEducation(index, "field", e.target.value)}
                                            placeholder="Computer Science"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label>Graduation Date *</Label>
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
            )}
        </div>
    )
}

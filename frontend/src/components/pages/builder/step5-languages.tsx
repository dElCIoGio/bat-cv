"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, Trash2, Languages } from "lucide-react"
import type {FormProps} from "@/pages/builder/data-form.tsx";

interface Step5Props {
    formData: FormProps
    updateFormData: (data: Partial<FormProps>) => void
    errors: Record<string, string>
}

const proficiencyLevels = [
    { value: "native", label: "Native" },
    { value: "fluent", label: "Fluent" },
    { value: "advanced", label: "Advanced" },
    { value: "intermediate", label: "Intermediate" },
    { value: "beginner", label: "Beginner" },
]

export default function Step5Languages({ formData, updateFormData }: Step5Props) {
    const addLanguage = () => {
        const newLanguage = {
            id: Date.now().toString(),
            language: "",
            proficiency: "",
        }
        updateFormData({
            languages: [...formData.languages, newLanguage],
        })
    }

    const updateLanguage = (index: number, field: string, value: string) => {
        const updated = formData.languages.map((lang, i) => (i === index ? { ...lang, [field]: value } : lang))
        updateFormData({ languages: updated })
    }

    const removeLanguage = (index: number) => {
        const updated = formData.languages.filter((_, i) => i !== index)
        updateFormData({ languages: updated })
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <Languages className="w-5 h-5 text-blue-600" />
                    <h3 className="text-lg font-semibold">Languages</h3>
                </div>
                <Button onClick={addLanguage} className="flex items-center space-x-2">
                    <Plus className="w-4 h-4" />
                    <span>Add Language</span>
                </Button>
            </div>

            <p className="text-slate-600">Add the languages you speak and your proficiency level in each.</p>

            {formData.languages.length === 0 ? (
                <Card className="border-dashed border-2 border-slate-300">
                    <CardContent className="flex flex-col items-center justify-center py-12">
                        <Languages className="w-12 h-12 text-slate-400 mb-4" />
                        <p className="text-slate-600 text-center">No languages added yet. Click "Add Language" to get started.</p>
                    </CardContent>
                </Card>
            ) : (
                <div className="space-y-4">
                    {formData.languages.map((lang, index) => (
                        <Card key={lang.id}>
                            <CardHeader className="pb-4">
                                <div className="flex items-center justify-between">
                                    <CardTitle className="text-lg">
                                        {lang.language || "New Language"}
                                        {lang.proficiency && ` - ${proficiencyLevels.find((p) => p.value === lang.proficiency)?.label}`}
                                    </CardTitle>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => removeLanguage(index)}
                                        className="text-red-600 hover:text-red-800"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </Button>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label>Language *</Label>
                                        <Input
                                            value={lang.language}
                                            onChange={(e) => updateLanguage(index, "language", e.target.value)}
                                            placeholder="English, Spanish, French, etc."
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label>Proficiency Level *</Label>
                                        <Select
                                            value={lang.proficiency}
                                            onValueChange={(value) => updateLanguage(index, "proficiency", value)}
                                        >
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select proficiency level" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {proficiencyLevels.map((level) => (
                                                    <SelectItem key={level.value} value={level.value}>
                                                        {level.label}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    )
}

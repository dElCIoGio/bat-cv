
import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, Trash2 } from "lucide-react"
import type {FormProps} from "@/pages/builder/data-form.tsx";


interface LanguagesEditorProps {
    open: boolean
    formData: FormProps
    onSave: (data: Partial<FormProps>) => void
    onClose: () => void
}

const proficiencyLevels = [
    { value: "native", label: "Native" },
    { value: "fluent", label: "Fluent" },
    { value: "advanced", label: "Advanced" },
    { value: "intermediate", label: "Intermediate" },
    { value: "beginner", label: "Beginner" },
]

export default function LanguagesEditor({ open, formData, onSave, onClose }: LanguagesEditorProps) {
    const [languages, setLanguages] = useState<FormProps["languages"]>([])

    useEffect(() => {
        if (open && formData) {
            setLanguages([...formData.languages])
        }
    }, [open, formData])

    const addLanguage = () => {
        const newLanguage = {
            id: Date.now().toString(),
            language: "",
            proficiency: "",
        }
        setLanguages([...languages, newLanguage])
    }

    const updateLanguage = (index: number, field: string, value: string) => {
        const updated = languages.map((lang, i) => (i === index ? { ...lang, [field]: value } : lang))
        setLanguages(updated)
    }

    const removeLanguage = (index: number) => {
        setLanguages(languages.filter((_, i) => i !== index))
    }

    const handleSave = () => {
        onSave({ languages })
        onClose()
    }

    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>Edit Languages</DialogTitle>
                </DialogHeader>

                <div className="space-y-4 py-4">
                    <div className="flex justify-between items-center">
                        <h3 className="text-lg font-semibold">Languages</h3>
                        <Button onClick={addLanguage} className="flex items-center space-x-2">
                            <Plus className="w-4 h-4" />
                            <span>Add Language</span>
                        </Button>
                    </div>

                    <div className="space-y-4">
                        {languages.map((lang, index) => (
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
                                            <Label>Language</Label>
                                            <Input
                                                value={lang.language}
                                                onChange={(e) => updateLanguage(index, "language", e.target.value)}
                                                placeholder="English, Spanish, French, etc."
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label>Proficiency Level</Label>
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


import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, Trash2, Award } from "lucide-react"
import type {FormProps} from "@/pages/builder/data-form.tsx";


interface Step6Props {
    formData: FormProps
    updateFormData: (data: Partial<FormProps>) => void
    errors: Record<string, string>
}

export default function Step6Certifications({ formData, updateFormData }: Step6Props) {
    const addCertification = () => {
        const newCertification = {
            id: Date.now().toString(),
            name: "",
            issuer: "",
            date: "",
            expiryDate: "",
        }
        updateFormData({
            certifications: [...formData.certifications, newCertification],
        })
    }

    const updateCertification = (index: number, field: string, value: string) => {
        const updated = formData.certifications.map((cert, i) => (i === index ? { ...cert, [field]: value } : cert))
        updateFormData({ certifications: updated })
    }

    const removeCertification = (index: number) => {
        const updated = formData.certifications.filter((_, i) => i !== index)
        updateFormData({ certifications: updated })
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <Award className="w-5 h-5 text-blue-600" />
                    <h3 className="text-lg font-semibold">Certifications & Courses</h3>
                </div>
                <Button onClick={addCertification} className="flex items-center space-x-2">
                    <Plus className="w-4 h-4" />
                    <span>Add Certification</span>
                </Button>
            </div>

            <p className="text-slate-600">
                This section is optional. Add any relevant certifications, courses, or professional development you've
                completed.
            </p>

            {formData.certifications.length === 0 ? (
                <Card className="border-dashed border-2 border-slate-300">
                    <CardContent className="flex flex-col items-center justify-center py-12">
                        <Award className="w-12 h-12 text-slate-400 mb-4" />
                        <p className="text-slate-600 text-center">No certifications added yet. This section is optional.</p>
                    </CardContent>
                </Card>
            ) : (
                <div className="space-y-4">
                    {formData.certifications.map((cert, index) => (
                        <Card key={cert.id}>
                            <CardHeader className="pb-4">
                                <div className="flex items-center justify-between">
                                    <CardTitle className="text-lg">
                                        {cert.name || "New Certification"}
                                        {cert.issuer && ` - ${cert.issuer}`}
                                    </CardTitle>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => removeCertification(index)}
                                        className="text-red-600 hover:text-red-800"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </Button>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label>Certification/Course Name *</Label>
                                        <Input
                                            value={cert.name}
                                            onChange={(e) => updateCertification(index, "name", e.target.value)}
                                            placeholder="AWS Certified Solutions Architect"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label>Issuing Organization *</Label>
                                        <Input
                                            value={cert.issuer}
                                            onChange={(e) => updateCertification(index, "issuer", e.target.value)}
                                            placeholder="Amazon Web Services"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label>Issue Date *</Label>
                                        <Input
                                            type="month"
                                            value={cert.date}
                                            onChange={(e) => updateCertification(index, "date", e.target.value)}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label>Expiry Date (Optional)</Label>
                                        <Input
                                            type="month"
                                            value={cert.expiryDate}
                                            onChange={(e) => updateCertification(index, "expiryDate", e.target.value)}
                                        />
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


import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, Trash2 } from "lucide-react"
import type {FormProps} from "@/pages/builder/data-form.tsx";

interface CertificationsEditorProps {
    open: boolean
    formData: FormProps
    onSave: (data: Partial<FormProps>) => void
    onClose: () => void
}

export default function CertificationsEditor({ open, formData, onSave, onClose }: CertificationsEditorProps) {
    const [certifications, setCertifications] = useState<FormProps["certifications"]>([])

    useEffect(() => {
        if (open && formData) {
            setCertifications([...formData.certifications])
        }
    }, [open, formData])

    const addCertification = () => {
        const newCertification = {
            id: Date.now().toString(),
            name: "",
            issuer: "",
            date: "",
            expiryDate: "",
        }
        setCertifications([...certifications, newCertification])
    }

    const updateCertification = (index: number, field: string, value: string) => {
        const updated = certifications.map((cert, i) => (i === index ? { ...cert, [field]: value } : cert))
        setCertifications(updated)
    }

    const removeCertification = (index: number) => {
        setCertifications(certifications.filter((_, i) => i !== index))
    }

    const handleSave = () => {
        onSave({ certifications })
        onClose()
    }

    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>Edit Certifications</DialogTitle>
                </DialogHeader>

                <div className="space-y-4 py-4">
                    <div className="flex justify-between items-center">
                        <h3 className="text-lg font-semibold">Certifications & Courses</h3>
                        <Button onClick={addCertification} className="flex items-center space-x-2">
                            <Plus className="w-4 h-4" />
                            <span>Add Certification</span>
                        </Button>
                    </div>

                    <div className="space-y-4">
                        {certifications.map((cert, index) => (
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
                                            <Label>Certification/Course Name</Label>
                                            <Input
                                                value={cert.name}
                                                onChange={(e) => updateCertification(index, "name", e.target.value)}
                                                placeholder="AWS Certified Solutions Architect"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label>Issuing Organization</Label>
                                            <Input
                                                value={cert.issuer}
                                                onChange={(e) => updateCertification(index, "issuer", e.target.value)}
                                                placeholder="Amazon Web Services"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label>Issue Date</Label>
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

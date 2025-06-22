
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Palette, Type, Layout } from "lucide-react"
import type {FormProps} from "@/pages/builder/data-form.tsx";


interface Step9Props {
    formData: FormProps
    updateFormData: (data: Partial<FormProps>) => void
    errors: Record<string, string>
}

const templates = [
    { value: "modern", label: "Modern", description: "Clean and contemporary design" },
    { value: "classic", label: "Classic", description: "Traditional and professional" },
    { value: "creative", label: "Creative", description: "Bold and eye-catching" },
    { value: "minimal", label: "Minimal", description: "Simple and elegant" },
]

const colorSchemes = [
    { value: "blue", label: "Professional Blue", color: "bg-blue-600" },
    { value: "green", label: "Nature Green", color: "bg-green-600" },
    { value: "purple", label: "Creative Purple", color: "bg-purple-600" },
    { value: "gray", label: "Classic Gray", color: "bg-gray-600" },
    { value: "red", label: "Bold Red", color: "bg-red-600" },
]

const fontSizes = [
    { value: "small", label: "Small (10-11pt)", description: "Fits more content" },
    { value: "medium", label: "Medium (12pt)", description: "Standard size" },
    { value: "large", label: "Large (13-14pt)", description: "Easy to read" },
]

export default function Step9Layout({ formData, updateFormData }: Step9Props) {
    const updateLayout = (field: string, value: string) => {
        updateFormData({
            layout: {
                ...formData.layout,
                [field]: value,
            },
        })
    }

    return (
        <div className="space-y-8">
            <div className="flex items-center space-x-2">
                <Layout className="w-5 h-5 text-blue-600" />
                <h3 className="text-lg font-semibold">Layout & Personalization</h3>
            </div>

            <p className="text-slate-600">
                Customize the appearance of your resume to match your personal style and industry preferences.
            </p>

            {/* Template Selection */}
            <div className="space-y-4">
                <div className="flex items-center space-x-2">
                    <Layout className="w-4 h-4 text-slate-600" />
                    <Label>Template Style</Label>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {templates.map((template) => (
                        <Card
                            key={template.value}
                            className={`cursor-pointer transition-all ${
                                formData.layout.template === template.value ? "ring-2 ring-blue-600 bg-blue-50" : "hover:bg-slate-50"
                            }`}
                            onClick={() => updateLayout("template", template.value)}
                        >
                            <CardContent className="p-4">
                                <h4 className="font-medium text-slate-900">{template.label}</h4>
                                <p className="text-sm text-slate-600 mt-1">{template.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Color Scheme */}
            <div className="space-y-4">
                <div className="flex items-center space-x-2">
                    <Palette className="w-4 h-4 text-slate-600" />
                    <Label>Color Scheme</Label>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3">
                    {colorSchemes.map((scheme) => (
                        <Card
                            key={scheme.value}
                            className={`cursor-pointer transition-all ${
                                formData.layout.colorScheme === scheme.value ? "ring-2 ring-blue-600" : "hover:bg-slate-50"
                            }`}
                            onClick={() => updateLayout("colorScheme", scheme.value)}
                        >
                            <CardContent className="p-3 text-center">
                                <div className={`w-8 h-8 rounded-full ${scheme.color} mx-auto mb-2`} />
                                <p className="text-xs font-medium text-slate-900">{scheme.label}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Font Size */}
            <div className="space-y-4">
                <div className="flex items-center space-x-2">
                    <Type className="w-4 h-4 text-slate-600" />
                    <Label>Font Size</Label>
                </div>

                <Select value={formData.layout.fontSize} onValueChange={(value) => updateLayout("fontSize", value)}>
                    <SelectTrigger className="w-full md:w-1/2">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        {fontSizes.map((size) => (
                            <SelectItem key={size.value} value={size.value}>
                                <div>
                                    <div className="font-medium">{size.label}</div>
                                    <div className="text-sm text-slate-600">{size.description}</div>
                                </div>
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            {/* Preview */}
            <div className="space-y-4">
                <Label>Preview</Label>
                <Card className="bg-slate-50">
                    <CardContent className="p-6">
                        <div className="space-y-4">
                            <div className="text-center">
                                <h3 className="text-xl font-bold text-slate-900">
                                    {formData.firstName} {formData.lastName}
                                </h3>
                                <p className="text-slate-600">
                                    {formData.email} • {formData.phone}
                                </p>
                                {formData.location && <p className="text-slate-600">{formData.location}</p>}
                            </div>

                            <div
                                className={`h-1 ${colorSchemes.find((c) => c.value === formData.layout.colorScheme)?.color || "bg-blue-600"}`}
                            />

                            <div>
                                <h4 className="font-semibold text-slate-900 mb-2">Professional Summary</h4>
                                <p
                                    className={`text-slate-700 ${
                                        formData.layout.fontSize === "small"
                                            ? "text-sm"
                                            : formData.layout.fontSize === "large"
                                                ? "text-base"
                                                : "text-sm"
                                    }`}
                                >
                                    {formData.summary || "Your professional summary will appear here..."}
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-slate-900 mb-2">Skills</h4>
                                <div className="flex flex-wrap gap-2">
                                    {formData.skills.slice(0, 6).map((skill, index) => (
                                        <span key={index} className="px-2 py-1 bg-slate-200 text-slate-700 text-xs rounded">
                      {skill}
                    </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

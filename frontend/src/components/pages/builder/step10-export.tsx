
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Download, FileText, Mail, Share2, CheckCircle } from "lucide-react"
import type {FormProps} from "@/pages/builder/data-form.tsx";

interface Step10Props {
    formData: FormProps
    updateFormData: (data: Partial<FormProps>) => void
    errors: Record<string, string>
}

export default function Step10Export({ formData }: Step10Props) {
    const [isExporting, setIsExporting] = useState(false)
    const [exportComplete, setExportComplete] = useState(false)

    const handleExport = async (format: string) => {
        setIsExporting(true)

        // Simulate export process
        await new Promise((resolve) => setTimeout(resolve, 2000))

        setIsExporting(false)
        setExportComplete(true)

        // Reset after 3 seconds
        setTimeout(() => setExportComplete(false), 3000)
    }

    const getCompletionStats = () => {
        let completed = 0
        const total = 10

        // Check required sections
        if (formData.firstName && formData.lastName && formData.email && formData.phone && formData.goal) completed++
        if (formData.workExperience.length > 0) completed++
        if (formData.education.length > 0) completed++
        if (formData.skills.length > 0) completed++
        if (formData.summary) completed++

        // Optional sections
        if (formData.languages.length > 0) completed++
        if (formData.certifications.length > 0) completed++
        if (formData.projects.length > 0) completed++

        // Always count layout and export steps
        completed += 2

        return { completed, total, percentage: Math.round((completed / total) * 100) }
    }

    const stats = getCompletionStats()

    return (
        <div className="space-y-8">
            <div className="text-center space-y-4">
                <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                    <h2 className="text-2xl font-bold text-slate-900">Resume Complete!</h2>
                </div>
                <p className="text-slate-600 text-lg">
                    Your professional resume is ready. Choose how you'd like to export and use it.
                </p>
            </div>

            {/* Completion Summary */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                        <FileText className="w-5 h-5" />
                        <span>Resume Summary</span>
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                        <div>
                            <div className="text-2xl font-bold text-blue-600">{stats.completed}</div>
                            <div className="text-sm text-slate-600">Sections Completed</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-green-600">{formData.skills.length}</div>
                            <div className="text-sm text-slate-600">Skills Listed</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-purple-600">{formData.workExperience.length}</div>
                            <div className="text-sm text-slate-600">Work Experiences</div>
                        </div>
                    </div>

                    <Separator />

                    <div className="space-y-4">
                        <h4 className="font-semibold text-slate-900">Your Information:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                            <div>
                                <span className="font-medium">Name:</span> {formData.firstName} {formData.lastName}
                            </div>
                            <div>
                                <span className="font-medium">Email:</span> {formData.email}
                            </div>
                            <div>
                                <span className="font-medium">Phone:</span> {formData.phone}
                            </div>
                            <div>
                                <span className="font-medium">Location:</span> {formData.location || "Not specified"}
                            </div>
                        </div>
                    </div>

                    {formData.skills.length > 0 && (
                        <div className="space-y-2">
                            <h4 className="font-semibold text-slate-900">Top Skills:</h4>
                            <div className="flex flex-wrap gap-2">
                                {formData.skills.slice(0, 8).map((skill, index) => (
                                    <Badge key={index} variant="secondary">
                                        {skill}
                                    </Badge>
                                ))}
                                {formData.skills.length > 8 && <Badge variant="outline">+{formData.skills.length - 8} more</Badge>}
                            </div>
                        </div>
                    )}
                </CardContent>
            </Card>

            {/* Export Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center space-x-2">
                            <Download className="w-5 h-5" />
                            <span>Download Resume</span>
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p className="text-slate-600 text-sm">Download your resume in various formats for different use cases.</p>
                        <div className="space-y-2">
                            <Button className="w-full justify-start" onClick={() => handleExport("pdf")} disabled={isExporting}>
                                <FileText className="w-4 h-4 mr-2" />
                                {isExporting ? "Generating PDF..." : "Download as PDF"}
                            </Button>
                            <Button
                                variant="outline"
                                className="w-full justify-start"
                                onClick={() => handleExport("docx")}
                                disabled={isExporting}
                            >
                                <FileText className="w-4 h-4 mr-2" />
                                {isExporting ? "Generating DOCX..." : "Download as Word Document"}
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center space-x-2">
                            <Share2 className="w-5 h-5" />
                            <span>Share & Apply</span>
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p className="text-slate-600 text-sm">Share your resume or get ready to apply for jobs.</p>
                        <div className="space-y-2">
                            <Button variant="outline" className="w-full justify-start" onClick={() => handleExport("link")}>
                                <Share2 className="w-4 h-4 mr-2" />
                                Generate Shareable Link
                            </Button>
                            <Button variant="outline" className="w-full justify-start" onClick={() => handleExport("email")}>
                                <Mail className="w-4 h-4 mr-2" />
                                Email to Myself
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Success Message */}
            {exportComplete && (
                <Card className="border-green-200 bg-green-50">
                    <CardContent className="flex items-center space-x-3 p-4">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                        <div>
                            <p className="font-medium text-green-900">Export Successful!</p>
                            <p className="text-sm text-green-700">Your resume has been generated and is ready to use.</p>
                        </div>
                    </CardContent>
                </Card>
            )}

            {/* Tips */}
            <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-6">
                    <h4 className="font-semibold text-blue-900 mb-3">💡 Tips for Using Your Resume</h4>
                    <ul className="space-y-2 text-sm text-blue-800">
                        <li>• Tailor your resume for each job application by emphasizing relevant skills and experience</li>
                        <li>• Keep your resume updated as you gain new skills and experiences</li>
                        <li>• Use the PDF version for most applications to preserve formatting</li>
                        <li>• Consider creating multiple versions for different types of roles</li>
                        <li>• Always proofread before sending to ensure there are no typos</li>
                    </ul>
                </CardContent>
            </Card>
        </div>
    )
}

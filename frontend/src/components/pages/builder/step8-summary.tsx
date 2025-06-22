"use client"

import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { FileText, Sparkles } from "lucide-react"
import type {FormProps} from "@/pages/builder/data-form.tsx";

interface Step8Props {
    formData: FormProps
    updateFormData: (data: Partial<FormProps>) => void
    errors: Record<string, string>
}

export default function Step8Summary({ formData, updateFormData, errors }: Step8Props) {
    const generateSuggestion = () => {
        const skills = formData.skills.slice(0, 3).join(", ")
        const experience = formData.workExperience[0]?.jobTitle || "professional"
        const goal = formData.goal.toLowerCase()

        const suggestion = `Experienced ${experience} with expertise in ${skills}. ${goal.charAt(0).toUpperCase() + goal.slice(1)}. Proven track record of delivering high-quality results and collaborating effectively with cross-functional teams.`

        updateFormData({ summary: suggestion })
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center space-x-2">
                <FileText className="w-5 h-5 text-blue-600" />
                <h3 className="text-lg font-semibold">Professional Summary</h3>
            </div>

            <p className="text-slate-600">
                Write a compelling professional summary that highlights your key strengths, experience, and career objectives.
                This will appear at the top of your resume.
            </p>

            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <Label htmlFor="summary">Professional Summary *</Label>
                    <Button variant="outline" size="sm" onClick={generateSuggestion} className="flex items-center space-x-2">
                        <Sparkles className="w-4 h-4" />
                        <span>Generate Suggestion</span>
                    </Button>
                </div>

                <Textarea
                    id="summary"
                    value={formData.summary}
                    onChange={(e) => updateFormData({ summary: e.target.value })}
                    placeholder="Write a 2-3 sentence summary highlighting your professional background, key skills, and career goals..."
                    rows={6}
                    className={errors.summary ? "border-red-500" : ""}
                />

                {errors.summary && <p className="text-sm text-red-600">{errors.summary}</p>}

                <div className="text-sm text-slate-500">
                    <p className="font-medium mb-2">Tips for a great summary:</p>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Keep it concise (2-3 sentences)</li>
                        <li>Highlight your most relevant skills and experience</li>
                        <li>Mention your career goals or what you're looking for</li>
                        <li>Use action words and quantify achievements when possible</li>
                    </ul>
                </div>
            </div>

            {formData.summary && (
                <div className="bg-slate-50 p-4 rounded-lg">
                    <h4 className="font-medium text-slate-900 mb-2">Preview:</h4>
                    <p className="text-slate-700 leading-relaxed">{formData.summary}</p>
                    <p className="text-sm text-slate-500 mt-2">Character count: {formData.summary.length}</p>
                </div>
            )}
        </div>
    )
}

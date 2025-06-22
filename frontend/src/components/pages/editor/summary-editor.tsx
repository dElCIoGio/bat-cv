
import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Sparkles } from "lucide-react"
import type {FormProps} from "@/pages/builder/data-form.tsx";



interface SummaryEditorProps {
    open: boolean
    formData: FormProps
    onSave: (data: Partial<FormProps>) => void
    onClose: () => void
}

export default function SummaryEditor({ open, formData, onSave, onClose }: SummaryEditorProps) {
    const [summary, setSummary] = useState("")

    useEffect(() => {
        if (open && formData) {
            setSummary(formData.summary)
        }
    }, [open, formData])

    const generateSuggestion = () => {
        const skills = formData.skills.slice(0, 3).join(", ")
        const experience = formData.workExperience[0]?.jobTitle || "professional"
        const goal = formData.goal.toLowerCase()

        const suggestion = `Experienced ${experience} with expertise in ${skills}. ${goal.charAt(0).toUpperCase() + goal.slice(1)}. Proven track record of delivering high-quality results and collaborating effectively with cross-functional teams.`

        setSummary(suggestion)
    }

    const handleSave = () => {
        onSave({ summary })
        onClose()
    }

    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>Edit Professional Summary</DialogTitle>
                </DialogHeader>

                <div className="space-y-4 py-4">
                    <div className="flex items-center justify-between">
                        <Label htmlFor="summary">Professional Summary</Label>
                        <Button variant="outline" size="sm" onClick={generateSuggestion} className="flex items-center space-x-2">
                            <Sparkles className="w-4 h-4" />
                            <span>Generate Suggestion</span>
                        </Button>
                    </div>

                    <Textarea
                        id="summary"
                        value={summary}
                        onChange={(e) => setSummary(e.target.value)}
                        placeholder="Write a compelling professional summary that highlights your key strengths, experience, and career objectives..."
                        rows={8}
                    />

                    <div className="text-sm text-slate-500">
                        <p className="font-medium mb-2">Tips for a great summary:</p>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Keep it concise (2-3 sentences)</li>
                            <li>Highlight your most relevant skills and experience</li>
                            <li>Mention your career goals or what you're looking for</li>
                            <li>Use action words and quantify achievements when possible</li>
                        </ul>
                    </div>

                    {summary && (
                        <div className="bg-slate-50 p-4 rounded-lg">
                            <h4 className="font-medium text-slate-900 mb-2">Preview:</h4>
                            <p className="text-slate-700 leading-relaxed">{summary}</p>
                            <p className="text-sm text-slate-500 mt-2">Character count: {summary.length}</p>
                        </div>
                    )}
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

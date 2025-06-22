"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Plus, X, Code, Wrench } from "lucide-react"
import type {FormProps} from "@/pages/builder/data-form.tsx";

interface Step4Props {
    formData: FormProps
    updateFormData: (data: Partial<FormProps>) => void
    errors: Record<string, string>
}

export default function Step4SkillsTools({ formData, updateFormData, errors }: Step4Props) {
    const [skillInput, setSkillInput] = useState("")
    const [toolInput, setToolInput] = useState("")

    const addSkill = () => {
        if (skillInput.trim() && !formData.skills.includes(skillInput.trim())) {
            updateFormData({
                skills: [...formData.skills, skillInput.trim()],
            })
            setSkillInput("")
        }
    }

    const removeSkill = (skillToRemove: string) => {
        updateFormData({
            skills: formData.skills.filter((skill) => skill !== skillToRemove),
        })
    }

    const addTool = () => {
        if (toolInput.trim() && !formData.tools.includes(toolInput.trim())) {
            updateFormData({
                tools: [...formData.tools, toolInput.trim()],
            })
            setToolInput("")
        }
    }

    const removeTool = (toolToRemove: string) => {
        updateFormData({
            tools: formData.tools.filter((tool) => tool !== toolToRemove),
        })
    }

    const handleSkillKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            e.preventDefault()
            addSkill()
        }
    }

    const handleToolKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            e.preventDefault()
            addTool()
        }
    }

    const suggestedSkills = [
        "JavaScript",
        "Python",
        "React",
        "Node.js",
        "TypeScript",
        "Java",
        "C++",
        "HTML/CSS",
        "SQL",
        "Git",
        "Project Management",
        "Communication",
        "Leadership",
    ]

    const suggestedTools = [
        "VS Code",
        "GitHub",
        "Docker",
        "AWS",
        "Figma",
        "Slack",
        "Jira",
        "Photoshop",
        "Excel",
        "Tableau",
        "Jenkins",
        "Kubernetes",
    ]

    return (
        <div className="space-y-8">
            {/* Skills Section */}
            <div className="space-y-4">
                <div className="flex items-center space-x-2">
                    <Code className="w-5 h-5 text-blue-600" />
                    <h3 className="text-lg font-semibold">Skills</h3>
                </div>

                {errors.skills && <p className="text-sm text-red-600">{errors.skills}</p>}

                <div className="flex space-x-2">
                    <Input
                        value={skillInput}
                        onChange={(e) => setSkillInput(e.target.value)}
                        onKeyPress={handleSkillKeyPress}
                        placeholder="Enter a skill (e.g., JavaScript, Project Management)"
                        className="flex-1"
                    />
                    <Button onClick={addSkill} disabled={!skillInput.trim()}>
                        <Plus className="w-4 h-4" />
                    </Button>
                </div>

                {formData.skills.length > 0 && (
                    <div className="space-y-2">
                        <Label>Your Skills:</Label>
                        <div className="flex flex-wrap gap-2">
                            {formData.skills.map((skill, index) => (
                                <Badge key={index} variant="secondary" className="flex items-center space-x-1">
                                    <span>{skill}</span>
                                    <button onClick={() => removeSkill(skill)} className="ml-1 hover:text-red-600">
                                        <X className="w-3 h-3" />
                                    </button>
                                </Badge>
                            ))}
                        </div>
                    </div>
                )}

                <div className="space-y-2">
                    <Label>Suggested Skills:</Label>
                    <div className="flex flex-wrap gap-2">
                        {suggestedSkills
                            .filter((skill) => !formData.skills.includes(skill))
                            .map((skill, index) => (
                                <Badge
                                    key={index}
                                    variant="outline"
                                    className="cursor-pointer hover:bg-blue-50"
                                    onClick={() => {
                                        updateFormData({
                                            skills: [...formData.skills, skill],
                                        })
                                    }}
                                >
                                    <Plus className="w-3 h-3 mr-1" />
                                    {skill}
                                </Badge>
                            ))}
                    </div>
                </div>
            </div>

            {/* Tools Section */}
            <div className="space-y-4">
                <div className="flex items-center space-x-2">
                    <Wrench className="w-5 h-5 text-blue-600" />
                    <h3 className="text-lg font-semibold">Tools & Technologies</h3>
                </div>

                <div className="flex space-x-2">
                    <Input
                        value={toolInput}
                        onChange={(e) => setToolInput(e.target.value)}
                        onKeyPress={handleToolKeyPress}
                        placeholder="Enter a tool (e.g., VS Code, Figma)"
                        className="flex-1"
                    />
                    <Button onClick={addTool} disabled={!toolInput.trim()}>
                        <Plus className="w-4 h-4" />
                    </Button>
                </div>

                {formData.tools.length > 0 && (
                    <div className="space-y-2">
                        <Label>Your Tools:</Label>
                        <div className="flex flex-wrap gap-2">
                            {formData.tools.map((tool, index) => (
                                <Badge key={index} variant="secondary" className="flex items-center space-x-1">
                                    <span>{tool}</span>
                                    <button onClick={() => removeTool(tool)} className="ml-1 hover:text-red-600">
                                        <X className="w-3 h-3" />
                                    </button>
                                </Badge>
                            ))}
                        </div>
                    </div>
                )}

                <div className="space-y-2">
                    <Label>Suggested Tools:</Label>
                    <div className="flex flex-wrap gap-2">
                        {suggestedTools
                            .filter((tool) => !formData.tools.includes(tool))
                            .map((tool, index) => (
                                <Badge
                                    key={index}
                                    variant="outline"
                                    className="cursor-pointer hover:bg-blue-50"
                                    onClick={() => {
                                        updateFormData({
                                            tools: [...formData.tools, tool],
                                        })
                                    }}
                                >
                                    <Plus className="w-3 h-3 mr-1" />
                                    {tool}
                                </Badge>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

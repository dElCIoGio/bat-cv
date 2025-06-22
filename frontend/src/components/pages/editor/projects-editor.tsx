"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plus, Trash2, X } from "lucide-react"
import type { FormData } from "@/app/page"

interface ProjectsEditorProps {
    open: boolean
    formData: FormData
    onSave: (data: Partial<FormData>) => void
    onClose: () => void
}

const projectTypes = [
    { value: "project", label: "Personal Project" },
    { value: "freelance", label: "Freelance Work" },
    { value: "volunteer", label: "Volunteer Work" },
]

export default function ProjectsEditor({ open, formData, onSave, onClose }: ProjectsEditorProps) {
    const [projects, setProjects] = useState<FormData["projects"]>([])
    const [techInput, setTechInput] = useState<{ [key: string]: string }>({})

    useEffect(() => {
        if (open && formData) {
            setProjects([...formData.projects])
        }
    }, [open, formData])

    const addProject = () => {
        const newProject = {
            id: Date.now().toString(),
            title: "",
            description: "",
            technologies: [],
            link: "",
            type: "project" as const,
        }
        setProjects([...projects, newProject])
    }

    const updateProject = (index: number, field: string, value: string | string[]) => {
        const updated = projects.map((project, i) => (i === index ? { ...project, [field]: value } : project))
        setProjects(updated)
    }

    const removeProject = (index: number) => {
        setProjects(projects.filter((_, i) => i !== index))
    }

    const addTechnology = (projectIndex: number) => {
        const tech = techInput[projectIndex]?.trim()
        if (tech && !projects[projectIndex].technologies.includes(tech)) {
            const updated = [...projects[projectIndex].technologies, tech]
            updateProject(projectIndex, "technologies", updated)
            setTechInput((prev) => ({ ...prev, [projectIndex]: "" }))
        }
    }

    const removeTechnology = (projectIndex: number, techToRemove: string) => {
        const updated = projects[projectIndex].technologies.filter((tech) => tech !== techToRemove)
        updateProject(projectIndex, "technologies", updated)
    }

    const handleSave = () => {
        onSave({ projects })
        onClose()
    }

    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>Edit Projects</DialogTitle>
                </DialogHeader>

                <div className="space-y-4 py-4">
                    <div className="flex justify-between items-center">
                        <h3 className="text-lg font-semibold">Projects / Freelance / Volunteering</h3>
                        <Button onClick={addProject} className="flex items-center space-x-2">
                            <Plus className="w-4 h-4" />
                            <span>Add Project</span>
                        </Button>
                    </div>

                    <div className="space-y-4">
                        {projects.map((project, index) => (
                            <Card key={project.id}>
                                <CardHeader className="pb-4">
                                    <div className="flex items-center justify-between">
                                        <CardTitle className="text-lg">
                                            {project.title || "New Project"}
                                            <Badge variant="outline" className="ml-2">
                                                {projectTypes.find((t) => t.value === project.type)?.label}
                                            </Badge>
                                        </CardTitle>
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            onClick={() => removeProject(index)}
                                            className="text-red-600 hover:text-red-800"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </Button>
                                    </div>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label>Project Title</Label>
                                            <Input
                                                value={project.title}
                                                onChange={(e) => updateProject(index, "title", e.target.value)}
                                                placeholder="E-commerce Website"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label>Type</Label>
                                            <Select value={project.type} onValueChange={(value) => updateProject(index, "type", value)}>
                                                <SelectTrigger>
                                                    <SelectValue />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {projectTypes.map((type) => (
                                                        <SelectItem key={type.value} value={type.value}>
                                                            {type.label}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label>Description</Label>
                                        <Textarea
                                            value={project.description}
                                            onChange={(e) => updateProject(index, "description", e.target.value)}
                                            placeholder="Describe what you built, your role, and the impact..."
                                            rows={3}
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label>Technologies Used</Label>
                                        <div className="flex space-x-2">
                                            <Input
                                                value={techInput[index] || ""}
                                                onChange={(e) => setTechInput((prev) => ({ ...prev, [index]: e.target.value }))}
                                                onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addTechnology(index))}
                                                placeholder="React, Node.js, MongoDB..."
                                                className="flex-1"
                                            />
                                            <Button type="button" onClick={() => addTechnology(index)} disabled={!techInput[index]?.trim()}>
                                                <Plus className="w-4 h-4" />
                                            </Button>
                                        </div>

                                        {project.technologies.length > 0 && (
                                            <div className="flex flex-wrap gap-2 mt-2">
                                                {project.technologies.map((tech, techIndex) => (
                                                    <Badge key={techIndex} variant="secondary" className="flex items-center space-x-1">
                                                        <span>{tech}</span>
                                                        <button onClick={() => removeTechnology(index, tech)} className="ml-1 hover:text-red-600">
                                                            <X className="w-3 h-3" />
                                                        </button>
                                                    </Badge>
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <Label>Project Link (Optional)</Label>
                                        <Input
                                            value={project.link}
                                            onChange={(e) => updateProject(index, "link", e.target.value)}
                                            placeholder="https://github.com/username/project or https://project-demo.com"
                                        />
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

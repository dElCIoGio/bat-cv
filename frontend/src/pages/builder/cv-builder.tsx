
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Settings } from "lucide-react"




import {useSearchParams} from "react-router";
import ModernTemplate from "@/components/pages/editor/modern-template.tsx";
import ClassicTemplate from "@/components/pages/editor/classic-template.tsx";
import CreativeTemplate from "@/components/pages/editor/creative-template.tsx";
import MinimalTemplate from "@/components/pages/editor/minimal-template.tsx";
import TemplateSelectionDialog from "@/components/pages/editor/template-selection-dialog.tsx";
import CVSidebar from "@/components/pages/editor/cv-sidebar.tsx";
import PersonalInfoEditor from "@/components/pages/editor/personal-info-editor.tsx";
import SummaryEditor from "@/components/pages/editor/summary-editor.tsx";
import WorkExperienceEditor from "@/components/pages/editor/work-experience-editor.tsx";
import EducationEditor from "@/components/pages/editor/education-editor.tsx";
import SkillsEditor from "@/components/pages/editor/skills-editor.tsx";
import LanguagesEditor from "@/components/pages/editor/languages-editor.tsx";
import CertificationsEditor from "@/components/pages/editor/certifications-editor.tsx";
import ProjectsEditor from "@/components/pages/editor/projects-editor.tsx";
import type {FormProps} from "@/pages/builder/data-form.tsx";

const templates = {
    modern: ModernTemplate,
    classic: ClassicTemplate,
    creative: CreativeTemplate,
    minimal: MinimalTemplate,
}

export default function CVEditor() {
    const [searchParams, ] = useSearchParams()
    const [formData, setFormData] = useState<FormProps | null>(null)
    const [selectedTemplate, setSelectedTemplate] = useState<string>("")
    const [showTemplateDialog, setShowTemplateDialog] = useState(true)
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [editingSection, setEditingSection] = useState<string | null>(null)
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        const dataParam = searchParams.get("data")
        if (dataParam) {
            try {
                const parsedData = JSON.parse(decodeURIComponent(dataParam))
                setFormData(parsedData)
            } catch (error) {
                console.error("Error parsing form data:", error)
            }
        }
    }, [searchParams])

    const handleTemplateSelect = (template: string) => {
        setSelectedTemplate(template)
        setShowTemplateDialog(false)
    }

    const updateFormData = (updates: Partial<FormProps>) => {
        if (formData) {
            setFormData({ ...formData, ...updates })
        }
    }

    const handleSectionEdit = (section: string) => {
        setEditingSection(section)
    }

    const SelectedTemplate = selectedTemplate ? templates[selectedTemplate as keyof typeof templates] : null

    if (!formData) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                    <p className="text-slate-600">Loading your resume data...</p>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-slate-100">
            {/* Template Selection Dialog */}
            <TemplateSelectionDialog open={showTemplateDialog} onSelect={handleTemplateSelect} />

            {/* Header */}
            <div className="bg-white border-b border-slate-200 px-4 py-3">
                <div className="flex items-center justify-between max-w-7xl mx-auto">
                    <div className="flex items-center space-x-4">
                        <Button variant="ghost" size="sm" onClick={() => setSidebarOpen(!sidebarOpen)} className="lg:hidden">
                            <Settings className="w-4 h-4" />
                        </Button>
                        <h1 className="text-xl font-semibold text-slate-900">CV Editor</h1>
                        <div className="hidden md:flex items-center space-x-2 text-sm text-slate-600">
                            <span>Template: {selectedTemplate}</span>
                            <span>•</span>
                            <span>Page {currentPage}</span>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                            <ChevronLeft className="w-4 h-4 mr-1" />
                            Back to Builder
                        </Button>
                        <Button size="sm">
                            Export PDF
                            <ChevronRight className="w-4 h-4 ml-1" />
                        </Button>
                    </div>
                </div>
            </div>

            <div className="flex max-w-7xl mx-auto">
                {/* Sidebar */}
                <CVSidebar
                    open={sidebarOpen}
                    selectedTemplate={selectedTemplate}
                    onTemplateChange={setSelectedTemplate}
                    onClose={() => setSidebarOpen(false)}
                />

                {/* Main Content */}
                <div className="flex-1 p-4 lg:p-8">
                    <div className="max-w-4xl mx-auto">
                        {/* Page Navigation */}
                        <div className="flex items-center justify-center mb-6 space-x-4">
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                                disabled={currentPage === 1}
                            >
                                <ChevronLeft className="w-4 h-4" />
                            </Button>
                            <span className="text-sm text-slate-600">Page {currentPage} of 2</span>
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => setCurrentPage(Math.min(2, currentPage + 1))}
                                disabled={currentPage === 2}
                            >
                                <ChevronRight className="w-4 h-4" />
                            </Button>
                        </div>

                        {/* CV Display */}
                        <div className="bg-white shadow-lg" style={{ aspectRatio: "210/297" }}>
                            {SelectedTemplate && (
                                <SelectedTemplate formData={formData} onSectionEdit={handleSectionEdit} currentPage={currentPage} />
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Section Editors */}
            <PersonalInfoEditor
                open={editingSection === "personal"}
                formData={formData}
                onSave={updateFormData}
                onClose={() => setEditingSection(null)}
            />
            <SummaryEditor
                open={editingSection === "summary"}
                formData={formData}
                onSave={updateFormData}
                onClose={() => setEditingSection(null)}
            />
            <WorkExperienceEditor
                open={editingSection === "experience"}
                formData={formData}
                onSave={updateFormData}
                onClose={() => setEditingSection(null)}
            />
            <EducationEditor
                open={editingSection === "education"}
                formData={formData}
                onSave={updateFormData}
                onClose={() => setEditingSection(null)}
            />
            <SkillsEditor
                open={editingSection === "skills"}
                formData={formData}
                onSave={updateFormData}
                onClose={() => setEditingSection(null)}
            />
            <LanguagesEditor
                open={editingSection === "languages"}
                formData={formData}
                onSave={updateFormData}
                onClose={() => setEditingSection(null)}
            />
            <CertificationsEditor
                open={editingSection === "certifications"}
                formData={formData}
                onSave={updateFormData}
                onClose={() => setEditingSection(null)}
            />
            <ProjectsEditor
                open={editingSection === "projects"}
                formData={formData}
                onSave={updateFormData}
                onClose={() => setEditingSection(null)}
            />
        </div>
    )
}

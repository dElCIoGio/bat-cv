"use client"

import { useState } from "react"
import { useNavigate } from "react-router"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ChevronLeft, ChevronRight, Check } from "lucide-react"
import Step1UserProfile from "@/components/pages/builder/step1-user-profile.tsx";
import Step2WorkExperience from "@/components/pages/builder/step2-work-experience.tsx";
import Step3Education from "@/components/pages/builder/step3-education.tsx";
import Step4SkillsTools from "@/components/pages/builder/step4-skills-tools.tsx";
import Step5Languages from "@/components/pages/builder/step5-languages.tsx";
import Step6Certifications from "@/components/pages/builder/step6-certifications.tsx";
import Step7Projects from "@/components/pages/builder/step7-projects.tsx";
import Step8Summary from "@/components/pages/builder/step8-summary.tsx";
import Step9Layout from "@/components/pages/builder/step9-layout.tsx";
import Step10Export from "@/components/pages/builder/step10-export.tsx";
import { mockCVApi } from "@/api/routes/cv/mock.ts";


export type workExperienceProps = {
    id: string
    jobTitle: string
    company: string
    startDate: string
    endDate: string
    current: boolean
    responsibilities: string
}

export type EducationProps = {
    id: string
    school: string
    degree: string
    field: string
    graduationDate: string
    gpa?: string
}

export type LanguageProps = {
    id: string
    language: string
    proficiency: string
}

export type CertificationsProps = {
    id: string
    name: string
    issuer: string
    date: string
    expiryDate?: string
}

export type ProjectProps = {
    id: string
    title: string
    description: string
    technologies: string[]
    link?: string
    type: "project" | "freelance" | "volunteer"
}

export interface FormProps {
    // Step 1
    firstName: string
    lastName: string
    email: string
    phone: string
    location: string
    goal: string

    // Step 2
    workExperience: Array<workExperienceProps>

    // Step 3
    education: Array<EducationProps>

    // Step 4
    skills: string[]
    tools: string[]

    // Step 5
    languages: Array<LanguageProps>

    // Step 6
    certifications: Array<CertificationsProps>

    // Step 7
    projects: Array<ProjectProps>

    // Step 8
    summary: string

    // Step 9
    layout: {
        template: string
        colorScheme: string
        fontSize: string
    }
}

const initialFormData: FormProps = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    goal: "",
    workExperience: [],
    education: [],
    skills: [],
    tools: [],
    languages: [],
    certifications: [],
    projects: [],
    summary: "",
    layout: {
        template: "modern",
        colorScheme: "blue",
        fontSize: "medium",
    },
}

const steps = [
    { id: 1, title: "User Profile & Goal", component: Step1UserProfile },
    { id: 2, title: "Work Experience", component: Step2WorkExperience },
    { id: 3, title: "Education", component: Step3Education },
    { id: 4, title: "Skills & Tools", component: Step4SkillsTools },
    { id: 5, title: "Languages", component: Step5Languages },
    { id: 6, title: "Certifications & Courses", component: Step6Certifications },
    { id: 7, title: "Projects / Freelance / Volunteering", component: Step7Projects },
    { id: 8, title: "Professional Summary", component: Step8Summary },
    { id: 9, title: "Layout & Personalization", component: Step9Layout },
    { id: 10, title: "Export & Tailor", component: Step10Export },
]

export default function ResumeBuilder() {
    const [currentStep, setCurrentStep] = useState(1)
    const [formData, setFormData] = useState<FormProps>(initialFormData)
    const [completedSteps, setCompletedSteps] = useState<number[]>([])
    const [errors, setErrors] = useState<Record<string, string>>({})

    const updateFormData = (stepData: Partial<FormProps>) => {
        setFormData((prev) => ({ ...prev, ...stepData }))
    }

    const validateStep = (step: number): boolean => {
        const newErrors: Record<string, string> = {}

        switch (step) {
            case 1:
                if (!formData.firstName.trim()) newErrors.firstName = "First name is required"
                if (!formData.lastName.trim()) newErrors.lastName = "Last name is required"
                if (!formData.email.trim()) newErrors.email = "Email is required"
                else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid"
                if (!formData.phone.trim()) newErrors.phone = "Phone number is required"
                if (!formData.goal.trim()) newErrors.goal = "Goal is required"
                break
            case 2:
                if (formData.workExperience.length === 0) {
                    newErrors.workExperience = "At least one work experience is required"
                }
                break
            case 3:
                if (formData.education.length === 0) {
                    newErrors.education = "At least one education entry is required"
                }
                break
            case 4:
                if (formData.skills.length === 0) {
                    newErrors.skills = "At least one skill is required"
                }
                break
            case 8:
                if (!formData.summary.trim()) {
                    newErrors.summary = "Professional summary is required"
                }
                break
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const navigate = useNavigate()

    const handleNext = async () => {
        if (validateStep(currentStep)) {
            if (!completedSteps.includes(currentStep)) {
                setCompletedSteps((prev) => [...prev, currentStep])
            }
            if (currentStep === 8) {
                const { editKey } = await mockCVApi.saveData(formData)
                localStorage.setItem("cv_edit_key", editKey)
                navigate("/edit")
            } else if (currentStep < steps.length) {
                setCurrentStep(currentStep + 1)
            }
        }
    }

    const handlePrevious = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1)
        }
    }

    const handleStepClick = (stepNumber: number) => {
        if (stepNumber <= currentStep || completedSteps.includes(stepNumber - 1)) {
            setCurrentStep(stepNumber)
        }
    }

    const CurrentStepComponent = steps[currentStep - 1].component
    const progress = (currentStep / steps.length) * 100

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">Resume Builder</h1>
                    <p className="text-slate-600 text-lg">Create your professional resume in 10 simple steps</p>
                </div>

                {/* Progress Bar */}
                <div className="mb-8">
                    <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-medium text-slate-700">
              Step {currentStep} of {steps.length}
            </span>
                        <span className="text-sm font-medium text-slate-700">{Math.round(progress)}% Complete</span>
                    </div>
                    <Progress value={progress} className="h-2" />
                </div>

                {/* Step Navigation */}
                <div className="hidden md:flex justify-center mb-8 overflow-x-auto">
                    <div className="flex space-x-2">
                        {steps.map((step) => (
                            <button
                                key={step.id}
                                onClick={() => handleStepClick(step.id)}
                                className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                                    step.id === currentStep
                                        ? "bg-blue-600 text-white"
                                        : step.id < currentStep || completedSteps.includes(step.id)
                                            ? "bg-green-100 text-green-800 hover:bg-green-200"
                                            : "bg-slate-200 text-slate-600 cursor-not-allowed"
                                }`}
                                disabled={step.id > currentStep && !completedSteps.includes(step.id - 1)}
                            >
                                {completedSteps.includes(step.id) ? (
                                    <Check className="w-4 h-4" />
                                ) : (
                                    <span className="w-4 h-4 flex items-center justify-center text-xs">{step.id}</span>
                                )}
                                <span className="hidden lg:inline">{step.title}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Main Content */}
                <Card className="shadow-lg border-0">
                    <CardHeader className="bg-white border-b border-slate-200">
                        <CardTitle className="text-xl md:text-2xl text-slate-900">{steps[currentStep - 1].title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 md:p-8">
                        <CurrentStepComponent
                            formData={formData}
                            updateFormData={updateFormData}
                            errors={errors}
                            setErrors={setErrors}
                        />
                    </CardContent>
                </Card>

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8">
                    <Button
                        variant="outline"
                        onClick={handlePrevious}
                        disabled={currentStep === 1}
                        className="flex items-center space-x-2"
                    >
                        <ChevronLeft className="w-4 h-4" />
                        <span>Previous</span>
                    </Button>

                    <Button onClick={handleNext} disabled={currentStep === steps.length} className="flex items-center space-x-2">
                        <span>{currentStep === steps.length ? "Complete" : "Next"}</span>
                        <ChevronRight className="w-4 h-4" />
                    </Button>
                </div>
            </div>
        </div>
    )
}

import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Calendar, ExternalLink } from "lucide-react"
import type {FormProps} from "@/pages/builder/data-form.tsx";

interface ModernTemplateProps {
    formData: FormProps
    onSectionEdit: (section: string) => void
    currentPage: number
}

export default function ModernTemplate({ formData, onSectionEdit, currentPage }: ModernTemplateProps) {
    const formatDate = (dateString: string) => {
        if (!dateString) return ""
        const date = new Date(dateString)
        return date.toLocaleDateString("en-US", { month: "short", year: "numeric" })
    }

    if (currentPage === 1) {
        return (
            <div className="h-full p-8 text-sm">
                {/* Header */}
                <div
                    className="border-b-4 border-blue-600 pb-6 mb-6 cursor-pointer hover:bg-slate-50 p-2 rounded transition-colors"
                    onClick={() => onSectionEdit("personal")}
                >
                    <h1 className="text-3xl font-bold text-slate-900 mb-2">
                        {formData.firstName} {formData.lastName}
                    </h1>
                    <div className="flex flex-wrap gap-4 text-slate-600">
                        <div className="flex items-center space-x-1">
                            <Mail className="w-4 h-4" />
                            <span>{formData.email}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <Phone className="w-4 h-4" />
                            <span>{formData.phone}</span>
                        </div>
                        {formData.location && (
                            <div className="flex items-center space-x-1">
                                <MapPin className="w-4 h-4" />
                                <span>{formData.location}</span>
                            </div>
                        )}
                    </div>
                </div>

                {/* Professional Summary */}
                <div
                    className="mb-6 cursor-pointer hover:bg-slate-50 p-2 rounded transition-colors"
                    onClick={() => onSectionEdit("summary")}
                >
                    <h2 className="text-xl font-bold text-blue-600 mb-3">Professional Summary</h2>
                    <p className="text-slate-700 leading-relaxed">{formData.summary}</p>
                </div>

                {/* Work Experience */}
                <div
                    className="mb-6 cursor-pointer hover:bg-slate-50 p-2 rounded transition-colors"
                    onClick={() => onSectionEdit("experience")}
                >
                    <h2 className="text-xl font-bold text-blue-600 mb-4">Work Experience</h2>
                    <div className="space-y-4">
                        {formData.workExperience.map((exp, index) => (
                            <div key={exp.id} className="border-l-2 border-blue-200 pl-4">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <h3 className="font-semibold text-slate-900">{exp.jobTitle}</h3>
                                        <p className="text-blue-600 font-medium">{exp.company}</p>
                                    </div>
                                    <div className="text-right text-slate-600">
                                        <div className="flex items-center space-x-1">
                                            <Calendar className="w-3 h-3" />
                                            <span>
                        {formatDate(exp.startDate)} - {exp.current ? "Present" : formatDate(exp.endDate)}
                      </span>
                                        </div>
                                    </div>
                                </div>
                                {exp.responsibilities && (
                                    <div className="text-slate-700">
                                        {exp.responsibilities.split("\n").map((line, i) => (
                                            <p key={i} className="mb-1">
                                                {line}
                                            </p>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Education */}
                <div
                    className="mb-6 cursor-pointer hover:bg-slate-50 p-2 rounded transition-colors"
                    onClick={() => onSectionEdit("education")}
                >
                    <h2 className="text-xl font-bold text-blue-600 mb-4">Education</h2>
                    <div className="space-y-3">
                        {formData.education.map((edu, index) => (
                            <div key={edu.id} className="border-l-2 border-blue-200 pl-4">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="font-semibold text-slate-900">
                                            {edu.degree} in {edu.field}
                                        </h3>
                                        <p className="text-blue-600">{edu.school}</p>
                                        {edu.gpa && <p className="text-slate-600">GPA: {edu.gpa}</p>}
                                    </div>
                                    <div className="text-slate-600">
                                        <div className="flex items-center space-x-1">
                                            <Calendar className="w-3 h-3" />
                                            <span>{formatDate(edu.graduationDate)}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }

    // Page 2
    return (
        <div className="h-full p-8 text-sm">
            {/* Skills */}
            <div
                className="mb-6 cursor-pointer hover:bg-slate-50 p-2 rounded transition-colors"
                onClick={() => onSectionEdit("skills")}
            >
                <h2 className="text-xl font-bold text-blue-600 mb-4">Skills</h2>
                <div className="space-y-3">
                    <div>
                        <h3 className="font-semibold text-slate-900 mb-2">Technical Skills</h3>
                        <div className="flex flex-wrap gap-2">
                            {formData.skills.map((skill, index) => (
                                <Badge key={index} variant="secondary" className="bg-blue-100 text-blue-800">
                                    {skill}
                                </Badge>
                            ))}
                        </div>
                    </div>
                    {formData.tools.length > 0 && (
                        <div>
                            <h3 className="font-semibold text-slate-900 mb-2">Tools & Technologies</h3>
                            <div className="flex flex-wrap gap-2">
                                {formData.tools.map((tool, index) => (
                                    <Badge key={index} variant="outline" className="border-blue-200 text-blue-700">
                                        {tool}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Languages */}
            {formData.languages.length > 0 && (
                <div
                    className="mb-6 cursor-pointer hover:bg-slate-50 p-2 rounded transition-colors"
                    onClick={() => onSectionEdit("languages")}
                >
                    <h2 className="text-xl font-bold text-blue-600 mb-4">Languages</h2>
                    <div className="grid grid-cols-2 gap-3">
                        {formData.languages.map((lang, index) => (
                            <div key={lang.id} className="flex justify-between">
                                <span className="font-medium text-slate-900">{lang.language}</span>
                                <span className="text-slate-600 capitalize">{lang.proficiency}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Certifications */}
            {formData.certifications.length > 0 && (
                <div
                    className="mb-6 cursor-pointer hover:bg-slate-50 p-2 rounded transition-colors"
                    onClick={() => onSectionEdit("certifications")}
                >
                    <h2 className="text-xl font-bold text-blue-600 mb-4">Certifications</h2>
                    <div className="space-y-3">
                        {formData.certifications.map((cert, index) => (
                            <div key={cert.id} className="border-l-2 border-blue-200 pl-4">
                                <h3 className="font-semibold text-slate-900">{cert.name}</h3>
                                <p className="text-blue-600">{cert.issuer}</p>
                                <p className="text-slate-600">{formatDate(cert.date)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Projects */}
            {formData.projects.length > 0 && (
                <div
                    className="mb-6 cursor-pointer hover:bg-slate-50 p-2 rounded transition-colors"
                    onClick={() => onSectionEdit("projects")}
                >
                    <h2 className="text-xl font-bold text-blue-600 mb-4">Projects</h2>
                    <div className="space-y-4">
                        {formData.projects.map((project, index) => (
                            <div key={project.id} className="border-l-2 border-blue-200 pl-4">
                                <div className="flex items-start justify-between mb-2">
                                    <h3 className="font-semibold text-slate-900">{project.title}</h3>
                                    {project.link && <ExternalLink className="w-4 h-4 text-blue-600" />}
                                </div>
                                <p className="text-slate-700 mb-2">{project.description}</p>
                                {project.technologies.length > 0 && (
                                    <div className="flex flex-wrap gap-1">
                                        {project.technologies.map((tech, i) => (
                                            <Badge key={i} variant="outline" className="text-xs">
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

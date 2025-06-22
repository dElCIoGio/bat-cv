import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react"
import type {FormProps} from "@/pages/builder/data-form.tsx";

interface CreativeTemplateProps {
    formData: FormProps
    onSectionEdit: (section: string) => void
    currentPage: number
}

export default function CreativeTemplate({ formData, onSectionEdit, currentPage }: CreativeTemplateProps) {
    const formatDate = (dateString: string) => {
        if (!dateString) return ""
        const date = new Date(dateString)
        return date.toLocaleDateString("en-US", { month: "short", year: "numeric" })
    }

    if (currentPage === 1) {
        return (
            <div className="h-full flex">
                {/* Left Sidebar */}
                <div className="w-1/3 bg-gradient-to-b from-purple-600 to-purple-800 text-white p-6">
                    <div
                        className="cursor-pointer hover:bg-purple-700 p-2 rounded transition-colors mb-6"
                        onClick={() => onSectionEdit("personal")}
                    >
                        <h1 className="text-2xl font-bold mb-4">
                            {formData.firstName}
                            <br />
                            {formData.lastName}
                        </h1>
                        <div className="space-y-2 text-sm">
                            <div className="flex items-center space-x-2">
                                <Mail className="w-4 h-4" />
                                <span>{formData.email}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Phone className="w-4 h-4" />
                                <span>{formData.phone}</span>
                            </div>
                            {formData.location && (
                                <div className="flex items-center space-x-2">
                                    <MapPin className="w-4 h-4" />
                                    <span>{formData.location}</span>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Skills */}
                    <div
                        className="cursor-pointer hover:bg-purple-700 p-2 rounded transition-colors mb-6"
                        onClick={() => onSectionEdit("skills")}
                    >
                        <h2 className="text-lg font-bold mb-3">Skills</h2>
                        <div className="space-y-2">
                            {formData.skills.map((skill, index) => (
                                <div key={index} className="bg-purple-500 px-2 py-1 rounded text-xs">
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Languages */}
                    {formData.languages.length > 0 && (
                        <div
                            className="cursor-pointer hover:bg-purple-700 p-2 rounded transition-colors"
                            onClick={() => onSectionEdit("languages")}
                        >
                            <h2 className="text-lg font-bold mb-3">Languages</h2>
                            <div className="space-y-2">
                                {formData.languages.map((lang, index) => (
                                    <div key={lang.id} className="text-sm">
                                        <div className="font-medium">{lang.language}</div>
                                        <div className="text-purple-200 capitalize">{lang.proficiency}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Right Content */}
                <div className="flex-1 p-6 text-sm">
                    {/* Professional Summary */}
                    <div
                        className="mb-6 cursor-pointer hover:bg-slate-50 p-2 rounded transition-colors"
                        onClick={() => onSectionEdit("summary")}
                    >
                        <h2 className="text-xl font-bold text-purple-600 mb-3">About Me</h2>
                        <p className="text-slate-700 leading-relaxed">{formData.summary}</p>
                    </div>

                    {/* Work Experience */}
                    <div
                        className="mb-6 cursor-pointer hover:bg-slate-50 p-2 rounded transition-colors"
                        onClick={() => onSectionEdit("experience")}
                    >
                        <h2 className="text-xl font-bold text-purple-600 mb-4">Experience</h2>
                        <div className="space-y-4">
                            {formData.workExperience.map((exp, index) => (
                                <div key={exp.id} className="relative pl-6">
                                    <div className="absolute left-0 top-2 w-3 h-3 bg-purple-600 rounded-full"></div>
                                    <div className="absolute left-1.5 top-5 w-0.5 h-full bg-purple-200"></div>
                                    <div className="mb-2">
                                        <h3 className="font-bold text-slate-900">{exp.jobTitle}</h3>
                                        <p className="text-purple-600 font-medium">{exp.company}</p>
                                        <p className="text-slate-600 text-xs">
                                            {formatDate(exp.startDate)} - {exp.current ? "Present" : formatDate(exp.endDate)}
                                        </p>
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
                        className="cursor-pointer hover:bg-slate-50 p-2 rounded transition-colors"
                        onClick={() => onSectionEdit("education")}
                    >
                        <h2 className="text-xl font-bold text-purple-600 mb-4">Education</h2>
                        <div className="space-y-3">
                            {formData.education.map((edu, index) => (
                                <div key={edu.id} className="relative pl-6">
                                    <div className="absolute left-0 top-2 w-3 h-3 bg-purple-600 rounded-full"></div>
                                    <h3 className="font-bold text-slate-900">
                                        {edu.degree} in {edu.field}
                                    </h3>
                                    <p className="text-purple-600">{edu.school}</p>
                                    <p className="text-slate-600 text-xs">{formatDate(edu.graduationDate)}</p>
                                    {edu.gpa && <p className="text-slate-600 text-xs">GPA: {edu.gpa}</p>}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    // Page 2
    return (
        <div className="h-full p-6 text-sm">
            {/* Tools */}
            {formData.tools.length > 0 && (
                <div
                    className="mb-6 cursor-pointer hover:bg-slate-50 p-2 rounded transition-colors"
                    onClick={() => onSectionEdit("skills")}
                >
                    <h2 className="text-xl font-bold text-purple-600 mb-4">Tools & Technologies</h2>
                    <div className="flex flex-wrap gap-2">
                        {formData.tools.map((tool, index) => (
                            <Badge key={index} className="bg-purple-100 text-purple-800 border-purple-200">
                                {tool}
                            </Badge>
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
                    <h2 className="text-xl font-bold text-purple-600 mb-4">Certifications</h2>
                    <div className="space-y-4">
                        {formData.certifications.map((cert, index) => (
                            <div key={cert.id} className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg">
                                <h3 className="font-bold text-slate-900">{cert.name}</h3>
                                <p className="text-purple-600">{cert.issuer}</p>
                                <p className="text-slate-600">{formatDate(cert.date)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Projects */}
            {formData.projects.length > 0 && (
                <div
                    className="cursor-pointer hover:bg-slate-50 p-2 rounded transition-colors"
                    onClick={() => onSectionEdit("projects")}
                >
                    <h2 className="text-xl font-bold text-purple-600 mb-4">Featured Projects</h2>
                    <div className="space-y-4">
                        {formData.projects.map((project, index) => (
                            <div key={project.id} className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg">
                                <div className="flex items-start justify-between mb-2">
                                    <h3 className="font-bold text-slate-900">{project.title}</h3>
                                    {project.link && <ExternalLink className="w-4 h-4 text-purple-600" />}
                                </div>
                                <p className="text-slate-700 mb-3">{project.description}</p>
                                {project.technologies.length > 0 && (
                                    <div className="flex flex-wrap gap-1">
                                        {project.technologies.map((tech, i) => (
                                            <Badge key={i} variant="outline" className="text-xs border-purple-200 text-purple-700">
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

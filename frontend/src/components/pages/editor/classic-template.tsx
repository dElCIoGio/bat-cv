
import { Mail, Phone, MapPin } from "lucide-react"
import type {FormProps} from "@/pages/builder/data-form.tsx";

interface ClassicTemplateProps {
    formData: FormProps
    onSectionEdit: (section: string) => void
    currentPage: number
}

export default function ClassicTemplate({ formData, onSectionEdit, currentPage }: ClassicTemplateProps) {
    const formatDate = (dateString: string) => {
        if (!dateString) return ""
        const date = new Date(dateString)
        return date.toLocaleDateString("en-US", { month: "short", year: "numeric" })
    }

    if (currentPage === 1) {
        return (
            <div className="h-full p-8 text-sm font-serif">
                {/* Header */}
                <div
                    className="text-center border-b-2 border-slate-800 pb-4 mb-6 cursor-pointer hover:bg-slate-50 p-2 rounded transition-colors"
                    onClick={() => onSectionEdit("personal")}
                >
                    <h1 className="text-3xl font-bold text-slate-900 mb-3">
                        {formData.firstName} {formData.lastName}
                    </h1>
                    <div className="flex justify-center space-x-6 text-slate-600">
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
                    <h2 className="text-lg font-bold text-slate-900 mb-3 text-center uppercase tracking-wide">
                        Professional Summary
                    </h2>
                    <p className="text-slate-700 leading-relaxed text-justify">{formData.summary}</p>
                </div>

                {/* Work Experience */}
                <div
                    className="mb-6 cursor-pointer hover:bg-slate-50 p-2 rounded transition-colors"
                    onClick={() => onSectionEdit("experience")}
                >
                    <h2 className="text-lg font-bold text-slate-900 mb-4 text-center uppercase tracking-wide">
                        Professional Experience
                    </h2>
                    <div className="space-y-4">
                        {formData.workExperience.map((exp, index) => (
                            <div key={exp.id}>
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <h3 className="font-bold text-slate-900">{exp.jobTitle}</h3>
                                        <p className="font-semibold text-slate-700">{exp.company}</p>
                                    </div>
                                    <div className="text-slate-600 text-right">
                                        {formatDate(exp.startDate)} - {exp.current ? "Present" : formatDate(exp.endDate)}
                                    </div>
                                </div>
                                {exp.responsibilities && (
                                    <div className="text-slate-700 ml-4">
                                        {exp.responsibilities.split("\n").map((line, i) => (
                                            <p key={i} className="mb-1">
                                                • {line}
                                            </p>
                                        ))}
                                    </div>
                                )}
                                {index < formData.workExperience.length - 1 && <hr className="my-4 border-slate-300" />}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Education */}
                <div
                    className="mb-6 cursor-pointer hover:bg-slate-50 p-2 rounded transition-colors"
                    onClick={() => onSectionEdit("education")}
                >
                    <h2 className="text-lg font-bold text-slate-900 mb-4 text-center uppercase tracking-wide">Education</h2>
                    <div className="space-y-3">
                        {formData.education.map((edu, index) => (
                            <div key={edu.id}>
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="font-bold text-slate-900">
                                            {edu.degree} in {edu.field}
                                        </h3>
                                        <p className="font-semibold text-slate-700">{edu.school}</p>
                                        {edu.gpa && <p className="text-slate-600">GPA: {edu.gpa}</p>}
                                    </div>
                                    <div className="text-slate-600">{formatDate(edu.graduationDate)}</div>
                                </div>
                                {index < formData.education.length - 1 && <hr className="my-3 border-slate-300" />}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }

    // Page 2
    return (
        <div className="h-full p-8 text-sm font-serif">
            {/* Skills */}
            <div
                className="mb-6 cursor-pointer hover:bg-slate-50 p-2 rounded transition-colors"
                onClick={() => onSectionEdit("skills")}
            >
                <h2 className="text-lg font-bold text-slate-900 mb-4 text-center uppercase tracking-wide">Skills</h2>
                <div className="space-y-3">
                    <div>
                        <h3 className="font-bold text-slate-900 mb-2">Technical Skills:</h3>
                        <p className="text-slate-700">{formData.skills.join(" • ")}</p>
                    </div>
                    {formData.tools.length > 0 && (
                        <div>
                            <h3 className="font-bold text-slate-900 mb-2">Tools & Technologies:</h3>
                            <p className="text-slate-700">{formData.tools.join(" • ")}</p>
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
                    <h2 className="text-lg font-bold text-slate-900 mb-4 text-center uppercase tracking-wide">Languages</h2>
                    <div className="grid grid-cols-2 gap-2">
                        {formData.languages.map((lang, index) => (
                            <div key={lang.id} className="flex justify-between">
                                <span className="font-semibold text-slate-900">{lang.language}</span>
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
                    <h2 className="text-lg font-bold text-slate-900 mb-4 text-center uppercase tracking-wide">Certifications</h2>
                    <div className="space-y-3">
                        {formData.certifications.map((cert, index) => (
                            <div key={cert.id}>
                                <h3 className="font-bold text-slate-900">{cert.name}</h3>
                                <p className="text-slate-700">{cert.issuer}</p>
                                <p className="text-slate-600">{formatDate(cert.date)}</p>
                                {index < formData.certifications.length - 1 && <hr className="my-3 border-slate-300" />}
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
                    <h2 className="text-lg font-bold text-slate-900 mb-4 text-center uppercase tracking-wide">Projects</h2>
                    <div className="space-y-4">
                        {formData.projects.map((project, index) => (
                            <div key={project.id}>
                                <h3 className="font-bold text-slate-900">{project.title}</h3>
                                <p className="text-slate-700 mb-2">{project.description}</p>
                                {project.technologies.length > 0 && (
                                    <p className="text-slate-600">
                                        <strong>Technologies:</strong> {project.technologies.join(", ")}
                                    </p>
                                )}
                                {index < formData.projects.length - 1 && <hr className="my-4 border-slate-300" />}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}
